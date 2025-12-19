"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-03

      Script to complete a form containing billing and shipping address information
      Author: Samuel Hill 
      Date:   11-1-2025

      Filename: project06-03.js
*/
//resets the page to the default values when you reload the page
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("billShip").reset();
});
//declare the useShip variable to refrence te element with the id of useShip
const useShip = document.getElementById("useShip");
//add an event listner to useShip to run the copyShippingToBilling function
useShip.addEventListener("change", copyShippingToBilling);
//create the copyShippingToBilling function
function copyShippingToBilling() {
  //copies the values from the shipping fields to coreesponding billing fields
  if (useShip.checked) {
    document.getElementById("firstnameBill").value =
      document.getElementById("firstnameShip").value;
    document.getElementById("lastnameBill").value =
      document.getElementById("lastnameShip").value;
    document.getElementById("address1Bill").value =
      document.getElementById("address1Ship").value;
    document.getElementById("address2Bill").value =
      document.getElementById("address2Ship").value;
    document.getElementById("cityBill").value =
      document.getElementById("cityShip").value;
    document.getElementById("countryBill").value =
      document.getElementById("countryShip").value;
    document.getElementById("codeBill").value =
      document.getElementById("codeShip").value;
    document.getElementById("stateBill").value =
      document.getElementById("stateShip").value;
  }
}

const formElements = document.querySelectorAll("input[type='text']");
const fieldCount = formElements.length;
const errorBox = document.getElementById("errorBox");

for (let i = 0; i < fieldCount; i++) {
  formElements[i].addEventListener("change", showValidationError);
}

function showValidationError(event) {
  //I cannot figure this section out
  const inputField = event.target;
  inputField.preventDefault();
  errorBox.textContent = "Complete all the highlighted fields.";
}
