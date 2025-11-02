"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-02

      Project to turn a selection list into a selection of hypertext links
      Author: Samuel Hill 
      Date:   11-1-2025

      Filename: project06-02.js
*/
document.addEventListener("DOMContentLoaded", function () {
  //event listner that runs when the webpages has loaded
  const allSelect = document.querySelectorAll("form#govLinks select"); //assigns all the govLinks to allSelect variable

  for (let i = 0; i < allSelect.length; i++) {
    //loops through all the links and waits for an event to occur
    allSelect[i].addEventListener("change", function () {
      //runs this function when it detects a change
      let linkURL = allSelect[i].value; //assigns the clicked link to linkURL variable

      let newWin = window.open(linkURL, "_blank"); //opens a new tab with the clicked link
    });
  }
});
