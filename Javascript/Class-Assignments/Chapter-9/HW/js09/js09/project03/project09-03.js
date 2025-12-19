"use strict";
/*    JavaScript 7th Edition
      Chapter 9
      Project 09-03

      Project to retrieve date of last visit from web storage and mark new article
      Author: Samuel Hill
      Date:   11-24-2025

      Filename: project09-03.js
*/

/* Page Objects */

let lastVisitDate = document.getElementById("lastVisitDate");
let articleDates = document.getElementsByClassName("posttime");
let storedLastDate;
//Create an if statement that tests whether the object localStorage.sbloggerVisit exists. If it does Exist. Add the commands.
if (localStorage.sbloggerVisit) {
  //Retrieve the value of the sbloggerVisit Key from the local Storage And save the key value to the storedLastDate variable.
  storedLastDate = localStorage.sbloggerVisit;
  //Display the value of storedLastDate as the text content of the lastVisitDate object to show the date of the user's last visit to the website.
  lastVisitDate.textContent = storedLastDate;
  //Declare the lastDate Variable, Storing within it a Date object using the value of the storedLastDate variable.
  let lastDate = new Date(storedLastDate);
  //Create a for of loop. That iterates through each item in the articleDates collection. Each time through the loop, do the following for every posted article on the website.
  for (let articleDateElement of articleDates) {
    //Declare the articleDate variable. Storing within it a Date object containing the date text of the current item in the loop.
    let articleDate = new Date(articleDateElement.textContent);
    //If articleDate is greater than lastDate. Then add "<strong>new</strong>" To the HTML content of the current item in the articleDates collection.
    if (articleDate > lastDate) {
      articleDateElement.innerHTML += " <strong> new</strong>";
    }
  }
} else {
  //if localStorage.sbloggerVisit Does not exist. Then do the following.
  //Change the text content of the lastVisitDate object to "welcome to SBlogger!".
  lastVisitDate.textContent = "Welcome to SBlogger!";
  //create a for of loop That iterates through each item in the articleDates collection. Each time through the loop, add."<strong>new</strong>" To the HTML content of the current date item.
  for (let articleDateElement of articleDates) {
    articleDateElement.innerHTML += " <strong>new</strong>";
  }
}
//After the if else statement run the following code to update the stored date value in the sbloggerVisit Key.
//Declare the currentDate variable. And store within it a Date object containing the date. "9/12/2024".
let currentDate = new Date("9/12/2024");
//Apply the toLocalDateString() method To currentDate and store the date string in sbloggerVisit key to local storage.
localStorage.sbloggerVisit = currentDate.toLocaleDateString();
