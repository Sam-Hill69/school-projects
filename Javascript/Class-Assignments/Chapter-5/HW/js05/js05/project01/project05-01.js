"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-01

      Project to present an online quiz with a countdown clock
      Author: Samuel Hill 
      Date:   10-22-2025

      Filename: project05-01.js
*/
let timeID; // added timeID variable
let questionList = document.querySelectorAll("div#quiz input"); //added quiestionList variable
let sqOverlay = document.getElementById("overlay");
document.getElementById("startquiz").addEventListener("click", function () {
  sqOverlay.className = "showquiz";
  countDown();
  timeID = window.setInterval(countDown, 1000);
});

function countDown() {
  timeLeft--;

  document.getElementById("quizclock").value = timeLeft;

  if (timeLeft === 0) {
    clearInterval(timeID);
    let totalCorrect = checkAnswers();
    if (totalCorrect == correctAnswers.length) {
      window.alert("Congrats! You got 100% correct.");
    } else {
      window.alert(
        "Im sorry, You only got " +
          totalCorrect +
          " out of " +
          correctAnswers.length
      );
      timeLeft = quizTime;
      document.getElementById("quizclock").value = timeLeft;
      sqOverlay.className = "hidequiz";
    }
  }
}
// Constants to set the time given for the quiz in seconds
// and the correct answers to each quiz question
const quizTime = 20;
const correctAnswers = ["10", "4", "-6", "5", "-7"];

// Elements in the quiz page
let startQuiz = document.getElementById("startquiz");
let quizClock = document.getElementById("quizclock");
let overlay = document.getElementById("overlay");

// Initialize the quiz time
quizClock.value = quizTime;
let timeLeft = quizTime;

// Declare the ID for timed commands
// and the node list for questions

/*------------- Function to check the student answers ----------------*/
function checkAnswers() {
  let correctCount = 0;

  for (let i = 0; i < questionList.length; i++) {
    if (questionList[i].value === correctAnswers[i]) {
      correctCount++;
      questionList[i].className = "";
    } else {
      questionList[i].className = "wronganswer";
    }
  }
  return correctCount;
}
