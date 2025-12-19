"use strict";
/*
   JavaScript 7th Edition
   Chapter 11
   Chapter Case

   Author:  Samuel Hill 
   Date:     12-1-2025

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

  const xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (xhr.status >= 200 && xhr.status < 300) {
      stories.innerHTML = xhr.responseText;
    } else {
      console.log("Request failed: " + xhr.statusText);
    }
  };

  xhr.open("get", "commentary.html");

  xhr.send(null);

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
      .catch((stories.innerHTML = "Network Failure"));
  };

  fetch("headlines.xml")
    .then((response) => response.text())
    .then((str) => new DOMParser().parseFromString(str, "text/xml"))
    .then((dom) => {
      let items = dom.querySelectorAll("item");

      for (let story of items) {
        let headline = story.appendChild[0].textContent;
        let link = story.appendChild[1].textContent;
        let summary = story.appendChild[2].textContent;
        let htmlCode = `<article><h2><a href="${link}">${headline}</a></h2><p>${summary}</p></article>`;

        news.insertAdjacentHTML("beforeend", htmlCode);
      }
    });

  sInput.onkeyup = () => {
    if (sInput.value === "") {
      suggestBox.style.display = "none";
    } else {
      fetch("keywords.pl?suggest=" + encodeURIComponent(sInput.value))
        .then((response) => response.json())
        .then((keywords) => {
          suggestBox.innerHTML = "";
          if (keywords.matches.length === 0) {
            suggestBox.style.display = "none";
          } else {
            suggestBox.style.display = "block";
            for (word of keywords.matches) {
              let suggestion = document.createElement("div");
              suggestion.textContent = word;
              suggestBox.appendChild(suggestion);
            }
          }
        });
    }
  };
}
