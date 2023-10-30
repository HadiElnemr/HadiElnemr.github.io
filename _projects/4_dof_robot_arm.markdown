---
layout: page
title: 4 DOF Humanoid Robot Arm
description: Robotics Course
img:  /assets/img/robotics_course/poppy.gif
importance: 4
# github:
category: Course Project
---

This is a modified Poppy humanoid arm to help people with tremors do tasks that require a steady hand. These tasks can be simple, such as drinking water, or they can be dangerous, such as using sharp objects. This arm helps get these tasks done in a safe and repeatable manner. 

This project was part of our robotics course at the GUC. We were instructed to research service robots that help the elderly and then modify a Poppy humanoid arm to match the selected service robot application. This project was selected and done in collaboration with three teammates. Our application aimed to help the elderly as well as anyone with tremor do everyday tasks in a reliable way. 

<!-- Add image -->
<img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/robotics_course/robotics_exhibition.jpg' | relative_url }}" alt="" title="Exhibition image"/>
<div class="caption">
   Part of the team at the 3rd Annual Mechatronics and Robotics Exhibition. 
   Hadi Elnemr and Ahmed Fathy (left to right)
</div>

### Design

The humanoid arm is based on the infamous poppy humanoid, developed by Matthieu Lapeyre, Pierre Rouanet, and Jonathan Grizou. The original design was modified by the addition of a robotic gripper to replace the hand. The gripper is designed in SOLIDWORKS, and there were several iterations before reaching a final design that was optimal for our needs.

<!-- Add image -->
<!-- justify-content-sm-center -->

<div class="row justify-content-sm-center">
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.html path="assets/img/robotics_course/gripper.png" title="Robot arm project" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

<!-- 
<img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/robotics_course/gripper.png' | relative_url }}" alt="" title="example image"/>
<div class="caption">
   The final gripper design
</div> -->

### Components

The arm is fairly simple in terms of components and assembly. The design was 3D printed and connected using high-torque servo motors. There are four high-torque servos in total and an additional servo for the gripper. All five servos are controlled using an Arduino Nano and everything is powered using a 5V, 10A power supply unit (PSU).

<!-- Add image -->
<img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/robotics_course/Robo_Grip_Assembly.jpg' | relative_url }}" alt="" title="3D printed robot arm Assembly"/>
<div class="caption">
   Assembly of the arm
</div>

### Simulation

We simulated the design on Matlab Simscape Multibody. We came up with some joints positions to do path planning and visualise it. The result came as follows:
![](/assets/img/robotics_course/poppy.gif)

### Team members

 - [Ahmed Fathy](https://github.com/AhmedFathyAbdelkhalek)
 - [David Micheal](https://github.com/DavidMicheal)
 - [Hadi Elnemr](https://github.com/HadiElnemr)
 - [Mohammed Ashraf](https://github.com/MohammedAshraf965)


