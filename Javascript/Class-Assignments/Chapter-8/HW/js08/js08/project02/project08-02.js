"use strict";
/*    JavaScript 7th Edition
      Chapter 8
      Project 08-02

      Project to add balls bouncing within a container
      Author: Samuel Hill 
      Date:   11-16-2025

      Filename: project08-02.js
*/

/*---------------- CONSTANTS ---------------------*/
const BALL_RADIUS = 60; // radius of the ball in pixels
const BOX_HEIGHT = 400; // height of the container in pixels
const BOX_WIDTH = 800; // width of the container in pixels

/*--------------- Object Code --------------------*/
//create an object literal named box with its width and height properties equal to BOX_WIDTH and BOX_HEIGHT
//and its xPos and yPos = 0

const box = {
  width: BOX_WIDTH,
  height: BOX_HEIGHT,
  xPos: 0,
  yPos: 0,
};

//create a constructor function for the ball class with a single parameter named size
function Ball(size) {
  //set the value of the radius to size and the xPos, yPos, xVelocity, yVelocity properties to null
  this.radius = size;
  this.xPos = null;
  this.yPos = null;
  this.xVelocity = null;
  this.yVelocity = null;
}

//create moveWithin() method of the ball object class prototype that runs an anonamuous function w/ container as its parameter
Ball.prototype.moveWithin = function (container) {
  //set the to and left positions of the ball by creaing the ballTop variable = this.yPos
  let ballTop = this.yPos;
  //ballLeft = this.xPos
  let ballLeft = this.xPos;

  let ballBottom = this.yPos + this.radius;

  let ballRight = this.xPos + this.radius;

  if (ballTop < 0 || ballBottom > container.height) {
    //bounce the ball vertically by (i) increasing container.yPos by the value of this.yVelocity and (ii) setting this.yVelocity = -this.xVelocity
    container.yPos += this.xVelocity;
    this.yVelocity = -this.yVelocity;
  }
  if (ballLeft < 0 || ballRight > container.width) {
    //increaing container.xPos by the valie of this.xVelocity
    container.xPos += this.xVelocity;
    //set this.xVelocity = -this.xVelocity
    this.xVelocity = -this.xVelocity;
  }

  //move the ball within the ocntainer by increasing the value of this.yPos by this.yVelocity and the same for xPos
  this.yPos += this.yVelocity;
  this.xPos += this.xVelocity;
};
/*---------------Interface Code -----------------*/

// Reference to the container box
let boxImage = document.getElementById("box");
boxImage.style.width = BOX_WIDTH + "px";
boxImage.style.height = BOX_HEIGHT + "px";
boxImage.style.top = "0px";
boxImage.style.left = "0px";

// Reference to the Add Ball button
let addBall = document.getElementById("addBall");

addBall.onclick = function () {
  let ballImage = document.createElement("div");
  ballImage.className = "ball";
  ballImage.style.width = BALL_RADIUS + "px";
  ballImage.style.left = (BOX_WIDTH - BALL_RADIUS) / 2 + "px";
  ballImage.style.top = (BOX_HEIGHT - BALL_RADIUS) / 2 + "px";

  // Append the ball image to the box
  boxImage.appendChild(ballImage);

  //store an instance of the ball object in newBall with a size value = BALL_RADIUS
  const newBall = new Ball(BALL_RADIUS);
  //center the new ball within the container by setting the yPos to (BOX_HEIGHT - BALL_RADIUS)/2
  newBall.yPos = (BOX_HEIGHT - BALL_RADIUS) / 2;
  //set xPos to (BOX_WIDTH - BALL_RADIUS)/2
  newBall.xPos = (BOX_WIDTH - BALL_RADIUS) / 2;
  //give newball an intial random velocity by calling the rand() function setting the value of the yVelocity and xVelocity properties to rand(-10,10)
  newBall.yVelocity = rand(-10, 10);
  newBall.xVelocity = rand(-10, 10);
  //call window.setInterval() method
  window.setInterval(function () {
    //apply the moveWithin() method to newBall with box as the value of the container
    newBall.moveWithin(box);
    //move the image of the ball by setting ballImage.style.top = newBall.yPos + "px"
    ballImage.style.top = newBall.yPos + "px";
    //ballImage.style.left = newBall.xPos + "px"
    ballImage.style.left = newBall.xPos + "px";
    //shake the image of the container by setting boxImage.style.top = box.yPos + "px" and boxImage.style.left = box.xPos + "px"
    boxImage.style.top = box.yPos + "px";
    boxImage.style.left = box.xPos + "px";
  }, 30);
};

/* Function to return a random value between minVal and maxValue */
function rand(minVal, maxVal) {
  let size = maxVal - minVal + 1;
  return minVal + size * Math.random();
}
