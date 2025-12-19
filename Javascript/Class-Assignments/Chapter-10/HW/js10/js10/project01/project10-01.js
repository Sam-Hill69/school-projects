"use strict";
/*    JavaScript 7th Edition
      Chapter 10
      Project 10-01

      Project to create a drag and drop jigsaw puzzle
      Author: Samuel Hill 
      Date:   11-26-2025

      Filename: project10-01.js
*/

// Reference to the puzzle board
let puzzleBoard = document.getElementById("puzzleBoard");
// Counter for the zIndex style of each puzzle piece
let zCounter = 1;
// Array of integers from 1 to 48
let intList = new Array(48);
// pointerX and pointerY will contain the initial coordinates of the pointerX
// pieceX and pieceY will contain the initial coordinates of a puzzle piece
let pointerX, pointerY, pieceX, pieceY;

// Sort the integers from 1 to 48 in random order
for (let i = 0; i < 48; i++) {
  intList[i] = i + 1;
}
intList.sort(function () {
  return 0.5 - Math.random();
});

// generate randomly-sorted puzzle pieces
for (let i = 0; i < 48; i++) {
  let piece = document.createElement("img");
  piece.src = "piece" + intList[i] + ".png";
  let rowNum = Math.ceil((i + 1) / 8);
  let colNum = i + 1 - (rowNum - 1) * 8;
  piece.style.top = (rowNum - 1) * 98 + 7 + "px";
  piece.style.left = (colNum - 1) * 98 + 7 + "px";
  piece.draggable = false; // override the default draggability of images
  puzzleBoard.appendChild(piece);
}

// Node list representing the puzzle pieces
let pieces = document.querySelectorAll("div#puzzleBoard img");

//Create a for loop that iterates through every item in the pieces node list. For each item, add an event listener that runs the grab pieces function in response to the pointer down event.
for (let items of pieces) {
  items.addEventListener("pointerdown", grabPiece);
}

//Create the grabpieces function. Within the function do the following.
function grabPiece(e) {
  //Set the value of POINTER X and POINTER Y variables to the values of the CLIENT X and CLIENT Y properties of the event object.
  pointerX = e.clientX;
  pointerY = e.clientY;
  //Increase the value of the C counter variable by one and apply the value to the Z index style of the event target.
  zCounter++;
  e.target.style.zIndex = zCounter;
  //Set the value of the PIECE X and PIECE Y variable to the values of the offset left and offset top properties of the event target.
  pieceX = e.target.offsetLeft;
  pieceY = e.target.offsetTop;
  //Add an event listener. To the event target that runs the move piece function in response to the pointer move event. Add an event listener to the event target that runs the drop piece function in response to the pointer up method.
  e.target.addEventListener("pointermove", movePiece);
  e.target.addEventListener("pointerup", dropPiece);
}
//Create the movepiece function. Within the function do the following.
function movePiece(e) {
  let currentX = e.clientX;
  let currentY = e.clientY;
  //Declare the diff X variable, setting it equal to the difference between E dot client X and pointer X. Declare the DFY variable setting it equal to the difference between E dot client property.
  let diffX = currentX - pointerX;
  let diffY = currentY - pointerY;
  //Set the value of the left style property to the event target to some of piece X and diff X plus the text string PX. Set the value of the top style property to the event. Target to sum up piece, white and diplike plus the text string PX.
  e.target.style.left = pieceX + diffX + "px";
  e.target.style.top = pieceY + diffY + "px";
}
//Create the drop piece function. Within the function do the following.
function dropPiece(e) {
  //Remove the move piece function from the event listener for the pointer move event.
  e.target.removeEventListener("pointermove", movePiece);
  //Remove the drop piece function from the event listener for the pointer up event.
  e.target.removeEventListener("pointerup", dropPiece);
}
