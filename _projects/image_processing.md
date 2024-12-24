---
layout: page
title: Differential Drive Mobile Robot Positioning System and Target Tracking
description: Image Processing Course
img:  /assets/img/img_processing/setup.png
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

<div class="text-center">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/img_processing/data_flow_diagram.png" title="Data flow diagram" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/img_processing/workflow.png" title="Workflow" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Data flow and Workflow Diagrams
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/img_processing/hardware1.png" title="Up" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/img_processing/hardware2.png" title="Hold" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Hardware Design
</div>

<div class="text-center">
   <img class="img-fluid rounded z-depth-1" style="width: 1000px; height: auto;" src="{{ '/assets/img/img_processing/circuit_diagram.png' | relative_url }}" alt="" title="circuit_diagram"/>
   <div class="caption">
   Circuit Diagram
   </div>

   <img class="img-fluid rounded z-depth-1" style="width: 1000px; height: auto;" src="{{ '/assets/img/img_processing/scenarios.png' | relative_url }}" alt="" title="scenarios"/>
   <div class="caption">
   Different scenarios for the robot where two aruco markers represent the robot front and back and one marker for the target. The scenarios show different positions and orientation of the robot and the target.
   </div>

   <img class="img-fluid rounded z-depth-1" style="width: 1000px; height: auto;" src="{{ '/assets/img/img_processing/table.png' | relative_url }}" alt="" title="scenarios"/>
   <div class="caption">
   Prices and availability table <br>
   (Ram: RAM Electronics shop, Bab Ellouq, near Tahreer square, Cairo, Egypt)
   </div>
</div>


**Team members**:
- [Kareem Okasha](https://www.linkedin.com/in/kareem-okasha-872846237/),
- Khaled Zaky,
- [Mohamed Shaban](https://www.linkedin.com/in/mohamed-shaban-mshaban/),
- [Mohammed Tawfiq](https://www.linkedin.com/in/mohammed-rahmy/)
- Hadi Elnemr

Course Instructors:
- [Dr. Omar Shehata](https://ieeexplore.ieee.org/author/37085351339)
- [M.Sc. Dalia Mamdouh](https://scholar.google.com/citations?user=w9-h9uUAAAAJ&hl=en)
- [M.Sc. Mai Mira](https://eg.linkedin.com/in/mai-mira-b25303129)