"use strict";
/*    JavaScript 7th Edition
      Chapter 10
      Project 10-02

      Project to create a drag and drop tangram puzzle
      Author: Samuel Hill.  
      Date:   11-26-2025. 

      Filename: project10-02.js
*/

// Reference to the tangram puzzle board
let puzzleBoard = document.getElementById("puzzle");
// Counter for the zIndex style of each puzzle piece
let zCounter = 1;
let eventX, eventY, tanX, tanY;

// Node list representing the tangram pieces
let tans = document.querySelectorAll("div#puzzle > img");

// Function to rotate a tan by a specified number of degrees
function rotateTan(elem, deg) {
  const obj = window.getComputedStyle(elem, null);
  const matrix = obj.getPropertyValue("transform");
  let angle = 0;
  if (matrix !== "none") {
    const values = matrix.split("(")[1].split(")")[0].split(",");
    const a = values[0];
    const b = values[1];
    angle = Math.round(Math.atan2(b, a) * (180 / Math.PI));
  }

  if (angle < 0) {
    angle += 360;
  }

  let newAngle = angle + deg;

  elem.style.transform = "rotate(" + newAngle + "deg)";
}
//Add a for loop that iterates through all the pieces. In the tans node list.
for (let items of tans) {
  //For each piece, add an event to listener that runs the grab tan function. In response to the pointer down event.
  items.addEventListener("pointerdown", grabTan);
}
//Create the grab tan function. Within the function do the following.
function grabTan(e) {
  //If the shift key had been pressed down,
  if (e.shiftKey) {
    //call the rotate tan function using the event target and a value of 15 as the parameter values.
    rotateTan(e.target, 15);
    //Otherwise, store the. E. Client X. And E. Client wide values in the event accent, event Y variables.
  } else {
    eventX = e.clientX;
    eventY = e.clientY;

    //Set the touch action style to none.
    e.target.style.touchAction = "none";

    //Increase the Z counter variable by one and apply it to the Z index style of event target.
    e.target.style.zIndex = zCounter++;

    tanX = e.target.offsetLeft;
    tanY = e.target.offsetTop;

    //Add an event listener to run the move tan function in response to the pointer move event.
    e.target.addEventListener("pointermove", moveTan);
    //Add an event listener to run the drop tan function in response to the pointer up.
    e.target.addEventListener("pointerup", dropTan);
  }
}
//Create the move Chand function. Within the function,
function moveTan(e) {
  //calculate the distance horizontally and vertically that the pointer has moved from its initial position and
  let currentX = e.clientX;
  let currentY = e.clientY;

  let diffX = currentX - eventX;
  let diffY = currentY - eventY;

  //move the event target that same amount.
  e.target.style.left = tanX + diffX + "px";
  e.target.style.top = tanY + diffY + "px";
}
//Create the drop tan function.
function dropTan(e) {
  //Within the function remove the event listeners you created for the point move and point up events.
  e.target.removeEventListener("pointermove", moveTan);
  e.target.removeEventListener("pointerup", dropTan);
}
