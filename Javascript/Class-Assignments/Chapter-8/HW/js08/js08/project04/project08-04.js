"use strict";
/*    JavaScript 7th Edition
      Chapter 8
      Project 08-04

      Retrieve Staff Data from a JSON File
      Author: Samuel Hill 
      Date:   11-17-2025

      Filename: project08-04.js
*/

let getFileButton = document.getElementById("getFile");
let containerBox = document.getElementById("container");

getFileButton.onchange = function () {
  // Retrieve information about the selected file
  let JSONfile = this.files[0];

  // Read the contents of the selected file
  let fr = new FileReader();
  fr.readAsText(JSONfile);

  // Once the file has finished loading, parse the JSON file
  fr.onload = function () {
    //add a command to convert the centents of the JSON data in fr.result into an object named staff
    let staff = JSON.parse(fr.result);
    //call the makeStafftable() function using staff as the parameter value
    makeStaffTable(staff);
  };
};

function makeStaffTable(staff) {
  let staffTable = document.createElement("table");
  let headerRow = document.createElement("tr");
  //create a table row containing the prperty names stored in the JSON file using the properties from the fist directory entry

  //create a for in loop for the object stored in staff.directory[0] and add the following command to the loop
  for (let prop in staff.directory[0]) {
    //document.createelement() to create a th element named headerCell
    let headerCell = document.createElement("th");
    //store prop as the text content of headerCell
    headerCell.textContent = prop;
    //appendChild() to append headerCell to the headerRow
    headerRow.appendChild(headerCell);
  }
  //for in loop completes append headerRow to the staffTable object
  staffTable.appendChild(headerRow);
  //create table rows containing the proprty values for each entry in the directory array

  //add a for loop that loops through the items of staff.directory
  for (let i = 0; i < staff.directory.length; i++) {
    //create an element node for the tr element and store it in the tableRow variable
    let tableRow = document.createElement("tr");
    //create a for in loop fotr the peroprties listed in the staff,directory[i]
    for (let prop in staff.directory[i]) {
      //create an element node for the td element and store it in the tableCell variable
      let tableCell = document.createElement("td");
      //store the value of staff.directory[i] [prop] as the text content of talbleCell
      tableCell.textContent = staff.directory[i][prop];
      //append tableCell to the tableRow object
      tableRow.appendChild(tableCell);
    }
    //append tableRow to the staffTable object
    staffTable.appendChild(tableRow);
  }
  //after the for loop is finished use the apendChild() method to append staffTable to the containerBox object
  containerBox.appendChild(staffTable);
}
