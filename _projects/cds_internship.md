---
layout: page
title: Networked control systems Internship
description: Control and Dynamic Systems Lab Internship
#img: /assets/img/mctr_project/robot.png
importance: 1
category: Internship
---
In this internship we implemented a communication system between 
a raspberry pi 4 (will be put on a quadcopter) and a PC where we 
used **MAVLink** communication protocol to transmit sensor data from 
the quadcopter to the PC and Socket programming to transmit
the actuator signal from the PC to the actuators on the quadcopter
and Flask web server to serve a webpage containing the sensor data 
which gets updated each second.  
The webpage is accessible from any where
as we **"local tunneled"** the local host which hosts the webserver. 
 
This all was done using the wifi module on the raspberry pi, our future
research will discuss how is this achievable using RF technology.

Team members: Ahmed Fathy, Ahmed Mady, Amr Hassan, Hadi Elnemr, Tarek Emad.

