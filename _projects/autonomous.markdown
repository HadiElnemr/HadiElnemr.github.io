---
layout: page
title: Partial-Autonomous ROS-enabled Ackermann Vehicle
description: Autonomous Systems Course
# img:  /assets/img/autonomous/hardware.jpg
importance: 4
# github: https://github.com/HadiElnemr/
category: Course Project
---

Few days ago, we presented our partially automated 1:16 model-scale Ackermann vehicle. Our vehicle was an RC car that we hacked to put some sensors, an actuatot and a Processor to control the vehicle both longitudinally and laterally.

To compute the velocity, we implemented our own encoder which is made of an IR sensor and some white pieces of paper glued to the interior facing part of a tire.

We used a Raspberry Pi 3B+ as our on-board processor, where as an Arduino Nano RP2040 was used to deliver the sensors and actuators signals.

The Arduino Nano contained an IMU which was used, along with a complementary filter to accurately get the heading angle of the vehicle.

A servo motor was used to actuate the steering mechanism, while an H-bridge was utilised to control the longitudinal motion.

For the control, a simple PID controller was used of the longitudinal control, while for the lateral control (steering), a Stanley controller was implemented.

For the communication of all data between the different modules, Robot Operating System (ROS) was used. Multiple scenarios were then tested in simulation to assess the performance of our system.

<!-- <img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/sensors_course/hardware.jpg' | relative_url }}" alt="" title="example image"/>
<div class="caption">
   Hardware Assembly
</div> -->

<!-- <img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/sensors_course/team.jpg' | relative_url }}" alt="" title="example image"/>
<div class="caption">
   The Team: David Michael, Hadi Elnemr, Ahmed Fathy, Mohammed Ashraf, Ahmed Shaban. (Left to right)
</div> -->