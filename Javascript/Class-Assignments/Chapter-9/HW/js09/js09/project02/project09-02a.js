"use strict";
/*    JavaScript 7th Edition
      Chapter 9
      Project 09-02

      Project to read field values from web storage
      Author: Samuel Hill 
      Date:   11-24-2025

      Filename: project09-02a.js
*/

/* Page Objects */

let riderName = document.getElementById("riderName");
let ageGroup = document.getElementById("ageGroup");
let bikeOption = document.getElementById("bikeOption");
let routeOption = document.getElementById("routeOption");
let accOption = document.getElementById("accOption");
let region = document.getElementById("region");
let miles = document.getElementById("miles");
let comments = document.getElementById("comments");

document.getElementById("submitButton").onclick = showData;

function showData() {
  //store value of riderName of the object in a session storage object named riderName
  sessionStorage.setItem("riderName", riderName.value);
  //repeat for ageGroup, bikeOption, routeOption, accOption, region, miles, and comments objects
  sessionStorage.setItem("ageGroup", ageGroup.value);
  sessionStorage.setItem("bikeOption", bikeOption.value);
  sessionStorage.setItem("routeOption", routeOption.value);
  sessionStorage.setItem("accOption", accOption.value);
  sessionStorage.setItem("region", region.value); // change the value of location.href object to the project09-02b.html file
  sessionStorage.setItem("miles", miles.value);
  sessionStorage.setItem("comments", comments.value);

  location.href = "project09-02b.html";
}
