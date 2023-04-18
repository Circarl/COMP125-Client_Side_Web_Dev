const slides = document.querySelector('.slides');
const slideWidth = document.querySelector('.slides img').clientWidth;
let slideIndex = 0;

function slide() {
  slides.style.transform = `translateX(-${slideWidth * slideIndex}px)`;
}

function nextSlide() {
  if (slideIndex === 2) {
    slideIndex = 0;
  } else {
    slideIndex++;
  }
  slide();
}

function prevSlide() {
  if (slideIndex === 0) {
    slideIndex = 2;
  } else {
    slideIndex--;
  }
  slide();
}

setInterval(nextSlide, 2000);

const next = document.querySelector('.next');
next.addEventListener('click', nextSlide);

const prev = document.querySelector('.prev');
prev.addEventListener('click', prevSlide);
