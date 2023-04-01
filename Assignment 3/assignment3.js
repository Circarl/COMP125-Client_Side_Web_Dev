// Client Side Web Development
// COMP 125 - 001
// 13521 Class 
// Assignment #3

// Author: Voltaire A. Rono
// Student #: 301276375

// volt is short for Voltaire

const voltCanvas = document.getElementById("gameCanvas");
const voltCtx = voltCanvas.getContext("2d");
const voltScoreDisplay = document.getElementById("score-display");

const voltStarGif = new Image();
voltStarGif.src = "star.gif";

const voltExplosionGif = new Image();
voltExplosionGif.src = "explosion.gif";

const voltBackgroundMusic = document.getElementById("backgroundMusic");
voltBackgroundMusic.volume = 0.5;
const voltTwinkleSound = document.getElementById("twinkleSound");

let voltScore = 0;
let voltInterval = 1000;
let voltStar = {
  x: Math.random() * (voltCanvas.width - 96),
  y: Math.random() * (voltCanvas.height - 96),
  width: 96,
  height: 96
};

const voltExplosion = {
  active: false,
  x: 0,
  y: 0,
  timer: null,
};

function resetStar() {
  voltStar.x = Math.random() * (voltCanvas.width - voltStar.width);
  voltStar.y = Math.random() * (voltCanvas.height - voltStar.height);
}

function resetSpeed() {
  voltInterval = 1000;
}

function startBackgroundMusic() {
  voltBackgroundMusic.play();
}

function stopBackgroundMusic() {
  voltBackgroundMusic.pause();
}

function resetScore() {
  voltScore = 0;
  voltScoreDisplay.textContent = "Score: " + voltScore;
}

voltCanvas.addEventListener("click", (e) => {
  const rect = voltCanvas.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  if (
    x >= voltStar.x && x <= voltStar.x + voltStar.width &&
    y >= voltStar.y && y <= voltStar.y + voltStar.height
  ) {
    voltTwinkleSound.currentTime = 0;
    voltTwinkleSound.play();
    voltScore++;
    voltScoreDisplay.textContent = "Score: " + voltScore;

    voltExplosion.x = voltStar.x;
    voltExplosion.y = voltStar.y;
    voltExplosion.active = true;
    voltExplosion.timer = setTimeout(() => {
      voltExplosion.active = false;
    }, 2000);

    resetStar();
    voltInterval = Math.max(250, voltInterval - 12.5); 
  }
});

function draw() {
  voltCtx.clearRect(0, 0, voltCanvas.width, voltCanvas.height);

  voltCtx.drawImage(voltStarGif, voltStar.x, voltStar.y, voltStar.width, voltStar.height);

  if (voltExplosion.active) {
    voltCtx.drawImage(voltExplosionGif, voltExplosion.x, voltExplosion.y, voltStar.width, voltStar.height);
  }

  setTimeout(() => {
    resetStar();
    requestAnimationFrame(draw);
  }, voltInterval);
}

voltStarGif.onload = () => {
  draw();
};

window.resetSpeed = resetSpeed;
window.resetScore = resetScore;
window.startBackgroundMusic = startBackgroundMusic;
window.stopBackgroundMusic = stopBackgroundMusic;
