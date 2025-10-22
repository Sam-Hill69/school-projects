"use strict";
/*    JavaScript 7th Edition
      Chapter 4
      Project 04-03

      Application to count the number of characters in a review comment
      Author: Samuel Hill 
      Date:   10-19-2025

      Filename: project04-03.js
*/

// Maximum Length of Review
const MAX_REVIEW = 100;
document.getElementById("limit").innerHTML = MAX_REVIEW;

// Reference to elemets in the web page
let wordCountBox = document.getElementById("countValue");
let warningBox = document.getElementById("warningBox");

// Event listener for typing into the comment box
document.getElementById("comment").addEventListener("keyup", updateCount);

// Function to update the count with each keyup event
function updateCount() {
  // Set the warning box to an empty text string
  warningBox.innerHTML = "";

  // Count the number of characters in the comment box
  var commentText = document.getElementById("comment").value; //moved up to this function
  var charCount = countCharacters(commentText); // moved up to this function

  wordCountBox.innerHTML = charCount;
  try {
    // added try catch for going over 100 characters
    if (charCount > MAX_REVIEW)
      throw "You have exceeded the character count limit";
  } catch (error) {
    warningBox.innerHTML = "You have exceeded the character count limit";
  }
}

/*=================================================================*/
// Function to count the number of characters in a text string
function countCharacters(textStr) {
  var commentregx = /\s/g;
  var chars = textStr.replace(commentregx, "");
  return chars.length;
}
