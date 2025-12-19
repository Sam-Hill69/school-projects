"use strict";
/*    JavaScript 7th Edition
      Chapter 7
      Project 07-01

      Project to validate a form used for setting up a new account
      Author: Samuel Hill 
      Date:   11-9-2025

      Filename: project07-01.js
*/

let signupForm = document.getElementById("signup");

signupForm.addEventListener("submit", function (e) {
  let pwd = document.getElementById("pwd").value;
  let feedback = document.getElementById("feedback");

  //add the e.preventDefault() command to prevent the browser from responding to the submit event
  e.preventDefault();

  //create the regex1 variable containing a regular expression literal with a character class that matches any uppercase letter A-Z
  const regex1 = /[A-Z]/;

  //create the regex2 variable containing a regular expression literal that matches any single digit
  const regex2 = /[0-9]/;

  //create the regex3 variable containing a regular expression with a character class containing the symbols !$#%
  const regex3 = /[!$#%]/;

  //create if else statement

  //if the length of pwd is less than 8, set the text content of the feedback object to "You password must be at least 8 characters."
  if (pwd.length < 8) {
    feedback.textContent = "Your password must be at least 8 characters.";
  }

  //else if the test() method with the regex1 applied to the ped variable retunrs a false valuem set the text content of the feedack object to "Your password mst include an uppercase letter."
  else if (!regex1.test(pwd)) {
    feedback.textContent = "Your password mst include an uppercase letter.";
  }

  //else if the test() method with the regex2 applied to pwd returns false, "Your password must a number."
  else if (!regex2.test(pwd)) {
    feedback.textContent = "Your password must include a number.";
  }

  //else if the test() method with the regex3 applied to pwd returns false "Your password must include one of te following: !$#%"
  else if (!regex3.test(pwd)) {
    feedback.textContent =
      "Your password must include one of the following: !$#%";
  }

  //otherwise apply the submit() method to the signupForm object to submit the form for processing
  else {
    feedback.textContent = "";
    signupForm.submit();
  }
});
