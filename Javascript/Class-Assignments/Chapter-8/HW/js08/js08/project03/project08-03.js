"use strict";
/*    JavaScript 7th Edition
      Chapter 8
      Project 08-03

      Project to build a pizza using object oriented programming
      Author: Samuel Hill 
      Date:   11-17-2025

      Filename: project08-03.js
*/

/*---------------- Object Code ----------------------*/
//create an object literal named cart. the cart object has a single property items containing an empty array
//and a single method named addItem(foodItem) add the command this.items.push(foodItem) to this method
const cart = {
  items: [],
  addItem(foodItem) {
    this.items.push(foodItem);
  },
};

//create a constructor function for the pizza object class containing a size and crust property to store the name of the toppings perperty containing an empty array
function Pizza(size, crust) {
  this.size = size;
  this.crust = crust;
  this.toppings = [];
}
//create a constructor finction for the topping object class containing the name and side property to store the name of the topping and whether covers the entire pizza or is limited to the pizzas left or tight side
//do not enter initial values for these properties
function Topping(name, side) {
  this.name = name;
  this.side = side;
}
//add the addToCart(cart) method to the Pizza prototype.
//within the mthod run the command cart.items.push(this) to add the pizza to the items array of a shopping cart
Pizza.prototype.addToCart = function (cart) {
  cart.addItem(this);
};
//add the summarize() method to the Pizza prototype to create a text string summarizing th econtent of the pizza
Pizza.prototype.summarize = function () {
  //declare a variable named summary with the inital value "Pizza"
  let summary = "Pizza";
  //add the value of this.size and this.crust to the value of summary
  summary += " " + this.size + " " + this.crust;
  //seperate te size and crust value with a blank spave

  //create a for loop that iterates through the this.toppings array
  //for each item in the array add the text string name(side) to the summary variable
  //where name is the vlaue of the this.toppings[i].name property and side is the value of the this.toppings[i].side property
  for (let i = 0; i < this.toppings.length; i++) {
    let name = this.toppings[i].name;
    let side = this.toppings[i].side;
    summary += ", " + name + " (" + side + ")";
  }
  //after the for loop, return te vlaue of the summarty variable.

  return summary;
};
/*----------------------------- Interface Code -------------------------*/

let pizzaPreviewBox = document.getElementById("previewBox"); // pizza image
let pizzaSizeBox = document.getElementById("pizzaSize"); // pizza size selection
let pizzaCrustBox = document.getElementById("pizzaCrust"); // pizza crust selection
let toppingOptions = document.querySelectorAll("input.topping"); // pizza topping option buttons
let addToCart = document.getElementById("addToCart"); // Add to Cart button
let cartBox = document.getElementById("cart"); // Shopping cart box

// Add event handlers for the pizza toppings
for (let i = 0; i < toppingOptions.length; i++) {
  toppingOptions[i].onclick = drawPizza;
}

// Event Handler for the addToCart button
addToCart.onclick = updateCart;

// Clear the pizza image
function clearPizzaImage() {
  while (pizzaPreviewBox.firstChild) {
    pizzaPreviewBox.removeChild(pizzaPreviewBox.firstChild);
  }
}

// Unselect all toppings
function clearToppings() {
  let noTopping = document.querySelectorAll("input.topping[value='none']");
  for (let i = 0; i < noTopping.length; i++) {
    noTopping[i].checked = true;
  }
}

/* Function to draw the pizza image  */
function drawPizza() {
  // Erase current pizza image
  clearPizzaImage();
  // Determine which toppings have been checked
  let checkedToppings = document.querySelectorAll("input.topping:checked");

  // Draw the individual toppings
  for (let i = 0; i < checkedToppings.length; i++) {
    if (checkedToppings[i].value !== "none") {
      let toppingImage = document.createElement("img");
      toppingImage.src = checkedToppings[i].name + ".png";
      toppingImage.className = checkedToppings[i].value;
      pizzaPreviewBox.appendChild(toppingImage);
    }
  }
}

// Function to build the pizza
function buildPizza() {
  let checkedToppings = document.querySelectorAll("input.topping:checked");

  //create an instance of a pizza object string it in myPizza.pizzaCrustBox.value
  let myPizza = new Pizza(pizzaSizeBox.value, pizzaCrustBox.value);
  //add the selected toppong to the pizza y creating a for loop that iterates through the contents of checkedToppings node list. withing the loop
  for (let i = 0; i < checkedToppings.length; i++) {
    if (checkedToppings[i].value !== "none") {
      //create an instance of a topping object named myTiooing
      //set ,uYopping,name equal to checkedTippings[i].name and myTopping.side equal to checkedToppings[i]value
      let myTopping = new Topping(
        checkedToppings[i].name,
        checkedToppings[i].value
      );

      //apply the addTipping(myToppings) method to myPizza
      myPizza.addTopping = function (topping) {
        this.toppings.push(topping);
      };
    }
  }

  //after the for loop return the value of myPizza
  return myPizza;
}

// Function to add the built pizza to the shopping cart
function updateCart() {
  //run the buildpizza() function storing the resilt in the muPizza variable
  let myPizza = buildPizza();
  //apply the addItem(myPizza) method ot the cart object
  cart.addItem(myPizza);
  //run the console.log(cart) method to write the contents of the cart object to the debugger console
  console.log(cart);
  //create a pragraph element containging the value of summarize(myPizza). use the appendCHild() method to append the paragraph to the cartBox element
  let p = document.createElement("p");
  p.textContent = myPizza.summarize();
  cartBox.appendChild(p);
  //reset the page for the next pizza by running the clearPizzaImage() function followed by the clearToppings()function
  clearPizzaImage();
  clearToppings();
}
