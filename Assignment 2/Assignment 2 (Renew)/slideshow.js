let images = ["photo01.jpg", "photo02.jpg", "photo03.jpg", "photo04.jpg",
"photo05.jpg", "photo06.jpg", "photo07.jpg", "photo08.jpg", "photo09.jpg",
"photo10.jpg", "photo11.jpg", "photo12.jpg"];
let index = 0;
let slideshowImage = document.getElementById("slideshow-image");
let counter = document.getElementById("counter");
let prev = document.getElementById("prev");
let next = document.getElementById("next");

updateCounter();

prev.addEventListener("click", function() {
  index--;
  if (index < 0) {
    index = images.length - 1;
  }
  updateSlideshow();
});

next.addEventListener("click", function() {
  index++;
  if (index >= images.length) {
    index = 0;
  }
  updateSlideshow();
});

function updateSlideshow() {
  slideshowImage.src = images[index];
  updateCounter();
}

function updateCounter() {
  counter.innerText = (index + 1) + " / " + images.length;
}
// Get all the images in the slideshow
images = document.querySelectorAll("#slideshow-container img");

// Set the current index to 0
let current = 0;

// Function to show the next image in the slideshow
function showNext() {
  // Hide the current image
  images[current].classList.remove("show");

  // Move to the next image
  current = (current + 1) % images.length;

  // Show the next image
  images[current].classList.add("show");

  // Update the counter
  updateCounter();
}

// Function to update the counter
function updateCounter() {
  const counter = document.querySelector("#counter");
  counter.innerText = `${current + 1} / ${images.length}`;
}

// Set an interval to show the next image every 3 seconds
setInterval(showNext, 3000);

