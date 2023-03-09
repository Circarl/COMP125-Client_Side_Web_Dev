"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Chapter Case

      Image List

      Filename:lightbox_data.js
*/

// Title of the slideshow
let lightboxTitle = "Philippine Made Wonders";

// Names of the image files shown in the slideshow
let imgFiles = ["photo01.jpg", "photo02.jpg", "photo03.jpg", "photo04.jpg",
                "photo05.jpg", "photo06.jpg", "photo07.jpg", "photo08.jpg",
                "photo09.jpg", "photo10.jpg", "photo11.jpg", "photo12.jpg"]

// Captions associated with each image
let imgCaptions = new Array(12);
imgCaptions[0]="Banaue Rice Terraces Philippines";
imgCaptions[1]="Beautiful island in the middle of the sea"; 
imgCaptions[2]="Mayon Volcano (Philippines)"; 
imgCaptions[3]="Taal Lake (Philippines)"; 
imgCaptions[4]="Beautiful viewing Farm (Philippines)";
imgCaptions[5]="Sunrise in the Fields with Tamaraw (Philippine Cow)";
imgCaptions[6]="Chill at the beach (Boracay, Philippines)";
imgCaptions[7]="Chocolate Mountains (Bohol, Philippines)";
imgCaptions[8]="City View - Manila";
imgCaptions[9]="Coron Island (Palawan Philippines)";
imgCaptions[10]="Nipa Hut - Coconut leaves-made House";
imgCaptions[11]="Mayon Volcano (Albay, Luzon)";

// Count of images in the slideshow
let imgCount = imgFiles.length;
