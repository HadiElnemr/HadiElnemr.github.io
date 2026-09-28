# Hadi Elnemr — personal website

Source for [hadielnemr.github.io](https://hadielnemr.github.io): my academic homepage, projects, blog and CV.
I am a doctoral candidate in the Cyber-Physical Systems group at TUM (Heilbronn campus), working on discrete reachability analysis.

The site is built with [Jekyll](https://jekyllrb.com/) on the [al-folio](https://github.com/alshedivat/al-folio) theme (v1.2), and deployed to GitHub Pages by GitHub Actions on every push to `main`.

## Where things live

| What                          | Where                                                                |
| ----------------------------- | -------------------------------------------------------------------- |
| About page                    | `_pages/about.md`                                                    |
| Projects                      | `_projects/` (categories set in `_pages/projects.md`)                |
| Blog posts                    | `_posts/`                                                            |
| CV page                       | `_data/cv.yml` (PDF linked from `cv_pdf` in `_pages/cv.md`)          |
| Repositories page             | `_data/repositories.yml`                                             |
| Social links                  | `_data/socials.yml`                                                  |
| Site settings                 | `_config.yml`                                                        |
| Images, PDFs and videos       | `assets/img/`, `assets/pdf/`, `assets/video/`                        |
| Theme colours and card styles | `_sass/_custom.scss` (loaded by the `assets/css/main.scss` override) |

The theme's layouts and styles come from the `al_folio_*` gems pinned in the `Gemfile`.
A few files override the gem versions on purpose; they are listed in `.al-folio-overrides.yml`:

- `_includes/repository/repo.liquid`, `_includes/repository/repo_user.liquid` and `assets/js/github-cards.js`: repository cards filled from the GitHub API
- `assets/css/main.scss`: the gem's stylesheet entry point, plus `_sass/_custom.scss`

## Building locally

With Docker:

```bash
docker compose up
```

Or with Ruby 3.3 and Bundler:

```bash
bundle install
bundle exec jekyll serve
```

Then open <http://localhost:8080> (Docker) or <http://localhost:4000> (Jekyll).

## Updating the theme

Upstream al-folio is tracked as the `upstream` remote. To pick up a new release, bump the `al_folio_*` gem versions in the `Gemfile`, run `bundle update`, and check the overrides still match:

```bash
bundle exec al-folio upgrade audit
bundle exec al-folio upgrade overrides audit
```

The pre-v1 version of the site is kept under the `pre-v1-backup` tag.

## License

The site content is my own. The al-folio theme is MIT-licensed; see [LICENSE](LICENSE).
