---
layout: page
title: Hand Gesture Controlled RC Drone
description: Sensors Course
img:  /assets/img/sensors_course/hardware.jpg
importance: 4
github: https://github.com/HadiElnemr/Hand-Gesture-Controlled-Drone
category: Course Projects
---

This is a toy drone that uses image processing techniques to identify hand gestures and control its altitude accordingly. This project was part of our Sensors Technology course project.



We were instructed to research sensors and pick a project based on a sensor of our choice. This project was selected and done in collaboration with four teammates, who chose a camera for the sensing element. We chose cameras due to their vast use cases thanks to image processing and computer vision.


We purchased a toy drone from a local seller and hacked its PCB to attach an H-bridge. This then allows us to change the speed of the DC motor controlling the rotor using pulse width modulation (PWM). The Python library CVZone library is used to detect hand gestures through a pre-trained computer vision model. In this implementation, we used it to detect which fingers on a hand are up. It is configured to use an initial gesture before tracking the hand's gestures. This allows it to focus on one hand only if multiple people are in the frame.

<img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/sensors_course/hardware.jpg' | relative_url }}" alt="" title="Hardware Assembly"/>
<div class="caption">
   Hardware Assembly
</div>

Three gestures are defined: the first is up, where the index finger is up. This rotates the drone's rotors at maximum speed to produce thrust and propel the drone upward. The second is down, where both the index and middle fingers are up simultaneously. This reduces the rotor speed to allow for a slow descent of the drone. The last is off, where the index, middle, and ring fingers are up. This completely turns off the drone rotors. Gestures are processed, then sent wirelessly to a NodeMCU, which controls the motor's PWM.


<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/sensors_course/Up.png" title="Up" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/sensors_course/Off.png" title="Hold" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/sensors_course/Down.png" title="Down" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Template Matching using opencv to verify the results.
</div>





### Team members

 - [David Micheal](https://github.com/DavidMicheal)
 - [Hadi Elnemr](https://github.com/HadiElnemr)
 - [Ahmed Fathy](https://github.com/AhmedFathyAbdelkhalek)
 - [Mohammed Ashraf](https://github.com/MohammedAshraf965)
 - [Ahmed Shaban]()

<img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/sensors_course/team.jpg' | relative_url }}" alt="" title="Team members"/>
<div class="caption">
   The Team: David Michael, Hadi Elnemr, Ahmed Fathy, Mohammed Ashraf, Ahmed Shaban. (Left to right)
</div>