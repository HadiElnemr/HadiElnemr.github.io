---
layout: page
title: Bachelor Thesis
description: Lane-level Map Matching Algorithm for Model-scale Vehicles
img: /assets/img/lanelevelmm.png
importance: 1
category: Bachelor Thesis
---
<!--- <img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/mctr_project/robot.png' | relative_url }}" alt="" title="example image"/>
<div class="caption">
   Our robot, "HAD"
</div> -->

<!-- <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6972286553670746113" height="762" width="504" frameborder="0" allowfullscreen="true" title="Embedded post" scrolling="no" ></iframe> -->

My bachelor thesis was titled *Lane-level Map Matching for Model-scale Vehicles*, where I did it at the CPM Lab at <a href='https://www.rwth-aachen.de/'>RWTH Aachen</a>, Germany.

The **exposé** for my topic is here:
<object data="https://hadielnemr.github.io/assets/pdf/Expose_Elnemr.pdf" type="application/pdf" width="750px" height="600px">
    <embed src="https://hadielnemr.github.io/assets/pdf/Expose_Elnemr.pdf">
        <p>This browser does not support PDFs. Please download the PDF to view it: <a href="https://hadielnemr.github.io/assets/pdf/Expose_Elnemr.pdf">Download PDF</a>.</p>
    </embed>
</object>

This opportunity was provided by <a href='https://embedded.rwth-aachen.de/doku.php?id=en:lehrstuhl:mitarbeiter:alrifaee'>Dr.-Ing. Bassam Alrifae</a> and my work was supervised by <a href='https://embedded.rwth-aachen.de/doku.php?id=en:lehrstuhl:mitarbeiter:schaefer'>Simon Schäfer M.Sc.</a>, and the work is done under the <a href='https://embedded.rwth-aachen.de/doku.php?id=en:forschung:mobility'>Cyber-Physical Mobility Group</a>

The map matching problem arises in the field of autonomous vehicles where the position of a vehicle is obtained using GNSS sensors on the vehicle.
Like many types of sensors, GNSS data involves errors arising from the idea of how satellites work to find the position of a moving vehicle.
Map matching a moving vehicle to an HD map using this distorted GNSS data is well known challenge.
Many algorithms where implemented and tested to address this specific problem.

An approach using Hidden Markov Model algorithm was implemented and tested by <a href ='https://dl.acm.org/doi/abs/10.1145/1653771.1653818'>Newson and Krumm, 2009</a> which was successful and paved the road for many papers later that addressed this problem.

The work by Newson and Krumm is considered to be _road-level_ map matching.

In this thesis, the objective is to implement the Hidden Markov Model algorithm so support _lane-level_ map matching using GNSS data and data acquired by the vehicle itself such the heading, yaw rate etc.


<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:6972286552882225152" allowfullscreen="" title="Embedded post" width="504" height="1102" frameborder="0"></iframe>