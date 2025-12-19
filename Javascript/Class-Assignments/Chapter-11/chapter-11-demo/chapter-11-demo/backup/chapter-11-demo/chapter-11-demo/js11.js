"use strict";
/*
   JavaScript 7th Edition
   Chapter 11
   Chapter Case

   Author:   Brian Steele
   Date:     4-14-2024

   Filename: js11.js


*/

window.addEventListener("load", init);

function init() {
  // Page Objects
  let stories = document.getElementById("stories");
  let news = document.getElementById("news");
  let sInput = document.getElementById("sInput");
  let sButton = document.getElementById("sButton");
  let suggestBox = document.getElementById("suggestBox");
}

// fetch a gif for a given topic from giphy.com
function getGIF(topic) {
  const url = "https://api.giphy.com/v1/gifs/random";
  const key = "uJMeDbHUbjOadmhl1uPmmOKW9CWEIbfZ";
  fetch(`${url}?api_key=${key}&tag=${topic}&limit=1&rating=pg`)
    .then((response) => response.json())
    .then((obj) => {
      let newImg = document.createElement("img");
      newImg.src = obj.data.images.fixed_height.url;
      stories.appendChild(newImg);
    });
}

// create a request object
const xhr = new XMLHttpRequest();

// handle the changing request state
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    if (xhr.status >= 200 && xhr.status < 300) {
      // manage the response
      stories.innerHTML = xhr.responseText;
    } else {
      console.log("Request failed: " + xhr.status);
    }
  }
};

// open the request and send it
xhr.open("get", "commentary.html");
xhr.send(null);

// This bit totally doesn't work without perl and a working server
sButton.onclick = () => {
  fetch("archives.pl?skey=" + encodeURIComponent(sInput.value))
    .then((response) => {
      if (response.ok) {
        return response.text();
      } else {
        return "Unable to retrieve commentary";
      }
    })
    .then((comtext) => (stories.innerHTML = comtext))
    .then(() => {
      let topic = sInput.value.toLowerCase();
      getGIF(topic);
    })
    .catch((stories.innerHTML = "Network Failure"));
};

//fetch the current headlines from the web server
fetch("headlines.xml")
  .then((response) => response.text())
  .then((str) => new DOMParser().parseFromString(str, "text/xml"))

  // write the xml content to the html
  .then((dom) => {
    let items = dom.querySelectorAll("item");
    //loop through the story items
    for (let story of items) {
      //write the story content and append it to the page
      let headline = story.children[0].textContent;
      let link = story.children[1].textContent;
      let summary = story.children[2].textContent;
      let htmlCode = `<article><h2><a href="${link}">${headline}</a></h2>
                      <p>${summary}</p></article>`;
      news.insertAdjacentHTML("beforeend", htmlCode);
    }
  });

// Suggest keywords as text is entered in the search tree
sInput.onkeyup = () => {
  if (sInput.value === "") {
    suggestBox.style.display = "none";
  } else {
    // Retrieve a list of matching keywords
    fetch("keywords.pl?suggest=" + encodeURIComponent(sInput.value))
      .then((response) => console.log(response.text()))
      .then((response) => response.json())
      // Build the suggestion box
      .then((keywords) => {
        suggestBox.innerHTML = "";
        if (keywords.matches.length === 0) {
          // no suggestion to display
          suggestBox.style.display = "none";
        } else {
          //display suggestions
          suggestBox.style.display = "block";
          // create a list of suggestions
          for (let word of keywords.matches) {
            let suggestion = document.createElement("div");
            suggestion.textContent = word;
            suggestBox.appendChild(suggestion);

            //add suggestion to search box when clicked
            suggestion.onclick = () => {
              sInput.value = word;
              suggestBox.style.display = "none";
              sButton.onclick();
            };
          }
        }
      });
  }
};
