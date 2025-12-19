"use strict";
/*    JavaScript 7th Edition
      Chapter 11
      Project 11-02

      Project to city and state information from a provided postal code
      Author: Samuel Hill 
      Date:   12-05-2025

      Filename: project11-02.js
*/

let postalCode = document.getElementById("postalCode");
let place = document.getElementById("place");
let region = document.getElementById("region");
let country = document.getElementById("country");

postalCode.onblur = function () {
  let codeValue = postalCode.value;
  let countryValue = country.value;
  place = "";
  region = "";

  fetch(`http://api.zippoptam.us/${countryValue}/${codeValue}`)
    .then((response) => response.json())
    .then((json) => {
      place = json.places[0]["place name"];
      region = json.place[0]["state abreviation"];
    })
    .catch((error) => console.error(error));
};
