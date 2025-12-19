"use strict";
/*    JavaScript 7th Edition
      Chapter 8
      Project 08-01

      Project to create a timer object
      Author: Samuel Hill 
      Date:   11-16-2025

      Filename: project08-01.js
*/

/*--------------- Object Code --------------------*/
//add a constructor function for the timer object conataining two parameters named min and sec
function timer(min, sec) {
  this.minutes = min;
  this.seconds = sec;

  //set the timer.timeID property to equal to null
  this.timeID = null;
}
//add the runPause() method to the timer object class prototype
//the runPause() method had three parameters named timer, minBox, and secBox
//within the anonymous function for the runPause()method add the tasks described in steps 5 through 6
timer.prototype.runPause = function (timer, minBox, secBox) {
  //insert an if else statement testing whether timer.timedID is truthy
  if (timer.timeID) {
    //if it does, you will pause the timer by applying th window.clearInterval() method using timer.timeID as the parameter value
    window.clearInterval(timer.timeID);
    timer.timeID = null;
    //otherwise, run the window.setInterval() method to start the timer, running the countdown() function every 1000 miliseconds
    // //store the id of the setInterval() method in the timer.timeID property
  } else {
    timer.timeID = window.setInterval(countdown, 1000);
  }

  function countdown() {
    //if timer,esconds is greater than 0,
    if (timer.seconds > 0) {
      //decrease the value of timer,seconds by 1
      timer.seconds -= 1;
      //else if timer.minutes is greater than 0
    } else if (timer.minutes > 0) {
      //decrease the value of timer.minutes by 1 and set the value of timer.seconds to 59
      timer.minutes -= 1;
      timer.seconds = 59;
      //else the timer has reached 0:0 stop the timer by running the window.clearInterval() method with timer.timeID as the parameter
    } else {
      window.clearInterval(timer.timeID);
      //set the value of timer,timeID to null
      timer.timeID = null;
    }

    //write the value of the timer.minutes to minBox.value and timer.seconds to secBox.value
    minBox.value = timer.minutes.toString().padStart(2, "0");
    secBox.value = timer.seconds.toString().padStart(2, "0");
  }
};
/*---------------Interface Code -----------------*/

/* Interface Objects */
let minBox = document.getElementById("minutesBox");
let secBox = document.getElementById("secondsBox");
let runPauseTimer = document.getElementById("runPauseButton");

let initialMinutes = parseInt(minBox.value) || 0;
let initialSeconds = parseInt(secBox.value) || 0;

let myTimer = new timer(initialMinutes, initialSeconds);

minBox.onchange = function () {
  myTimer.minutes = parseInt(minBox.value) || 0;
};
secBox.onchange = function () {
  myTimer.seconds = parseInt(secBox.value) || 0;
};

runPauseTimer.onclick = function () {
  myTimer.runPause(myTimer, minBox, secBox);
};
