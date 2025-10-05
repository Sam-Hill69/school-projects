/*    JavaScript 7th Edition
      Chapter 2
      Project 02-01

      Celsius <-> Farenheit Coverter
      Author: Samuel Hill 
      Date:   10-04-2025

      Filename: project02-01.js
 */

function farenheitToCelsius(degree) {
  document.getElementById("fValue").value = degree;
  degree = (degree - 32) / 1.8;
  return degree;
}

function celsiusToFarenheit(degree) {
  document.getElementById("cValue").value = degree;
  degree = degree * 1.8 + 32;
  return degree;
}

document.getElementById("cValue").onchange = function () {
  cDegree = document.getElementById("cValue").value;
  document.getElementById("fValue").value = celsiusToFarenheit(cDegree);
};

document.getElementById("fValue").onchange = function () {
  fDegree = document.getElementById("fValue").value;
  document.getElementById("cValue").value = farenheitToCelsius(fDegree);
};
