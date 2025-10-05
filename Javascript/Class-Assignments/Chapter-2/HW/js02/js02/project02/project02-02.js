/*    JavaScript 7th Edition
      Chapter 2
      Project 02-02

      Application to test for completed form
      Author: Samuel Hill 
      Date:   10-04-2025

      Filename: project02-02.js
 */
function verifyForm() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;

  if (name !== "" && email !== "" && phone !== "") {
    window.alert("Thank You!");
  } else {
    window.alert("Please fill in all fields");
  }
}

document.getElementById("submit").onclick = verifyForm;
