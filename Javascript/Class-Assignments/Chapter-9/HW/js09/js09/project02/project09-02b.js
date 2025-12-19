"use strict";
/*    JavaScript 7th Edition
      Chapter 9
      Project 09-01

      Project to read field values from session storage
      Author: Samuel Hill 
      Date:   11-24-2025

      Filename: project09-02b.js
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

riderName.innerHTML = sessionStorage.getItem("riderName");
ageGroup.innerHTML = sessionStorage.getItem("ageGroup");
bikeOption.innerHTML = sessionStorage.getItem("bikeOption");
routeOption.innerHTML = sessionStorage.getItem("routeOption");
accOption.innerHTML = sessionStorage.getItem("accOption");
region.innerHTML = sessionStorage.getItem("region");
miles.innerHTML = sessionStorage.getItem("miles");
comments.innerHTML = sessionStorage.getItem("comments");
