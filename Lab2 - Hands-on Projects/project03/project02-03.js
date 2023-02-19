/*    JavaScript 7th Edition
      Chapter 2
      Project 02-03

      Application to return the shape of a clicked object
      Author: Carl Kevin Gasal
      Date: 01 - 27 - 2023

      Filename: project02-03.js
 */
var square = document.getElementById("square");
square.onmouseover = function () {
      document.getElementById("feedback").innerHTML = "You're hovering over the square";
}
square.onmouseout = function () {
      document.getElementById("feedback").innerHTML = "";
}
var triangle = document.getElementById("triangle");
triangle.onmouseover = function () {
      document.getElementById("feedback").innerHTML = "You're hovering over the triangle";
}
triangle.onmouseout = function () {
      document.getElementById("feedback").innerHTML = "";
}

var circle = document.getElementById("circle");
circle.onmouseover = function () {
      document.getElementById("feedback").innerHTML = "You're hovering over the circle";
}
circle.onmouseout = function () {
      document.getElementById("feedback").innerHTML = "";
}
