---
layout: page
title: Differential Drive Mobile Robot Positioning System and Target Tracking
description: Image Processing Course
img:  /assets/img/img_processing/setup.png
importance: 4
github: https://github.com/HadiElnemr/Differential-Drive-Mobile-Robot-Positioning-System-and-Target-Tracking
category: Course Projects
---

In this project, we implement a differential drive mobile robot positioning system and target tracking using image processing techniques. The system is designed to localize a robot in indoor environments using:
- a ceiling-mounted camera for real-time tracking
- an ESP32 microcontroller
- a Python program on a PC for image processing and control decisions
- Aruco markers for target identification
- a differential-wheeled robot


To process real-time video feed from the camera, we use OpenCV and Python. Operations such as intensity transformations, geometric adjustments, and Aruco marker detection are performed to facilitate accurate target tracking. The closed-loop feedback mechanism ensures responsive motor control based on real-time image analysis.

Check codes for Image processing and control along with ESP32 codes in this [repo](https://github.com/HadiElnemr/Differential-Drive-Mobile-Robot-Positioning-System-and-Target-Tracking).

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

<!-- Add video without sound -->
<div class="row mt-3 justify-content-center">
    <div class="col-sm-12 text-center mt-3 mt-md-0">
        {% include video.html path="assets/video/img_processing/demonstration_team_27.mp4" class="img-fluid rounded z-depth-1" controls=true %}
        <div class="caption">
            Demonstration of different scenarios
        </div>
    </div>
</div>

**Team members**
- [Kareem Okasha](https://www.linkedin.com/in/kareem-okasha-872846237/),
- Khaled Zaky,
- [Mohamed Shaban](https://www.linkedin.com/in/mohamed-shaban-mshaban/),
- [Mohammed Tawfiq](https://www.linkedin.com/in/mohammed-rahmy/)
- Hadi Elnemr

**Course Instructors**
- [Dr. Omar Shehata](https://ieeexplore.ieee.org/author/37085351339)
- [M.Sc. Dalia Mamdouh](https://scholar.google.com/citations?user=w9-h9uUAAAAJ&hl=en)
- [M.Sc. Mai Mira](https://eg.linkedin.com/in/mai-mira-b25303129)

**References**

[1] Kloock, Maximilian, Patrick Scheffe, Isabelle Tülleners, Janis Maczijewski, Stefan Kowalewski, and Bassam Alrifaee. "Vision-based real-time indoor positioning system for multiple vehicles." IFAC-PapersOnLine 53, no. 2 (2020): 15446-15453.

[2] Yi, Jingru, et al. "Oriented object detection in aerial images with box boundary-aware vectors." Proceedings of the IEEE/CVF Winter Conference on Applications of Computer Vision. 2021.

[3] Yang, Xue, and Junchi Yan. "Arbitrary-oriented object detection with circular smooth label." Computer Vision–ECCV 2020: 16th European Conference, Glasgow, UK, August 23–28, 2020, Proceedings, Part VIII 16. Springer International Publishing, 2020.

[4] Benjdira, Bilel, et al. "Car detection using unmanned aerial vehicles: Comparison between faster r-cnn and yolov3." 2019 1st International Conference on Unmanned Vehicle Systems-Oman (UVS). IEEE, 2019.

[5] Braun, João, et al. "Object Detection for Indoor Localization System." Optimization, Learning Algorithms and Applications: Second International Conference, OL2A 2022, Póvoa de Varzim, Portugal, October 24-25, 2022, Proceedings. Cham: Springer International Publishing, 2023.