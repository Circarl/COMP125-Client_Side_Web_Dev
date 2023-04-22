//CKG = Carl Kevin Gasal
var imageListCKG = [];
var durationListCKG = [];
var titleListCKG = [];
var currentIndexCKG = 0;
var autoChangeInterval;

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
                  titleList = data.titles;
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
  var image = document.getElementById("current-image");
  image.src = imageListCKG[index];
}
function showInfo(index) {
  var durationBox = document.getElementById("durationBox");
  durationBox.innerHTML = "\"" + titleList[index] + "\" image in " + durationListCKG[index] + " seconds";
}

// Function to show image at gallery
function showImageInGallery() {
  document.getElementById("imgGallery1").src = imageListCKG[0];
  document.getElementById("imgGallery2").src = imageListCKG[1];
  document.getElementById("imgGallery3").src = imageListCKG[2];
  document.getElementById("imgGallery4").src = imageListCKG[3];
  document.getElementById("imgGallery5").src = imageListCKG[4];
  document.getElementById("imgGallery6").src = imageListCKG[5];
}

// ==================================================== //

// Function to show previous image
function showPrevious() {
  currentIndexCKG = (currentIndexCKG - 1 + imageListCKG.length) % imageListCKG.length;
  showImage(currentIndexCKG);
  showInfo(currentIndexCKG);
}

// Function to show next image
function showNext() {
  currentIndexCKG = (currentIndexCKG + 1) % imageListCKG.length;
  showImage(currentIndexCKG);
  showInfo(currentIndexCKG);
}

// Function to start interval for automatically changing images
function startAutoChange() {
  clearInterval(autoChangeInterval);
  var duration = imageListCKG[currentIndexCKG].duration || 2000;
  autoChangeInterval = setInterval(showNext, duration);
  // timeChangeInterval = setInterval(timer, duration);
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
document.getElementById("play-pause").addEventListener("click", function () {
  loadImageList();
});