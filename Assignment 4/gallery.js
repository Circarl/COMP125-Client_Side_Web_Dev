// CKG = Carl Kevin Gasal
// COMP125 Winter 2023
var imageListCKG = [];
var durationListCKG = [];
var titleListCKG = [];
var currentIndexCKG = 0;
var autoChangeIntervalCKG;

// Function to load image list from JSON file using AJAX
function loadImageList() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "photos.json", true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        try {
          var data = JSON.parse(xhr.responseText);
          imageListCKG = data.images;
          durationListCKG = data.duration;
          titleListCKG = data.titles;
          showImage(currentIndexCKG);
          showImageInGallery();
          showInfo(currentIndexCKG);
          startAutoChange();
        } catch (error) {
          console.error("Failed to parse image list:", error);
        }
      } else {
        console.error("Failed to load image list. Status:", xhr.status);
      }
    }
  };
  xhr.send();
}

// Load image list when page loads
loadImageList();

function showImage(index) {
  var image = $("#current-image");
  image.fadeOut(500, function() {
    image.attr("src", imageListCKG[index]).fadeIn(500);
  });
}

function showInfo(index) {
  var captionBoxCKG = document.getElementById("caption-box");
  captionBoxCKG.innerHTML = "\"" + titleListCKG[index] + "\" image in " + durationListCKG[index] + " seconds";
}

// Function to show image at gallery
function showImageInGallery() {
  var images = document.getElementsByClassName("imgGallery");
  for (var i = 0; i < images.length; i++) {
    images[i].src = imageListCKG[i];
    images[i].addEventListener("click", function() {
      // Remove active class from all images
      for (var j = 0; j < images.length; j++) {
        images[j].classList.remove("active");
      }
      // Add active class to clicked image
      this.classList.add("active");
      // Show clicked image in slideshow
      var index = Array.prototype.indexOf.call(images, this);
      showImage(index);
      showInfo(index);
      startAutoChange();
    });
  }
}

// ==================================================== //

// Function to show previous image
function showNext() {
  currentIndexCKG = (currentIndexCKG + 1) % imageListCKG.length;
  var prevActiveImage = document.querySelector(".active");
  prevActiveImage.classList.remove("active", "fade-out");
  var activeImage = document.querySelector("#imgGallery" + (currentIndexCKG + 1));
  activeImage.classList.add("active");
  setTimeout(function() {
    activeImage.classList.add("fade-out");
  }, 10);
  showImage(currentIndexCKG);
  showInfo(currentIndexCKG);
}

function showPrevious() {
  currentIndexCKG = (currentIndexCKG - 1 + imageListCKG.length) % imageListCKG.length;
  var prevActiveImage = document.querySelector(".active");
  prevActiveImage.classList.remove("active", "fade-out");
  var activeImage = document.querySelector("#imgGallery" + (currentIndexCKG + 1));
  activeImage.classList.add("active");
  setTimeout(function() {
    activeImage.classList.add("fade-out");
  }, 10);
  showImage(currentIndexCKG);
  showInfo(currentIndexCKG);
}

// Function to start interval for automatically changing images
function startAutoChange() {
  clearInterval(autoChangeIntervalCKG);
  var duration = durationListCKG[currentIndexCKG] || 5;
  var image = document.getElementById("current-image");
  image.style.opacity = 0;
  autoChangeIntervalCKG = setInterval(function() {
    currentIndexCKG = (currentIndexCKG + 1) % imageListCKG.length;
    image.src = imageListCKG[currentIndexCKG];
    showInfo(currentIndexCKG);
    image.style.opacity = 1;
    setTimeout(function() {
      image.style.opacity = 0;
    }, (duration - 1) * 1000);
  }, duration * 1000);
}

// Event listener for previous button
document.getElementById("prev").addEventListener("click", function () {
  showPrevious();
  startAutoChange();
});

// Event listener for next button
document.getElementById("next").addEventListener("click", function () {
  showNext();
  startAutoChange();
});

// Event listener for update button
document.getElementById("update").addEventListener("click", function () {
  loadImageList();
});