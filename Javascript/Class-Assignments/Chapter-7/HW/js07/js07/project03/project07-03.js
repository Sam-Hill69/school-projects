"use strict";
/*    JavaScript 7th Edition
      Chapter 7
      Project 07-03

      Project to create a New Year's Eve countdown clock
      Author: Samuel Hill
      Date:   11-9-2025

      Filename: project07-03.js
*/

let currentTime = document.getElementById("currentTime");
let daysLeftBox = document.getElementById("days");
let hrsLeftBox = document.getElementById("hours");
let minsLeftBox = document.getElementById("minutes");
let secsLeftBox = document.getElementById("seconds");
//add a command that uses the setInterval() method to run the countdown() function every 1000 millisecond
setInterval(countDown, 1000);
//create the countdown() function and within the function add the commands specified in steps 5 through 11
function countDown() {
  //declare the now variable and use the new Date() object constructor to store within it the current date and time
  const now = new Date();
  //apply th etolocaleString() method to the now variable to display the text of the current date and time in the currentTime object
  currentTime.textContent = now.toLocaleDateString();
  //declare the newYear variable and using the new Date() object constrictor store the date "January 1, 2024".
  let newYear = new Date("January 1, ${nextYear}");
  //use the getFullYear() method to retieve the 4-digit year value from the now variable, increase theat value by 1 and store the resilt in the nectYear variable
  let nextYear = now.getFullYear() + 1;
  //use the setFullYear() method to change the year value of newyear to the value of the nextYear variable
  newYear.setFullYear(nextYear);
  //perform the folllowing calculations to determine the dayes, hours, minutes, second left until the new year
  let difference = newYear - now;
  //calculate the days left by calculating the difference between newYear and now and deviding that difference by 1000*60*60*24 store the results in the daysLeft variable
  let daysLeft = difference / (1000 * 60 * 60 * 24);
  //multiply the fractional part of the daysLeft variable by 24 and store the results in the hrsLeft variable
  let hrsLeft = (daysLeft % 1) * 24;
  //multiply the fractional part of th ehrsLeft vatiable by 60 and store the result in the minsLeft variable
  let minsLeft = (hrsLeft % 1) * 60;
  //multiply the fractional part of the minsLeft variable by 60 and store the result in the secsLeft variable
  let secsLeft = (minsLeft % 1) * 60;
  //display the following results in the web page clock:

  //apply the Math.floor() method to the daysLeft variable and write the result to the text content of the daysLeftBox object
  daysLeftBox.textContent = Math.floor(daysLeft);
  //repeat the previous step for the hersLeft, minsLeft and secsLeft variables, storing their results in the hersLeftBox, minsLeftBox, secsLeftBox objects
  hrsLeftBox.textContent = Math.floor(hrsLeft);
  minsLeftBox.textContent = Math.floor(minsLeft);
  secsLeftBox.textContent = Math.floor(secsLeft);
}
countDown();
