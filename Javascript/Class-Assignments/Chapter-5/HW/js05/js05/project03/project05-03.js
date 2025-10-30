"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-03

      Project to create a table of headings from an article
      Author: Samuel Hill 
      Date:   10-24-2025

      Filename: project05-03.js
*/
const sourceDoc = document.getElementById("source_doc"); //assigns sourceDoc to the source_doc node
const toc = document.getElementById("toc"); //assigns the toc variable to the toc node
let headingCount = 1; //assigns headingCount to an int that is equal to 1

for (let n = sourceDoc.firstElementChild; n != null; n = n.nextElementSibling) {
  if (n.nodeName === "H2") {
    const anchor = "doclink" + headingCount;
    n.setAttribute("id", anchor);

    const listItem = document.createElement("li");
    const link = document.createElement("a");

    link.textContent = n.textContent;
    link.href = "#" + anchor;

    listItem.appendChild(link);
    toc.appendChild(listItem);

    headingCount++;
  }
}
