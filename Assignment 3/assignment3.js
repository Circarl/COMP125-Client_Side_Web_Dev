// Client Side Web Development - Assignment #3
// COMP 125 - Sec.009

// Author: Carl Kevin Gasal
// Student #: 301242419

const Canvas = document.getElementById("gameCanvas");
const ctx = Canvas.getContext("2d");
const scoreDisplay = document.getElementById("score-display");

const moleGif = new Image();
moleGif.src = "Mole.png";

const mole_hit_gif = new Image();
mole_hit_gif.src = "Mole_Hit.png";

const BackgroundMusic = document.getElementById("backgroundMusic");
BackgroundMusic.volume = 0.5;
const hitSound = document.getElementById("mole_hit_sound");

let Score_Hit = 0;
let interval = 1000;
let Mole = {
  x: Math.random() * (Canvas.width - 96),
  y: Math.random() * (Canvas.height - 96),
  width: 96,
  height: 96
};

const moleHit = {
  active: false,
  x: 0,
  y: 0,
  timer: null,
};

function resetGame() {
  Mole.x = Math.random() * (Canvas.width - Mole.width);
  Mole.y = Math.random() * (Canvas.height - Mole.height);
}

function resetSpeed() {
  interval = 1000;
}

function startBackgroundMusic() {
  BackgroundMusic.play();
}

function stopBackgroundMusic() {
  BackgroundMusic.pause();
}

function resetScore() {
  Score_Hit = 0;
  scoreDisplay.textContent = "Score: " + Score_Hit;
}

Canvas.addEventListener("click", (e) => {
  const rect = Canvas.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  if (
    x >= Mole.x && x <= Mole.x + Mole.width &&
    y >= Mole.y && y <= Mole.y + Mole.height
  ) {
    hitSound.currentTime = 0;
    hitSound.play();
    Score_Hit++;
    scoreDisplay.textContent = Score_Hit;

    moleHit.x = Mole.x;
    moleHit.y = Mole.y;
    moleHit.active = true;
    moleHit.timer = setTimeout(() => {
      moleHit.active = false;
    }, 2000);

    resetGame();
    interval = Math.max(250, interval - 12.5); 
  }
});

function draw() {
  ctx.clearRect(0, 0, Canvas.width, Canvas.height);

  ctx.drawImage(moleGif, Mole.x, Mole.y, Mole.width, Mole.height);

  if (moleHit.active) {
    ctx.drawImage(mole_hit_gif, moleHit.x, moleHit.y, Mole.width, Mole.height);
  }

  setTimeout(() => {
    resetGame();
    requestAnimationFrame(draw);
  }, interval);
}

moleGif.onload = () => {
  draw();
};

window.resetSpeed = resetSpeed;
window.resetScore = resetScore;
window.startBackgroundMusic = startBackgroundMusic;
window.stopBackgroundMusic = stopBackgroundMusic;
