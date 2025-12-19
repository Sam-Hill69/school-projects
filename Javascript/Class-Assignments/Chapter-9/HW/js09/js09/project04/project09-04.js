"use strict";
/*    JavaScript 7th Edition
      Chapter 9
      Project 09-04

      Project to store high scores from a game in a cookie
      Author: Samuel Hill 
      Date:   11-24-2025

      Filename: project09-04.js
*/

/* Page Objects */
let bestText = document.getElementById("best");
let clockTimer = document.getElementById("timer");

// Custom event that runs when the puzzle is solved
window.addEventListener("puzzleSolved", updateRecord);

// Event listener that is run when the page loads
window.addEventListener("load", function () {
  //Insert an if statement testing whether the document.cookies objects exists for this page.
  if (document.cookie) {
    //If the if statement is true, change the text contents. Of the best text object to the text string "best seconds" Where best is the value returned by the get best time() function.
    const best = getBestTime();
    bestText.textContent = best + " seconds";
  }
});
//Create the best time function. The purpose of this function is to retrieve the user's current best time to solve the sliding block puzzle.
function bestTime() {
  //If the document.Cookies object exists then.
  if (document.cookie) {
    //Declare the COOKIE array variable containing the text of the document cookie split at the occurrence of the "=" character.
    const cookie = document.cookie.split("=");
    //Convert the cookie value to an integer by Int function. To the value of COOKIE array [1]. And return it from the function.
    return parseInt(cookie[1], 10);
  }
  // If the document.Cookie. Object does not exist. Return a value of 9999.
  return 9999;
}
//Create the update record function. The purpose of this function is to replace the user's best time with their time of their recent attempt if the attempt was better. Add the following commands.
function updateRecord() {
  //Declare the solution time variable, storing within it the value of the document element with the ID "timer".
  const solutionTime = parseFloat(clockTimer.textContent);
  //Call the get best time function and store the returned value in the best time variable.
  let bestTime = bestTime();
  //If solution time is less than best time. Then let best time equal solution time.
  if (solutionTime < bestTime) {
    bestTime = solutionTime;
    //Change the text content of the best text object to best seconds. Where best is the value of the best time variable.
    bestText.textContent = bestTime + " seconds";
    //The following texturing to the document.cookie. Object setting the Max age of the cookie. 1090 days.
    //Puzzle8Best = Best.
    //Where best is the value of best time variable.
    const maxAge = 1090 * 24 * 60 * 60;
    document.cookie = "Puzzle8Best=${bestTime}; max-age=${maxAge}";
  }
}
