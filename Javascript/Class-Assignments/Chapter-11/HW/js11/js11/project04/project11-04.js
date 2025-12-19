"use strict";
/*    JavaScript 7th Edition
      Chapter 11
      Project 11-04

      Project to retrieve UV index and other solar information for user's current position
      Author: Samuel Hill 
      Date:   12-05-2025

      Filename: project11-04.js
*/

// Table Objects
let latCell = document.getElementById("lat");
let lngCell = document.getElementById("lng");
let uvIndexCell = document.getElementById("uvIndex");
let uvMaxCell = document.getElementById("uvMax");
let ozoneCell = document.getElementById("ozone");
let st1Cell = document.getElementById("st1");
let st2Cell = document.getElementById("st2");
let st3Cell = document.getElementById("st3");
let st4Cell = document.getElementById("st4");
let st5Cell = document.getElementById("st5");
let st6Cell = document.getElementById("st6");

// Get the device's current position
navigator.geolocation.getCurrentPosition(getLocation, handleError);

function getLocation(pos) {
  let myPosition = {
    lat: pos.coords.latitude,
    lng: pos.coords.longitude,
  };

  const url = "https://api.openuv.io/api/v1/uv";
  const key = "openuv-oxwrmitqo6nc-io";

  fetch(`${url}?lat=${myPosition.lat}&lng=${myPosition.lng}`, {
    method: "GET",
    headers: { "x-access-token": key },
  })
    .then((response) => response.json())
    .then((json) => showSunSafety(json, myPosition))
    .catch((error) => console.error(error));
}

function handleError() {
  alert("Unable to get your location");
}

function showSunSafety(obj, position) {
  latCell.textContent = position.lat.toFixed(6);
  lngCell.textContent = position.lng.toFixed(6);
  uvIndexCell.textContent = obj.result.uv;
  uvMaxCell.textContent = obj.result.uv_max;
  ozoneCell.textContent = obj.result.ozone;
  st1Cell.innerHTML = obj.result.safe_exposure_time.st1 + "</EOCAL>";
  st2Cell.innerHTML = obj.result.safe_exposure_time.st2 + "</EOCAL>";
  st3Cell.innerHTML = obj.result.safe_exposure_time.st3 + "</EOCAL>";
  st4Cell.innerHTML = obj.result.safe_exposure_time.st4 + "</EOCAL>";
  st5Cell.innerHTML = obj.result.safe_exposure_time.st5 + "</EOCAL>";
  st6Cell.innerHTML = obj.result.safe_exposure_time.st6 + "</EOCAL>";
}
