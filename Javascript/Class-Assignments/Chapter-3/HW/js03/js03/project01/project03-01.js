/*    JavaScript 7th Edition
      Chapter 3
      Project 03-01

      Application to calculate total order cost
      Author: Samuel Hill 
      Date:   10-11-2025

      Filename: project03-01.js
*/
// creates a variable "menuItems" and assigns it to all
//of the items that have a class of "menuItem"
let menuItems = document.getElementsByClassName("menuItem");

//for loop that goes through each item with the class "menuItem"
//and checks to see if it is clicked
for (let i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener("change", calcTotal);
}

//calcTotal function that verifies each menuItem and if its
//clicked it add the total to orderTotal variable
function calcTotal() {
  let orderTotal = 0;

  for (let i = 0; i < menuItems.length; i++) {
    if (menuItems[i].checked) {
      orderTotal += Number(menuItems[i].value);
    }
  }
  // inserts the results of formatCurrency function into the webpage
  document.getElementById("billTotal").innerHTML = formatCurrency(orderTotal);
}

// Function to display a numeric value as a text string in the format $##.##
function formatCurrency(value) {
  return "$" + value.toFixed(2);
}
