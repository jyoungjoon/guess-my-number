'use strict';

// Set initial secret number;
let secret = Math.trunc(Math.random() * 20) + 1;

// State variable:
let score = 20;
let highScore = 0;

// Save `guess` to a variable:
document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = Number(document.querySelector(`.guess`).value);

  // When guess is not provided;
  if (!guess) {
    document.querySelector(`.message`).textContent = 'No number was provided!';
    // When guess is correct;
  } else if (guess === secret) {
    document.querySelector(`.message`).textContent =
      'Correct guess! Congratulations!';
    document.querySelector(`.number`).textContent = secret;
    document.querySelector(`body`).style.backgroundColor = `green`;
    document.querySelector(`.number`).style.width = `30rem`;

    // Keeps track of high score;
    if (score > highScore) {
      highScore = score;
      document.querySelector(`.highscore`).textContent = highScore;
    }

    // When guess is higher;
  } else if (guess > secret) {
    if (score > 1) {
      document.querySelector(`.message`).textContent = `Too high!`;
      score--;
      document.querySelector(`.score`).textContent = score;
    } else {
      document.querySelector(`.message`).textContent = `Game Over💥`;
      document.querySelector(`.score`).textContent = 0;
    }

    // When guess is lower;
  } else if (guess < secret) {
    if (score > 1) {
      document.querySelector(`.message`).textContent = `Too low!`;
      score--;
      document.querySelector(`.score`).textContent = score;
    } else {
      document.querySelector(`.message`).textContent = `Game Over💥`;
      document.querySelector(`.score`).textContent = 0;
    }
  }
});

// Reset button;
document.querySelector(`.again`).addEventListener(`click`, function () {
  document.querySelector(`.score`).textContent = 20;
  document.querySelector(`body`).style.backgroundColor = `#222`;
  document.querySelector(`.guess`).value = ``;
  document.querySelector(`.number`).textContent = `?`;
  document.querySelector(`.message`).textContent = `Start guessing...`;
  document.querySelector(`.number`).style.width = `15rem`;
  secret = Math.trunc(Math.random() * 20) + 1;
  score = 20;
});
