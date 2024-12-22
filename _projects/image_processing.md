---
layout: page
title: Differential Drive Mobile Robot Positioning System and Target Tracking
description: Image Processing Course
# img:  /assets/img/autonomous/hardware.jpg
importance: 4
# github: https://github.com/HadiElnemr/
category: Course Projects
---

In this project, we implement a differential drive mobile robot positioning system and target tracking using image processing techniques. The system is designed to localize a robot in indoor environments using:
- a ceiling-mounted camera for real-time tracking
- an ESP32 microcontroller
- a Python program on a PC for image processing and control decisions
- Aruco markers for target identification
- a differential-wheeled robot


To process real-time video feed from the camera, we use OpenCV and Python. Operations such as intensity transformations, geometric adjustments, and Aruco marker detection are performed to facilitate accurate target tracking. The closed-loop feedback mechanism ensures responsive motor control based on real-time image analysis.

<div class="row mt-3 justify-content-center">
    <div class="col-sm-12 text-center mt-3 mt-md-0">
        {% include video.html path="assets/video/img_processing/exhibition_fully_working.mp4" class="img-fluid rounded z-depth-1" controls=true %}
        <div class="caption">
            Exhibition fully working System
        </div>
    </div>
</div>



**Team members**:
- Kareem Ashraf Okasha,
- Khaled Zaky,
- Mohamed Shaban,
- Mohammed Tawfiq,
- Hadi Elnemr