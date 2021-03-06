---
layout: page
title: Numerical Analysis 
description: ENME 602
img:  /assets/img/Numerics_icon.jpeg
importance: 4
github:  
---

These are some notes written in markdown regarding the subject. Contributions are welcome indeed.
/br
In this course several important numerical techniques are studied to solve different problems that are difficult to sove analytically or even impossible, or to solve equations in faster ways.
/br
<h1>Bisection Method</h1>
If you have a continuous function that has a root in an interval $$[a,b]$$ where $$ f(a) * f(b) < 0 $$, then the root can be found.


<h2>Algorithm</h2> 
1. Calculate c, the midpoint of the interval, 
$$ c = (a + b)/2 $$.
2. Calculate the function value at the midpoint, $$f(c)$$.
3. If convergence is satisfactory (that is, $$c - a$$ is sufficiently small, or $$abs(f(c))$$ is sufficiently small), return c and stop iterating. 
4. Examine the sign of f(c) and replace either $$(a, f(a))$$ or $$(b, f(b))$$ with $$(c, f(c))$$ so that there is a zero crossing within the new interval.


<h2>Analysis</h2>
To calculate number of needed iterations $$n$$ to reach absolute error tolerance $$\epsilon = |c_{n}-c|\geq {\frac {|b-a|}{2^{n}}}$$, so number of iterations should be at least $$n \geq \log_2{\frac{|b-a|}{c_{n}-c}}$$. 

