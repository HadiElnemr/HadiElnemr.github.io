// Fills in repository and user cards on the repositories page from the GitHub API.
// Cards are rendered server-side with a name and link, so they stay usable if the API is unreachable.
(function () {
  const API = "https://api.github.com";
  const CACHE_TTL_MS = 60 * 60 * 1000;

  const LANG_COLORS = {
    Python: "#3572A5",
    "Jupyter Notebook": "#DA5B0B",
    JavaScript: "#f1e05a",
    TypeScript: "#3178c6",
    C: "#555555",
    "C++": "#f34b7d",
    "C#": "#178600",
    Java: "#b07219",
    MATLAB: "#e16737",
    HTML: "#e34c26",
    CSS: "#563d7c",
    Shell: "#89e051",
    Go: "#00ADD8",
    Rust: "#dea584",
    "G-code": "#D08CF2",
    Arduino: "#bd79d1",
    TeX: "#3D6117",
  };

  function cacheGet(key) {
    try {
      const entry = JSON.parse(localStorage.getItem(key));
      if (entry && Date.now() - entry.t < CACHE_TTL_MS) return entry.v;
    } catch (e) {}
    return null;
  }

  function cacheSet(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify({ t: Date.now(), v: value }));
    } catch (e) {}
  }

  async function fetchJSON(path) {
    const key = "gh-cards:" + path;
    const cached = cacheGet(key);
    if (cached) return cached;
    const res = await fetch(API + path, { headers: { Accept: "application/vnd.github+json" } });
    if (!res.ok) throw new Error(res.status + " " + path);
    const data = await res.json();
    cacheSet(key, data);
    return data;
  }

  function formatCount(n) {
    return n >= 1000 ? (n / 1000).toFixed(1).replace(/\.0$/, "") + "k" : String(n);
  }

  function metaItem(iconClass, text, title) {
    const span = document.createElement("span");
    span.className = "gh-meta-item";
    if (title) span.title = title;
    const icon = document.createElement("i");
    icon.className = iconClass;
    span.append(icon, " " + text);
    return span;
  }

  function langItem(language) {
    const span = document.createElement("span");
    span.className = "gh-meta-item";
    const dot = document.createElement("span");
    dot.className = "gh-lang-dot";
    dot.style.backgroundColor = LANG_COLORS[language] || "#8b949e";
    span.append(dot, " " + language);
    return span;
  }

  async function fillRepo(card) {
    const repo = await fetchJSON("/repos/" + card.dataset.ghRepo);
    card.querySelector(".gh-card-desc").textContent = repo.description || "";
    const meta = card.querySelector(".gh-card-meta");
    if (repo.language) meta.append(langItem(repo.language));
    meta.append(metaItem("far fa-star", formatCount(repo.stargazers_count), "Stars"));
    meta.append(metaItem("fas fa-code-branch", formatCount(repo.forks_count), "Forks"));
  }

  async function fillUser(card) {
    const login = card.dataset.ghUser;
    const [user, repos] = await Promise.all([fetchJSON("/users/" + login), fetchJSON("/users/" + login + "/repos?per_page=100&type=owner")]);
    const stars = repos.reduce((sum, r) => sum + (r.fork ? 0 : r.stargazers_count), 0);
    if (user.name) card.querySelector(".gh-user-name strong").textContent = user.name;
    card.querySelector(".gh-card-desc").textContent = user.bio || "";
    const meta = card.querySelector(".gh-card-meta");
    meta.append(metaItem("fas fa-book", formatCount(user.public_repos) + " repos"));
    meta.append(metaItem("far fa-star", formatCount(stars) + " stars"));
    meta.append(metaItem("fas fa-user-friends", formatCount(user.followers) + " followers"));
  }

  function run() {
    document.querySelectorAll("[data-gh-repo]").forEach((card) => fillRepo(card).catch((e) => console.warn("github-cards:", e.message)));
    document.querySelectorAll("[data-gh-user]").forEach((card) => fillUser(card).catch((e) => console.warn("github-cards:", e.message)));
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", run);
  else run();
})();
