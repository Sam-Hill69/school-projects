"use strict";
/*    JavaScript 7th Edition
      Chapter 7
      Project 07-04

      Project to create a customer queue
      Author: Samuel Hill 
      Date:   11-9-2025

      Filename: project07-04.js
*/

let customers = [
  "Alisha Jordan",
  "Kurt Cunningham",
  "Ricardo Lopez",
  "Chanda Rao",
  "Kevin Grant",
  "Thomas Bey",
  "Elizabeth Anderson",
  "Shirley Falk",
  "David Babin",
  "Arthur Blanding",
  "Brian Vick",
  "Jaime Aguilar",
  "Eileen Rios",
  "Gail Watts",
  "Margaret Wolfe",
  "Kathleen Newman",
  "Jason Searl",
  "Stephen Gross",
  "Robin Steinfeldt",
  "Jacob Bricker",
  "Gene Bearden",
  "Charles Sorensen",
  "John Hilton",
  "David Johnson",
  "Wesley Cho",
];

let customerName = document.getElementById("customerName");
let customerList = document.getElementById("customerList");

let addButton = document.getElementById("addButton");
let searchButton = document.getElementById("searchButton");
let removeButton = document.getElementById("removeButton");
let topButton = document.getElementById("topButton");

const status = document.getElementById("status");

generateCustomerList();

// Function to generate the ordered list based on the contents of the customers array
function generateCustomerList() {
  customerList.innerHTML = "";
  for (let i = 0; i < customers.length; i++) {
    let customerItem = document.createElement("li");
    customerItem.textContent = customers[i];
    customerList.appendChild(customerItem);
  }
}

// add an onclick event handler for the addButton object
addButton.onclick = function () {
  //within the event handler do the following:
  const newCustomer = customerName.value.trim();

  if (newCustomer) {
    //use the push() method to add the vlaue of the customerName object to the end of the sustomers array
    customers.push(newCustomer);
    //run the generateCustomerList() function to update the contents of the oredered list that appears on the web page
    generateCustomerList();
    //change the text of the status paragraph to "customer add to the end of the queue" wjere customer is the value of ths cistomerName object
    status.textContent = `${newCustomer} added to the end of the queue.`;
    customerName.value = "";
  } else {
    status.textContent = "Please enter a customer name to add.";
  }
};
//add an onclick event handler for the seachButton object
searchButton.onclick = function () {
  //within the evnet handler do the following:
  const searchCustomer = customerName.value.trim();
  //use the indextOf() method to ocate the index of the array item whose valie equals the value of the customerName object. add 1 to the index vlaue and store the result in the plave variable
  if (searchCustomer) {
    const index = customers.indexOf(searchCustomer);
    const place = index + 1;
    //if place is equal to 0 change the text of the status paragraph to "customer is not found in the queue" where customer is the vale of the customerName object; otherwise change the tet of the statis paragraph to "customer found in posisition plave of the  queue" where plave is the vlaue of the pave variable
    if (place === 0) {
      status.textContent = `${searchCustomer} is not found in the queue.`;
    } else {
      status.textContent = `${searchCustomer} found in position ${
        place + 1
      } of the queue.`;
    }
  } else {
    status.textContent = "Please enter a customer name to search.";
  }
};
//add an onlclick event handler for removeButton jobect
removeButton.onclick = function () {
  //within the event handler do the following
  const removecustomer = customerName.value.trim();
  //use the indexOf() method to locate the index of the array item whose value equals the value of the customerName object. store the index in a variable name index
  const index = customers.indexOf(removecustomer);
  //if index is not equal to -1 then (i)ise the splice() method to remove one item from the customers arraywhose index equal the value of the index variable, (ii) change the text of the status paragraph to the ordered list of customer names. otherwise change the text of the statis paragraph to "customer is not found in the queue"
  if (removecustomer) {
    if (index !== -1) {
      customers.splice(index, 1);

      generateCustomerList();

      status.textContent = `${removecustomer} was successfully removed from the queue.`;

      customerName.value = "";
    } else {
      status.textContent = `${removecustomer} is not found in the queue.`;
    }
  } else {
    status.textContent = "Please enter a customer name to remove.";
  }
};
//add an onclck event handler for the topButtonobect
topButton.onclick = function () {
  //within the event handler fo the follwoing

  //apply the shift() method to remove the first item from the customers array, storing the value returned by the shift() method in the topCustomer variable
  if (customers.length > 0) {
    const topCustomer = customers.shift();
    //change the text of the status paragraph to "Top customer from the queue" where top Customer is the value of the tioCustomer variable
    status.textContent = `${topCustomer} is the top customer being served from the queue.`;
    //call the generateCustomerLust() function
    generateCustomerList();
  } else {
    status.textContent = "The customer queue is currently empty.";
  }
};
