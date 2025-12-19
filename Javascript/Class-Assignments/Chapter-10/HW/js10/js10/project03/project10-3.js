"use strict";
/*  JavaScript 7th Edition
    Chapter 10
    Project 10-03

    Boulder Cycling Directions
    Author: Samuel Hill 
    Date:   11-27-2025

    Filename: project10-03.js
*/
let bikeFind;
let bikeDraw;
let myMap;
function showMap() {
  // Page objects
  let bikeMap = document.getElementById("bikeMap");
  let bikeDirections = document.getElementById("bikeDirections");
  let startingPoint = document.getElementById("startingPoint");
  let endingPoint = document.getElementById("endingPoint");
  //Use the new Google Maps Directions service function object constructor to create direction service object named bike find.
  bikeFind = new google.maps.DirectionsService();

  //Use the new Google Maps direction render object constructor to create directions render object named bike draw.
  bikeDraw = new google.maps.DirectionsRenderer();

  //Create a. LatLngObject named boulder storing within it a latitude of. 40.01753 And a longitude. Of -105.26496
  const Boulder = { lat: 40.01753, lng: -105.26496 };

  //Use the new Google Maps Map object constructor to instantiate a new Google Maps named My Map.
  myMap = new google.maps.Map(bikeMap, { zoom: 12, center: Boulder });
  //Set the zoom level to 12 and center the map on boulder.

  //Create event listeners for the starting point and ending point selection lists, running the draw route function in response to the change event.
  startingPoint.addEventListener("change", drawRoute);
  endingPoint.addEventListener("change", drawRoute);
}

function drawRoute() {
  if (startingPoint != 0 && endingPoint != 0) {
    let bikeRoute = {
      origin: startingPoint.value,
      destination: endingPoint.value,
      travelMode: "BICYCLING",
    };
    bikeFind.route(bikeRoute, function (result, status) {
      if (status == "OK") {
        bikeDraw.setDirections(result);

        bikeDraw.setMap(myMap);
        bikeDraw.setPanel(bikeDirections);
      } else {
        bikeDirections.textContent = "Directions Unavailable: " + status;
      }
    });
  }
}
