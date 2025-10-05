/*    JavaScript 7th Edition
      Chapter 2
      Project 02-04

      Application to calculate the cost of a restaurant order plus tax
      Author: Samuel Hill 
      Date:   10-05-2025

      Filename: project02-04.js
 */

// Function to display a numeric value as a text string in the format $##.##

const CHICKEN_PRICE = 10.95;
const HALIBUT_PRICE = 13.95;
const BURGER_PRICE = 9.95;
const SALMON_PRICE = 18.95;
const SALAD_PRICE = 7.95;
const SALES_TAX = 0.07;

document.getElementById("chicken").onclick = calcTotal;
document.getElementById("halibut").onclick = calcTotal;
document.getElementById("burger").onclick = calcTotal;
document.getElementById("salmon").onclick = calcTotal;
document.getElementById("salad").onclick = calcTotal;

function calcTotal() {
  let cost = 0;
  buyChicken = document.getElementById("chicken").checked;
  buyHalibut = document.getElementById("halibut").checked;
  buyBurger = document.getElementById("burger").checked;
  buySalmon = document.getElementById("salmon").checked;
  buySalad = document.getElementById("salad").checked;

  cost += buyChicken ? CHICKEN_PRICE : 0;
  cost += buyHalibut ? HALIBUT_PRICE : 0;
  cost += buyBurger ? BURGER_PRICE : 0;
  cost += buySalmon ? SALMON_PRICE : 0;
  cost += buySalad ? SALAD_PRICE : 0;

  document.getElementById("foodTotal").innerHTML = formatCurrency(cost);

  let tax = cost * SALES_TAX;

  document.getElementById("foodTax").innerHTML = formatCurrency(tax);

  let totalCost = cost + tax;

  document.getElementById("totalBill").innerHTML = formatCurrency(totalCost);
}

function formatCurrency(value) {
  return "$" + value.toFixed(2);
}
