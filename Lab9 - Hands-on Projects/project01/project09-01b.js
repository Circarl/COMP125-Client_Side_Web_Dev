"use strict";
/*    JavaScript 7th Edition
      Chapter 9
      Project 09-01

      Project to read field values from a query string
      Author: Carl Kevin Gasal
      Date:   04 - 07 - 2023

      Filename: project09-01b.js
*/

// Retrieve the text of the query string
let query = location.search.slice(1);

// Replace the encoded characters in the query string
query = query.replace(/\+/g, " ");
query = decodeURIComponent(query);

// Split the field=name pairs into separate array items
let cardFields = query.split(/&/g);

for (let items of cardFields) {
   // Extract the field names and values
   let nameValue = items.split(/=/);
   let name = nameValue[0];
   let value = nameValue[1];
   
   document.getElementById(name).textContent = value;
}