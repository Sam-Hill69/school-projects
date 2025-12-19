"use strict";
/*  JavaScript 7th Edition
    Chapter 10
    Project 10-04

    Chess Board Drag and Drop
    
    Author: Samuel Hill 
    Date:   11-28-2025

    Filename: project10-04.js
*/

// Page Objects
let pieces = document.getElementsByTagName("span");
let boardSquares = document.querySelectorAll("table#chessboard td");
let whiteBox = document.getElementById("whiteBox");
let blackBox = document.getElementById("blackBox");

//Create a for loop that iterates through all the contents of the pieces collection. For each piece do the following.
for (let items of pieces) {
  //Set the value of the pieces draggable property to true.
  items.draggable = "true";
  //Create an event handler for the drag start event that sets the text of the event targets ID in the datatransfer object.
  items.ondragstart = function (e) {
    e.dataTransfer.setData("text", items.id);
  };
}
//Create a for loop that iterates through all the items in the board squares node list. Add the tasks described.
for (let squares of boardSquares) {
  //For each item, create an event handler for the dragover event.
  squares.ondragover = function (e) {
    //In the anonymous function associated with this event at a command that prevents the default actions associated with the dragover event.
    e.preventDefault();
  };
  squares.ondrop = function (e) {
    //Insert a command to prevent the default action associated with the drop event.
    e.preventDefault();
    //Declare the piece ID variable that gets the ID value from the data transfer object.
    let pieceID = e.dataTransfer.getData("text");
    //Declare the moving piece variable that references the document element with that ID.
    let movingPiece = document.getElementById(pieceID);
    //If the tag name of the event ID equals TD
    if (e.target.tagName === "TD") {
      //Appened moving piece as a child of the event target.
      e.target.appendChild(movingPiece);
    }
    //Otherwise, if tagname equals span, do the following.
    else if (e.target.tagName === "SPAN") {
      //Store the event target in a variable named occupying Peace. .
      let occupyingPiece = e.target;
      //Store the parent element of occupying piece. In a variable named square.
      let square = occupyingPiece.parentElement;
      //Move the occupying piece back to the chest box. If the class name of occupying piece equals white, then occupying peace to the black box object.
      if (occupyingPiece.className === "white") {
        whiteBox.appendChild(occupyingPiece);
      } else {
        blackBox.appendChild(occupyingPiece);
      }

      square.appendChild(movingPiece);
    }
  };
}
