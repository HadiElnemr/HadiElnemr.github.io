---
layout: page
title: Multi UAV Task Assignment and Path Planning
description: MCTR 1002
# img:  /assets/img/Numerics_icon.jpeg
importance: 1
github: https://github.com/HadiElnemr/UAVs-Task-Assignment-and-Path-Planning
---

<!-- write a markdown page about our optimisation techniques course where we tackled the MUTAPP problem using 4 different approaches--> 


# Multi UAV Task Assignment and Path Planning

In this project, we study multiple optimisation techniques to tackle the task assignment and path planning problem for multi Unmanned Aerial Vehicles (UAVs).

This problem, abbreviated as MUTAPP problem, is considered an NP-hard problem and can be described as a Multi Travelling Salesman Problem (MTSP).

We encounter solutions such as Simulated Annealing (SA), Genetic Algorithm (GA), Hybrid Ant Colony Optimisation and Whale Optimisation Algorithm (H-ACO-WOA), and Hybrid ACO and Dragonfly Algorithm (H-ACO-DA).

The project is implemented in Python and the results are visualised using the Matplotlib library.

## Problem Description

The MUTAPP problem is a multi-agent optimisation problem where a set of UAVs are tasked to visit a set of targets. The targets are assumed to be static and the UAVs are assumed to be identical. The UAVs are assumed to have a limited battery life and the targets are assumed to have a limited lifetime. The objective is to minimise the total cost of the mission, which is the sum of the cost of the UAVs and the cost of the targets.

The cost of the UAVs is the sum of the distance travelled by each UAV and the cost of the targets is the sum of the time each target is visited by a UAV.

The problem is considered an NP-hard problem and can be described as a Multi Travelling Salesman Problem (MT

## Solution Approaches

We consider four different approaches to solve the MUTAPP problem:

1. Simulated Annealing (SA)
2. Genetic Algorithm (GA)
3. Hybrid Ant Colony Optimisation and Whale Optimisation Algorithm (H-ACO-WOA)
4. Hybrid ACO and Dragonfly Algorithm (H-ACO-DA)

### Simulated Annealing (SA)

Simulated Annealing (SA) is a probabilistic technique for approximating the global optimum of a given function. It is often used to find good solutions to combinatorial optimisation problems.

The algorithm starts with an initial solution and then iteratively improves it by making small changes to the solution. The changes are accepted if they improve the solution, but are also accepted with a certain probability if they make the solution worse. This probability decreases as the algorithm progresses, which means that the algorithm is less likely to accept changes that make the solution worse as the algorithm progresses.

### Genetic Algorithm (GA)

Genetic Algorithm (GA) is a search heuristic that is inspired by the process of natural selection. It is commonly used to generate high-quality solutions to optimisation and search problems by relying on bio-inspired operators such as mutation, crossover and selection.

The algorithm starts by initialising a population of candidate solutions to the problem. It then evaluates the fitness of each candidate solution, which is used to determine how likely a candidate solution is to be selected for reproduction. The fitter solutions are more likely to be selected for reproduction, which means that the fitter solutions are more likely to be passed on to the next generation of the algorithm.

### Hybrid Ant Colony Optimisation and Whale Optimisation Algorithm (H-ACO-WOA)

Ant Colony Optimisation (ACO) is a probabilistic technique for solving combinatorial optimisation problems. It is inspired by the foraging behaviour of real ants and is often used to find good solutions to the Travelling Salesman Problem (TSP).

The algorithm starts by initialising a set of candidate solutions to the problem. It then evaluates the fitness of each candidate solution, which is used to determine how likely a candidate solution is to be selected for reproduction. The fitter solutions are more likely to be selected for reproduction, which means that the fitter solutions are more likely to be passed on to the next generation of the algorithm.

Whale Optimisation Algorithm (WOA) is a metaheuristic algorithm inspired by the hunting behaviour of whales. It is commonly used to find good solutions to continuous optimisation problems.

The algorithm starts by initialising a population of candidate solutions to the problem. It then evaluates the fitness of each candidate solution, which is used to determine how likely a candidate solution is to be selected for reproduction. The fitter solutions are more likely to be selected for reproduction, which means that the fitter solutions are more likely to be passed on to the next generation of the algorithm.

### Hybrid ACO and Dragonfly Algorithm (H-ACO-DA)

Ant Colony Optimisation (ACO) is a probabilistic technique for solving combinatorial optimisation problems. It is inspired by the foraging behaviour of real ants and is often used to find good solutions to the Travelling Salesman Problem (TSP).

The algorithm starts by initialising a set of candidate solutions to the problem. It then evaluates the fitness of each candidate solution, which is used to determine how likely a candidate solution is to be selected for reproduction. The fitter solutions are more likely to be selected for reproduction, which means that the fitter solutions are more likely to be passed on to the next generation of the algorithm.

Dragonfly Algorithm (DA) is a metaheuristic algorithm inspired by the hunting behaviour of dragonflies. It is commonly used to find good solutions to continuous optimisation problems.

The algorithm starts by initialising a population of candidate solutions to the problem. It then evaluates the fitness of each candidate solution, which is used to determine how likely a candidate solution is to be selected for reproduction. The fitter solutions are more likely to be selected for reproduction, which means that the fitter solutions are more likely to be passed on to the next generation of the algorithm.

## Results

The results of the project are visualised using the Matplotlib library.

The following figure shows the results of the Simulated Annealing (SA) approach.

[![Simulated Annealing (SA)](/assets/img/multi_uav_task_assignment_and_path_planning/sa.png)](/assets/img/multi_uav_task_assignment_and_path_planning/sa.png)

The following figure shows the results of the Genetic Algorithm (GA) approach.

[![Genetic Algorithm (GA)](/assets/img/multi_uav_task_assignment_and_path_planning/ga.png)](/assets/img/multi_uav_task_assignment_and_path_planning/ga.png)

The following figure shows the results of the Hybrid Ant Colony Optimisation and Whale Optimisation Algorithm (H-ACO-WOA) approach.

[![Hybrid Ant Colony Optimisation and Whale Optimisation Algorithm (H-ACO-WOA)](/assets/img/multi_uav_task_assignment_and_path_planning/h_aco_woa.png)](/assets/img/multi_uav_task_assignment_and_path_planning/h_aco_woa.png)

The following figure shows the results of the Hybrid ACO and Dragonfly Algorithm (H-ACO-DA) approach.

[![Hybrid ACO and Dragonfly Algorithm (H-ACO-DA)](/assets/img/multi_uav_task_assignment_and_path_planning/h_aco_da.png)](/assets/img/multi_uav_task_assignment_and_path_planning/h_aco_da.png)

## Conclusion

The project has demonstrated how to solve the Multi UAV Task Assignment and Path Planning (MUTAPP) problem using different approaches. The project has also demonstrated how to visualise the results of the different approaches.

The project has demonstrated how to solve the Multi UAV Task Assignment and Path Planning (MUTAPP) problem using different approaches. The project has also demonstrated how to visualise the results of the different approaches.

## References

1. [Multi UAV Task Assignment and Path Planning (MUTAPP) Problem](https://en.wikipedia.org/wiki/Multi_UAV_task_assignment_and_path_planning_problem)
2. [Simulated Annealing (SA)](https://en.wikipedia.org/wiki/Simulated_annealing)
3. [Genetic Algorithm (GA)](https://en.wikipedia.org/wiki/Genetic_algorithm)
4. [Ant Colony Optimisation (ACO)](https://en.wikipedia.org/wiki/Ant_colony_optimization_algorithms)
5. [Whale Optimisation Algorithm (WOA)](https://en.wikipedia.org/wiki/Whale_optimization_algorithm)
6. [Dragonfly Algorithm (DA)](https://en.wikipedia.org/wiki/Dragonfly_algorithm)
7. [Matplotlib](https://matplotlib.org/)
8. [Python](https://www.python.org/)
9. [Jupyter Notebook](https://jupyter.org/)

## Source Code

The source code for the project is available on [GitHub](

## Author
    
    [![Author](/assets/img/multi_uav_task_assignment_and_path_planning/author.png)](/assets/img/multi_uav_task_assignment_and_path_planning/author.png)

## License
    
    [![License](/assets/img/multi_uav_task_assignment_and_path_planning/license.png)](/assets/img/multi_uav_task_assignment_and_path_planning/license.png)

## Contact
    
    [![Contact](/assets/img/multi_uav_task_assignment_and_path_planning/contact.png)](/assets/img/multi_uav_task_assignment_and_path_planning/contact.png)

## Donate
    
    [![Donate](/assets/img/multi_uav_task_assignment_and_path_planning/donate.png)](/assets/img/multi_uav_task_assignment_and_path_planning/donate.png)

## Disclaimer
    
    [![Disclaimer](/assets/img/multi_uav_task_assignment_and_path_planning/disclaimer.png)](/assets/img/multi_uav_task_assignment_and_path_planning/disclaimer.png)

## Acknowledgements
    
    [![Acknowledgements](/assets/img/multi_uav_task_assignment_and_path_planning/acknowledgements.png)](/assets/img/multi_uav_task_assignment_and_path_planning/acknowledgements.png)

## About
    
    [![About](/assets/img/multi_uav_task_assignment_and_path_planning/about.png)](/assets/img/multi_uav_task_assignment_and_path_planning/about.png)

## Social Media
    
    [![Social Media](/assets/img/multi_uav_task_assignment_and_path_planning/social_media.png)](/assets/img/multi_uav_task_assignment_and_path_planning/social_media.png)

## GitHub
    
    [![GitHub](/assets/img/multi_uav_task_assignment_and_path_planning/github.png)](/assets/img/multi_uav_task_assignment_and_path_planning/github.png)

