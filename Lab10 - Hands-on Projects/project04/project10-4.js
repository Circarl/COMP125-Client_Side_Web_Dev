"use strict";
/*  JavaScript 7th Edition
    Chapter 10
    Project 10-04

    Chess Board Drag and Drop
    
    Author: Carl Kevin Gasal
    Date:  04 - 16 - 2023 

    Filename: project10-04.js
*/


// Page Objects
let pieces = document.getElementsByTagName("span");
let boardSquares = document.querySelectorAll("table#chessboard td");
let whiteBox = document.getElementById("whiteBox");
let blackBox = document.getElementById("blackBox");

for (let items of pieces) {
   items.draggable = "true";
   items.ondragstart = function(e) {
      e.dataTransfer.setData("text", e.target.id);
   }
}

for (let items of boardSquares) {
   items.ondragover = function(e) {
      e.preventDefault();
   }
   
   items.ondrop = function(e) {
      e.preventDefault();
      let pieceID = e.dataTransfer.getData("text");
      let movingPiece = document.getElementById(pieceID);
      
      if (e.target.tagName === "TD") {  
         e.target.appendChild(movingPiece);       
      } else if (e.target.tagName === "SPAN") {
         let occupyingPiece = e.target;
         let square = e.target.parentElement;
         square.appendChild(movingPiece);
         if (occupyingPiece.className === "white") {
            whiteBox.appendChild(occupyingPiece);
         } else {
            blackBox.appendChild(occupyingPiece);
         }
      }

   }
}