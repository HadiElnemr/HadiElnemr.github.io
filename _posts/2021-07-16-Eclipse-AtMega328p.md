---
layout: post
title:  Programming your ATMega328p using Eclipse IDE instead of Microchip/Atmel Studio
Date:   2021-07-16 11:12:00-
tags:   Tips
comments: true 
---

We had a course in which we used ATMega328p to do some mini projects. To program the AVR, we used Microchip Studio 
which is available only on windows. To burn the code on the chip using Linux, I found some resources referring to using Eclipse IDE.
I tried to follow the instructions to setup the IDE by but there was always an issue with the avr. After installing the additional plugin of 
avr into Eclipse, there was always an option missing after creating a project and that was to setup the avr programming through Eclipse, i.e. 
the option of choosing how to burn the code into the chip was missing after creating a blank avr gcc project. After a lot of searching 
and nearly giving up, I found a comment inside a forum that said to add the following line to the <b>.project</b> file located inside 
your Eclipse IDE avr gcc project, where the line will be added with the lines containing the <b>nature</b> tag.
{% highlight xml %}
<nature> de.innot.avreclipse.core.avrnature </nature>
{% endhighlight %}
After adding them and restarting Eclipse, 
it worked well the next steps of setting up the programmer were easy. I used the USB-ASP programming as the board I had was made to be programmed
with it as far as I understood. I realized that Eclipse was very easy to use with the chip with its wonderful shortcuts and user experience that 
I was familiar with.
