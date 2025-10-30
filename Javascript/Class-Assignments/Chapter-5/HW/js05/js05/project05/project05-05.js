"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-05

      Project to create a Concentration game with flipping tiles
      Author: Samuel Hill 
      Date:   10-26-2025

      Filename: project05-05.js
*/

// Reference to the game board
let board = document.getElementById("board");

// Reference to the tiles within the game board
let allTiles = document.getElementsByClassName("tile");

// Objects that will reference the first and second tile clicked by the player
let firstFlipped;
let secondFlipped;

// Variable containing the id of a timed command
let timeID;

// Counter of the number of tiles currently flipped
let tilesFlipped = 0;

// Functions to run when the page is loaded
window.addEventListener("load", scrambleTiles);
window.addEventListener("load", playConcentration);

// Function that scrambles the order of the tiles within the board
function scrambleTiles() {
  //2 errors within this function
  for (let i = 0; i < allTiles.length; i++) {
    //removed the equal sign
    // Random index integer from 0 to the number of tiles minus 1
    let randomIndex = Math.floor(allTiles.length * Math.random());

    // Randomly insert a tile before the current tile in the loop
    board.insertBefore(board.children[i], board.children[randomIndex]); // added Before to the insert command
  }
}

// Function that sets up the game play
function playConcentration() {
  // 7 errors in this function
  // Create event handlers for all tiles in the game board
  for (let i = 0; i < allTiles.length; i++) {
    // Run when a tile is clicked
    allTiles[i].onclick = function () {
      // Test to see if the back of the tile is displayed
      if (this.lastElementChild.className === "back") {
        //removed a set of parenthese and changed This to this and added 2 more equals to the comparison
        tilesFlipped++; // increase the flip count by 1

        if (tilesFlipped === 1) {
          //added two more equals
          // if this is the first tile clicked then flip it
          firstFlipped = this; //changed This to this
          firstFlipped.appendChild(firstFlipped.firstElementChild);
        } else if (tilesFlipped === 2) {
          // added two more equals
          // if this is the second tile clicked then flip it
          // and then flip both tiles back after 1 second
          secondFlipped = this; //changed This to this
          secondFlipped.appendChild(secondFlipped.firstElementChild);
          timeID = window.setTimeout(flipBack, 1000); //changed 1 to 1000
        }
      }
    };
  }

  /* Function to flip the two tiles if they don't match */
  function flipBack() {
    // 1 error in this function
    // test to determine whether the tile images don't match
    if (
      firstFlipped.lastElementChild.src !== secondFlipped.lastElementChild.src
    ) {
      // if they don't match, then flip each one
      firstFlipped.appendChild(firstFlipped.firstElementChild);
      secondFlipped.appendChild(secondFlipped.firstElementChild);
    }

    // Reset the tiles flipped counter to zero
    tilesFlipped = 0; //changed from titlesFlipped to tilesFlipped
  }
}
