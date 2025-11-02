"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-01

      Project to validate a form used for setting up a new account
      Author: Samuel Hill 
      Date:   11-1-2025

      Filename: project06-01.js
*/
const submitButton = document.getElementById("submitButton"); //assigns submitButton element in the HTML file to SubmitButton in js file
const pwd = document.getElementById("pwd"); //assigns pwd element in the HTML file to pwd in js file
const pwd2 = document.getElementById("pwd2"); //assigns pwd2 element in the HTML file to pwd2 in js file

submitButton.addEventListener("click", function () {
  //event listener on the submit button
  if (pwd.validity.patternMismatch) {
    //checks the value of the pwd against the rules that are setup in the HTML file
    pwd.setCustomValidity(
      "Your password must be at least 8 characters with at least one letter and one number."
    ); //sets a custom validity message
  } else if (pwd.value !== pwd2.value) {
    pwd2.setCustomValidity("Your passwords must match."); //sets a custom validity message if the two passwords dont match
  } else {
    pwd.setCustomValidity(""); //if the two previous checks pass it moves onto the next page
  }
});
