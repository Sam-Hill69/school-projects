"use strict";
/*    JavaScript 7th Edition
      Chapter 11
      Project 11-03

      Project to retrieve order history from a web server
      Author: Samuel Hill 
      Date:   12-05-2025

      Filename: project11-03.js
*/

let orderResult = document.getElementById("orderResult");
let userIDBox = document.getElementById("userID");
let pwdBox = document.getElementById("pwd");

// Retrieve order history when the View Orders button is clicked
viewOrders.onclick = function () {
  let user = userIDBox.value;
  let pwd = pwdBox.value;

  fetch(`wworders.pl?id=${user}&pwd=${pwd}`)
    .then((response) => response.json())
    .then((json) => buildOrderTable(json))
    .catch((error) => console.error(error));
};

// Function to display order history within web tables
function buildOrderTable(obj) {
  if (obj.status === "Orders Not Found") {
    orderResult.innerHTML = "No orders found for this user id and password";
  } else {
    let htmlCode = `<table id="summary"><tr><th>Name</th><td>${obj.username}</td><tr><th>Total Charges</th><td>
        ${obj.totalCharges}</td></tr></table>`;

    for (let objects of json.orderHistory) {
      htmlCode += `<table class="orderList"><tr><th colspan="2">${objects.orderDate}</th>
            <th colspan="2">${objects.orderCost}</th></tr><tr><th>Desription</th>
            <th>Qty</th><th>Price</th><th>Total</th></tr>`;

      for (let item of objects.items) {
        htmlCode += `<tr><td>${item.description}</td><td>${item.qty}</td><td>${item.price}</td>
                <td>${item.total}</td></tr>`;
      }

      htmlCode += `</table>`;
    }
  }
}
