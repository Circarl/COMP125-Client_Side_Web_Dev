let images = ["photo01.jpg", "photo02.jpg", "photo03.jpg", "photo04.jpg",
"photo05.jpg", "photo06.jpg", "photo07.jpg", "photo08.jpg", "photo09.jpg",
"photo10.jpg", "photo11.jpg", "photo12.jpg"];
let index = 0;
let slideshowImage = document.getElementById("slideshow-image");
let counter = document.getElementById("counter");
let prev = document.getElementById("prev");
let next = document.getElementById("next");
let modal = document.getElementById("modal");
let modalImage = document.getElementById("modal-image");

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

slideshowImage.addEventListener("click", function() {
  modal.style.display = "block";
  modalImage.src = slideshowImage.src;
});

modal.addEventListener("click", function() {
  modal.style.display = "none";
});

function updateSlideshow() {
  slideshowImage.src = images[index];
  updateCounter();
}

function updateCounter() {
  counter.innerText = (index + 1) + " / " + images.length;
}
