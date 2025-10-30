"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-04

      Project to display footnotes in a popup window
      Author: Samuel Hill 
      Date:   10/26/2025

      Filename: project05-04.js
*/

// Node list of phrases that are associated with footnotes
let phrases = document.querySelectorAll("article blockquote dfn");

for (let i = 0; i < phrases.length; i++) {
  phrases[i].onclick = function () {
    //create the phrase variable containing an h1 element
    const phrase = document.createElement("h1");
    //set the value of the text content property to the value of the textContent property of this object
    phrase.textContent = this;
    //create the footnote variable  containg a p element
    const footnote = document.createElement("p");
    //set the value of the textContent property to the value of footnotes[i]
    footnote.textContent = footnotes[i];
    //Apply the style rules
    footnote.style.fontStyle = "italic";
    footnote.style.fontSize = "1.2em";
    //create the closeButton variable containing an input element
    const closeButton = document.createElement("input");
    //set the value of the buttons type attribue to "button"
    closeButton.type = "button";
    //set the value attribute to "Close Footnote"
    closeButton.value = "Close Button";
    //Apply the style rules
    closeButton.style.display = "block";
    closeButton.style.margin = "10 px auto";
    //use the window.open method to create a pop up window  storing the window in a variable named popup
    const popup = window.open(
      "",
      "footnote",
      "width=300",
      "height=200",
      "top=100",
      "left=100"
    );
    //Apply the style rules
    popup.document.body.style.backgroundColor = "ivory";
    popup.document.body.style.fontSize = "16px";
    popup.document.body.style.padding = "10px";
    //use the appendChild() method to append the phrase, footnote, and closeButton objects to popup.docuemnt.body
    popup.document.body.appendChild(phrase);
    popup.document.body.appendChild(footnote);
    popup.document.body.appendChild(closeButton);
    //add an onclick event handler to the closeButton element node running an anonymous function containg the single statement popup.close
    closeButton.onclick = function () {
      popup.close();
    };
  };
}
