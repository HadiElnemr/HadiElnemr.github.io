---
layout: page
title: Partial-Autonomous ROS-enabled Ackermann Vehicle
description: Autonomous Systems Course
img:  /assets/img/autonomous_course/auto_vehicle.jpg
importance: 4
# github: https://github.com/HadiElnemr/
category: Course Projects
---

Few days ago, we presented our partially automated 1:16 model-scale Ackermann vehicle. Our vehicle was an RC car that we hacked to put some sensors, an actuatot and a Processor to control the vehicle both longitudinally and laterally.

To compute the velocity, we implemented our own encoder which is made of an IR sensor and some white pieces of paper glued to the interior facing part of a tire.

We used a Raspberry Pi 3B+ as our on-board processor, where as an Arduino Nano RP2040 was used to deliver the sensors and actuators signals.

The Arduino Nano contained an IMU which was used, along with a complementary filter to accurately get the heading angle of the vehicle.

A servo motor was used to actuate the steering mechanism, while an H-bridge was utilised to control the longitudinal motion.

For the control, a simple PID controller was used of the longitudinal control, while for the lateral control (steering), a Stanley controller was implemented.

For the communication of all data between the different modules, Robot Operating System (ROS) was used. Multiple scenarios were then tested in simulation to assess the performance of our system.

Team Members:
- [Kareem Okasha](https://www.linkedin.com/in/kareem-okasha-872846237/)
- [Mohamed Shaban](https://www.linkedin.com/in/mohamed-shaban-mshaban/)
- [Mohammed Tawfiq](https://www.linkedin.com/in/mohammed-rahmy/)
- [Abdelrahman Hany ](https://www.linkedin.com/in/abdelrahman-hany-94a828187/)
- Hadi Elnemr

Course Instructors:
- [Dr. Omar Shehata](https://ieeexplore.ieee.org/author/37085351339)
- [Mohamed Shaaban](https://www.linkedin.com/in/mohamed-shaaban-2102b4146/) (Course Teaching Assistant)


<img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/autonomous_course/team_pic.jpg' | relative_url }}" alt="" title="Team Picture"/>
<div class="caption">
   Team Picture at Exhibition Day (Right to Left): Hadi Elnemr, Kareem Okasha, Mohamed Shaban, Dr. Omar Shehata (Course Instructor), Mohammed Tawfiq, Abdelrahman Hany, Mohamed Shaaban (Course Teaching Assistant)
</div>

<!-- Add video from assets/videos -->
<!-- {% include video.html path="assets/video/pexels-engin-akyurt-6069112-960x540-30fps.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true %} -->

<div class="row mt-3 justify-content-center">
    <div class="col-sm-12 text-center mt-3 mt-md-0">
        {% include video.html path="assets/video/autonomous_course/Autonomous_Vehicle_Drifting.mp4" class="img-fluid rounded z-depth-1" controls=true %}
        <div class="caption">
            Lane Keeping Test Drifting "Amazing" Mistake
        </div>
        <div class="caption">
            Error explanation: After the vehicle exceeded the goal, the difference between current position and the goal became negative. This difference was sent to the arduino which is read as a 2-complement number (starting with 1.....), hence, a very large number was sent as an input to the motors, getting max speed for the motors and hence the drifting. Error was fixed after a couple of accidents :)
        </div>
    </div>
    <div class="col-sm-12 text-center mt-3 mt-md-0">
        {% include video.html path="assets/video/autonomous_course/Autonomous_Systems_Project_Simulation_MS_4_Team_18.mp4" class="img-fluid rounded z-depth-1" controls=true %}
        <div class="caption">
            Lane Changing scenario Simulation
        </div>
    </div>
</div>

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include video.html path="assets/video/autonomous_course/lane_keep.mp4" class="img-fluid rounded z-depth-1" controls=true %}
        <div class="caption">
         Lane Keeping scenario successful test
      </div>
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include video.html path="assets/video/autonomous_course/lane_change.mp4" class="img-fluid rounded z-depth-1" controls=true %}
      <div class="caption">
         Lane Changing scenario successful test
      </div>
    </div>
</div>

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include video.html path="assets/video/autonomous_course/lane_keeping_home.mp4" class="img-fluid rounded z-depth-1" controls=true %}
        <div class="caption">
         Lane Keeping scenario
      </div>
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include video.html path="assets/video/autonomous_course/lane_changing_home.mp4" class="img-fluid rounded z-depth-1" controls=true %}
      <div class="caption">
         Lane Changing scenario
      </div>
    </div>
</div>

<img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/autonomous_course/auto_vehicle.jpg' | relative_url }}" alt="" title="Team Picture"/>
<div class="caption">
   Semi Autonomous Vehicle (Toyota Camry :) ) image
</div>

<!-- <img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/sensors_course/hardware.jpg' | relative_url }}" alt="" title="example image"/>
<div class="caption">
   Hardware Assembly
</div> -->

<!-- <img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/sensors_course/team.jpg' | relative_url }}" alt="" title="example image"/>
<div class="caption">
   The Team: David Michael, Hadi Elnemr, Ahmed Fathy, Mohammed Ashraf, Ahmed Shaban. (Left to right)
</div> -->