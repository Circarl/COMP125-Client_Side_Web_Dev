"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Chapter Case

      Application to generate a slide show
      Author: 
      Date:   

      Filename: js05.js
*/
let favorites = [];

window.addEventListener("load", createLightbox);
let addToFavoritesButton = document.getElementById("add-to-favorites");

addToFavoritesButton.addEventListener("click", function() {
  if (favorites.length >= 5) {
    alert("You have reached the maximum limit of 5 favorite images. Please remove at least one image to add another.");
    return;
  }

  let currentImage = document.getElementById("lightbox-image").src;
  if (!favorites.includes(currentImage)) {
    favorites.push(currentImage);
    addFavoriteImage(currentImage);
  }
});
let favoritesList = document.getElementById("favorites-list");

favoritesList.addEventListener("click", function(event) {
  if (event.target.classList.contains("remove-favorite")) {
    let imageSrc = event.target.parentNode.querySelector("img").src;
    removeFavoriteImage(imageSrc);
  }
});
``

// ================================++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ ADD FAVORITE IMAGE
function addFavoriteImage(imageSrc) {
   let favoritesList = document.getElementById("favorites-list");
 
   // create a new img element
   let favoriteImage = document.createElement("img");
   favoriteImage.src = imageSrc;
 
   // add a class to the image so it can be styled with CSS
   favoriteImage.classList.add("favorite-image");
 
   // create a new button element to remove the favorite image
   let removeButton = document.createElement("button");
   removeButton.textContent = "Remove";
   removeButton.classList.add("remove-favorite");
 
   // add an event listener to the remove button, to remove the favorite image when clicked
   removeButton.addEventListener("click", function() {
     removeFavoriteImage(imageSrc);
   });
 
   // add the remove button to the image
   favoriteImage.appendChild(removeButton);
 
   // if this is the first favorite image, create the favorites section and add the clear favorites button
   if (favorites.length === 1) {
     let favoritesSection = document.createElement("section");
     favoritesSection.id = "favorites-section";
 
     let favoritesTitle = document.createElement("h2");
     favoritesTitle.textContent = "Favorite Images";
 
     let favoritesListContainer = document.createElement("div");
     favoritesListContainer.id = "favorites-list-container";
 
     let clearFavoritesButton = document.createElement("button");
     clearFavoritesButton.textContent = "Clear Favorites";
     clearFavoritesButton.id = "clear-favorites";
 
     clearFavoritesButton.addEventListener("click", function() {
       favorites.length = 0;
       favoritesList.innerHTML = "";
       favoritesSection.remove();
     });
 
     favoritesSection.appendChild(favoritesTitle);
     favoritesSection.appendChild(favoritesListContainer);
     favoritesSection.appendChild(clearFavoritesButton);
 
     document.body.insertBefore(favoritesSection, document.getElementById("lightbox"));
 
     favoritesListContainer.appendChild(favoriteImage);
   } else {
     let favoritesListContainer = document.getElementById("favorites-list-container");
     favoritesListContainer.appendChild(favoriteImage);
   }
 }
 
// ================================++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ REMOVE FAVORITES FUNCTION
function removeFavoriteImage(imageSrc) {
   let index = favorites.indexOf(imageSrc);
   if (index !== -1) {
     favorites.splice(index, 1);
   }
 
   let favoriteImage = document.querySelector(`.favorite-image[src="${imageSrc}"]`);
   if (favoriteImage) {
     favoriteImage.remove();
   }
 }
 // ================================++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 
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
   lbPlay.onclick = function() {
      if (timeID) {
         // Stop the slideshow
         window.clearInterval(timeID);
         timeID = undefined;
      } else {
         // Start the slideshow
         showNext();
         timeID = window.setInterval(showNext, 1500);
      }
   }

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
      (currentImg < imgCount) ? currentImg++ : currentImg = 1;
      lbCounter.textContent = currentImg + " / " + imgCount;
   }
   
   // Function to move backward through the image list
   function showPrev() {
      lbImages.insertBefore(lbImages.lastElementChild, lbImages.firstElementChild);
      (currentImg > 1) ? currentImg-- : currentImg = imgCount;
      lbCounter.textContent = currentImg + " / " + imgCount;
   }
   
   function createOverlay() {
      let overlay = document.createElement("div");
      var removeOverlay;
      overlay.id = "overlay";
      overlay.onclick = removeOverlay;
      document.body.appendChild(overlay);
    
      let image = event.target.cloneNode();
      image.id = "lightbox-image";
      overlay.appendChild(image);
    
      let caption = document.createElement("div");
      caption.id = "lightbox-caption";
      caption.textContent = event.target.alt;
      overlay.appendChild(caption);
    
      let addToFavoritesButton = document.createElement("button");
      addToFavoritesButton.textContent = "<hr> Add to Favorites";
      addToFavoritesButton.id = "add-to-favorites-overlay";
      addToFavoritesButton.addEventListener("click", function() {
        if (favorites.length >= 5) {
          alert("You have reached the maximum limit of 5 favorite images. Please remove at least one image to add another.");
          return;
        }
    
        let currentImage = document.getElementById("lightbox-image").src;
        if (!favorites.includes(currentImage)) {
          favorites.push(currentImage);
          addFavoriteImage(currentImage);
        }
      });
      overlay.appendChild(addToFavoritesButton);
    }
}

