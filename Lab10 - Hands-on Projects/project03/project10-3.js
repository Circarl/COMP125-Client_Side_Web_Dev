"use strict";
/*  JavaScript 7th Edition
    Chapter 10
    Project 10-03

    Boulder Cycling Directions
    Author: Carl Kevin Gasal
    Date:  04 - 16 - 2023 

    Filename: project10-03.js
*/


function showMap() {
   
   // Page objects
   let bikeMap = document.getElementById("bikeMap");
   let bikeDirections = document.getElementById("bikeDirections");
   let startingPoint = document.getElementById("startingPoint");
   let endingPoint = document.getElementById("endingPoint");   
   
   let bikeFind = new google.maps.DirectionsService();
   let bikeDraw = new google.maps.DirectionsRenderer(); 
   
   // Create a map to the Oak Top House
   let Boulder = {lat: 40.01753, lng: -105.26496};
   
   let myMap = new google.maps.Map(bikeMap, {
      zoom: 12,
      center: Boulder,
   });
   
   startingPoint.addEventListener("change", drawRoute);
   endingPoint.addEventListener("change", drawRoute);

   function drawRoute() {
      if (startingPoint.selectedIndex !== 0 && endingPoint.selectedIndex !== 0) {

         // Drive from current location to Oak Top House
         let  bikeRoute = {
            origin: startingPoint.value,
            destination: endingPoint.value,
            travelMode: "BICYCLING"
         } 

         // Generate directions for the route
         bikeFind.route(bikeRoute, function(result, status) {
            if (status == "OK") {
               bikeDraw.setDirections(result);
               // Display route and directions
               bikeDraw.setMap(myMap);
               bikeDraw.setPanel(bikeDirections);
            } else {
               bikeDirections.textContent = "Directions Unavailable: " + status;
            }
         });      

      }
   }   
} 


