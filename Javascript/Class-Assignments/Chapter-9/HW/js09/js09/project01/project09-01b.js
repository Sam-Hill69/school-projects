"use strict";
/*    JavaScript 7th Edition
      Chapter 9
      Project 09-01

      Project to read field values from a query string
      Author: Samuel Hill 
      Date:   11-24-2025

      Filename: project09-01b.js
*/
//apply slice() method to the location.search object, storing the text after the first character in the query variable
let query = location.search.slice(1);

//use replace() to replace every occurance of the + character in query with a blank space
//apply the decoeURIComponent() method to replace every URI-encoded character in query with the matching character

query = query.replace(/\+/g, " ");

query = decodeURIComponent(query);

//split() every occurance of the & character in query, placing each name=value pair as a separate itme in the cardFields array
const cardFields = query.split("&");

//create a for of loop for the cardFields array
for (const item of cardFields) {
  //split each item at the "=" store the substrings in the nameValue array
  let nameValue = item.split("=");
  //store the first item in the nameValue array to the name variable and the second to to the value variable
  let name = nameValue[0];
  let value = nameValue[1];
  //store the vlaie of vlaue varibale as the text contecnt of the document element with id = to the name variable
  let targetElement = document.getElementById(name);

  if (targetElement) {
    targetElement.textContent = value;
  }
}
