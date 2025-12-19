"use strict";
/*    JavaScript 7th Edition
      Chapter 9
      Chapter case
      
      Eating Well in Season 
      Author: Samuel Hill
      Date:   11-22-2025
      
      Filename: js09b.js
 */

// retrieve the text of the querry string
let qString = location.search.slice(1);

// replace the encoded characters in the query string
qString = qString.replace(/\+/g, " ");
qString = decodeURIComponent(qString);

// Split the field=name pairs into separate array items
let formData = qString.split(/&/g);

for (let items of formData) {
  // extract the value of field names and values
  let fieldValuePair = items.split(/=/);
  let fieldName = fieldValuePair[0];
  let fieldValue = fieldValuePair[1];

  // create a label containing the field name
  let fieldLabel = document.createElement("label");
  fieldLabel.textContent = fieldName;
  document.getElementById("contactInfo").appendChild(fieldLabel);

  // Create a disabled input box with the field value
  let inputBox = document.createElement("input");
  inputBox.id = fieldName;
  inputBox.value = fieldValue;
  inputBox.disabled = true;
  document.getElementById("contactInfo").appendChild(inputBox);
}

// store data to local storage when the user signs up.
document.getElementById("signupBtn").onclick = function () {
  //data field to be saved to local storage
  let formFields = document.querySelectorAll(
    "#contactInfo input, input[type=radio], textarea"
  );

  //write each field name and value to local storage
  for (let fields of formFields) {
    localStorage.setItem(fields.name, fields.value);
  }

  console.log(localStorage);
};
