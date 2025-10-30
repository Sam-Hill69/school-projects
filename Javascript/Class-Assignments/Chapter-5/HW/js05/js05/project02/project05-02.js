"use strict";
/*    JavaScript 7th Edition 
      Chapter 5 
      Project 05-02 
      
      Project to move images between a photo bucket and photo list.  
      Author: Samuel Hill 
      Date:   10-22-2025 
      Filename: project05-02.js 
*/
const images = document.querySelectorAll("img"); //this assigns all the img tags to images variable. Child of photo_bucket
const photoBucket = document.getElementById("photo_bucket"); // this assigns the photo_bucket id node to photoBucket variable.
let photoList = document.getElementById("photo_list"); // this assigns the photo_list to photoList variable. No children

for (let i = 0; i < images.length; i++) {
  images[i].onclick = function () {
    const clickedImage = this;
    //I need to figure out how to compare the parent node and where its located in the HTML file
    if (clickedImage.parentElement.id === "photo_bucket") {
      const newItem = document.createElement("li"); //creates a new list item element and assigns it to newItem
      newItem.appendChild(clickedImage); // brings the clicked item into the newItem node
      photoList.appendChild(newItem); //brings the new Item into the photoList element
    } else {
      let oldItem = clickedImage.parentElement; //assigns the oldItem variable to the parent of the clicked image
      photoBucket.appendChild(clickedImage); // append the clicked image to photobucket
      photoList.removeChild(oldItem);
      //remove the oldItem from the oarent element of oldItem using the removeChild() method
    }
  };
}
