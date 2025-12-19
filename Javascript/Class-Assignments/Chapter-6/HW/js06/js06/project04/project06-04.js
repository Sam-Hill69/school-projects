"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-04

      Project to turn a selection list into a selection of hypertext links
      Author: Samuel Hill 
      Date:   11-2-2025

      Filename: project06-04.js
*/

// Selection lists in the web form
let make = document.getElementById("make");
let model = document.getElementById("model");
let trim = document.getElementById("trim");

// Option elements within the selection lists
let makeOptions = document.querySelectorAll("select#make option");
let modelOptions = document.querySelectorAll("select#model option");
let trimOptions = document.querySelectorAll("select#trim option");

// The number of options within each selection list
let makes = makeOptions.length;
let models = modelOptions.length;
let trims = trimOptions.length;

// Form button to generate the complete text of the selected vehicle
let selectVehicle = document.getElementById("selectVehicle");

// Paragraph containing the text of the selected vehicle
let vehicle = document.getElementById("vehicle");

// Event handler to modify the content of the Model selection list
// when the Make selection list changes

make.onchange = function () {
  let makeIndex = make.selectedIndex;
  let makeCategory = make.options[makeIndex].text;

  if (makeIndex === 0) {
    showAll(model);
  } else {
    filterSelect(model, makeCategory);
  }
};

// Event handler to modify the content of the Trim selection list
// when the Model selection list changes

model.onchange = function () {
  let modelIndex = model.selectedIndex;
  let modelCategory = model.options[modelIndex].text;

  if (modelIndex === 0) {
    showAll(trim);
  } else {
    filterSelect(trim, modelCategory);
  }
};

//create the showAll() function. The function has a single parameter named selectList that will represent one of the selection lists
function showAll(selectList) {
  //declare a variable named options that refreneces the collection of option elements within selectList
  const options = selectList.options;
  //declare a variable named optionLength equal to the length of the options node list
  const optionLength = options.length;
  //add a for loop that iterates through the items in the options node list. for each item in the collection change the value
  //of style .display property to block in order to display the option within the selsction list
  for (let i = 0; i < optionLength; i++) {
    options[i].style.display = "block";
  }
}
//create the filterSelect()function. the function has two parameters named selectList and catagory
//where selectList will represent one of the selection lists in the web form and catagory will determine which opetions within that
//select list will be displayed on the web page
function filterSelect(selectList, category) {
  //declare a variable named optios that refrence the collection of option element within selectList
  const options = selectList.options;
  //declare a variable named optionLength equal to the length of the options node list
  const optionLength = options.length;
  //add a for loop that iterates through the items in the options node list. for each item in the options collectio, insert
  //an if else statement that sets the style.display property of the item to block if the className property of te option equals
  //the category variable, otherwise set the style.displayproperty to none to hide the option
  for (let i = 0; i < optionLength; i++) {
    if (options[i].className === category || i === 0) {
      options[i].style.display = "block";
    } else {
      options[i].style.display = "none";
    }
  }
  selectList.selectedIndex = 0;
}
//create an onclick event handler for the selectVehicle button to run an anonymous funtion when clicked. within the ananymous
// function, insert a command that writes the text "make model trim" to the vehicle three selection lists
selectVehicle.onclick = function () {
  let selectedMake = make.options[make.selectedIndex].text;
  let selectModel = model.options[model.selectedIndex].text;
  let selectedTrim = trim.options[trim.selectedIndex].text;
  let fullVehicleText = `${selectedMake} ${selectModel} ${selectedTrim}`;

  vehicle.textContent = fullVehicleText;
};
