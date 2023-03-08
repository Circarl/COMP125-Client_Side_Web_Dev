"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Chapter Case

      Application to generate a slide show
      Author: 
      Date:   

      Filename: js05.js
*/

window.addEventListener("load", createLightbox);

function createLightbox() {
  // Lightbox Container
  let lightBox = document.getElementById("lightbox");

  // Parts of the lightbox
  let lbTitle = document.createElement("h1");
  let lbCounter = document.createElement("div");
  let lbPrev = document.createElement("div");
  let lbNext = document.createElement("div");
  let lbPlay = document.createElement("div");
  let lbImages = document.createElement("div");

  // Design the lightbox title
  lightBox.appendChild(lbTitle);
  lbTitle.id = "lbTitle";
  lbTitle.textContent = lightboxTitle;

  // Design the lightbox slide counter
  lightBox.appendChild(lbCounter);
  lbCounter.id = "lbCounter";
  let currentImg = 1;
  lbCounter.textContent = currentImg + " / " + imgCount;

  // Design the lightbox previous slide button
  lightBox.appendChild(lbPrev);
  lbPrev.id = "lbPrev";
  lbPrev.innerHTML = "&#9664;";
  lbPrev.onclick = showPrev;

  // Design the lightbox next slide button
  lightBox.appendChild(lbNext);
  lbNext.id = "lbNext";
  lbNext.innerHTML = "&#9654;";
  lbNext.onclick = showNext;

  // Design the lightbox Play-Pause button
  lightBox.appendChild(lbPlay);
  lbPlay.id = "lbPlay";
  lbPlay.innerHTML = "&#9199;";
  let timeID;
  lbPlay.onclick = function () {
    if (timeID) {
      // Stop the slideshow
      window.clearInterval(timeID);
      timeID = undefined;
    } else {
      // Start the slideshow
      showNext();
      timeID = window.setInterval(showNext, 1500);
    }
  };

  // Design the lightbox images container
  lightBox.appendChild(lbImages);
  lbImages.id = "lbImages";
  // Add images from the imgFiles array to the container
  for (let i = 0; i < imgCount; i++) {
    let image = document.createElement("img");
    image.src = imgFiles[i];
    image.alt = imgCaptions[i];
    image.onclick = createOverlay;
    lbImages.appendChild(image);
  }

  // Function to move forward through the image list
  function showNext() {
    lbImages.appendChild(lbImages.firstElementChild);
    currentImg < imgCount ? currentImg++ : (currentImg = 1);
    lbCounter.textContent = currentImg + " / " + imgCount;
  }

  // Function to move backward through the image list
  function showPrev() {
    lbImages.insertBefore(
      lbImages.lastElementChild,
      lbImages.firstElementChild
    );
    currentImg > 1 ? currentImg-- : (currentImg = imgCount);
    lbCounter.textContent = currentImg + " / " + imgCount;
  }

  function createOverlay() {
   let overlay = document.createElement("div");
   overlay.id = "lbOverlay";
 
   // Add the figure box to the overlay
   let figureBox = document.createElement("figure");
   overlay.appendChild(figureBox);
 
   // Add the image to the figure box
   let overlayImage = this.cloneNode(true);
   figureBox.appendChild(overlayImage);
 
   // Add the caption to the figure box
   let overlayCaption = document.createElement("figcaption");
   overlayCaption.textContent = this.alt;
   figureBox.appendChild(overlayCaption);
 
   // Add the favorites button and remove button to the figure box
   let favoritesBtn = document.createElement("div");
   favoritesBtn.classList.add("favorite-btn");
   favoritesBtn.textContent = "Add to Favorites";
   figureBox.appendChild(favoritesBtn);
 
   let removeBtn = document.createElement("div");
   removeBtn.classList.add("remove-btn");
   removeBtn.textContent = "Remove";
   figureBox.appendChild(removeBtn);
 
   favoritesBtn.addEventListener("click", addToFavorites);
   removeBtn.addEventListener("click", removeFromFavorites);
 
   // Add a close button to the overlay
   let closeBox = document.createElement("div");
   closeBox.id = "lbOverlayClose";
   closeBox.innerHTML = "&times;";
   closeBox.onclick = function () {
     document.body.removeChild(overlay);
   };
   overlay.appendChild(closeBox);
 
   document.body.appendChild(overlay);
 }
 

  let selectedImages = [];
  //ADD TO FAVORITES FUNCTION ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  //ADD TO FAVORITES FUNCTION
  function addToFavorites() {
   let favoritesContainer = document.getElementById("favorites-container");
   
   // Add images from the imgFiles array to the container
   if (selectedImages.length >= 5) {
     alert("You can only add up to 5 images to favorites.");
     return;
   }
 
   // check if the image is already in the favorites
   if (selectedImages.includes(this)) {
     return;
   }
 
   let image = document.createElement("img");
   image.src = imgFiles[i];
   image.alt = this.alt;
 
   let container = document.createElement("div");
   container.classList.add("image-container");
 
   container.appendChild(image);
 
   let addToFavoritesBtn = document.createElement("button");
   addToFavoritesBtn.textContent = "Add to Favorites";
   addToFavoritesBtn.addEventListener("click", addToFavorites);
   container.appendChild(addToFavoritesBtn);
 
   let removeBtn = document.createElement("button");
   removeBtn.textContent = "Remove";
   removeBtn.addEventListener("click", removeFromFavorites);
   container.appendChild(removeBtn);
 
   selectedImages.push(filename);
   favoritesContainer.appendChild(container);
 } 
 

  //REMOVE FROM FAVORITES FUNCTION
  function removeFromFavorites() {
    let image = this.parentNode;
    let index = selectedImages.indexOf(image);
    selectedImages.splice(index, 1);
    image.parentNode.removeChild(image);
  }
}
