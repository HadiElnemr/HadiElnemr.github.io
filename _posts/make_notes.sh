#! /usr/bin/bash
echo "what is the file name"
read filename
touch $filename
cat > $filename.markdown  <<- EOM 
---
layout: page
title: Numerical Analysis
description: ENME 602
img:  /assets/img/Numerics_icon.jpeg
importance: 4
github:
---
EOM


