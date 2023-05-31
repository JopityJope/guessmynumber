'use strict';

const number = document.querySelector('.number');

const checkBtn = document.querySelector('.check');
const againBtn = document.querySelector('.again');
const scoreLabel = document.querySelector('.score');

const highscore = document.querySelector('.highscore');
const message = document.querySelector('.message');
const body = document.querySelector('body');

console.log(number, message, checkBtn, highscore);

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

checkBtn.addEventListener('click', function (e) {
  e.preventDefault();
  let guess = Number(document.querySelector('.guess').value);

  //When there is no input
  if (!guess) {
    message.textContent = '❌ No Number!';

    //When player wins
  } else if (guess === secretNumber) {
    message.textContent = '🎉 Correct Number!';
    number.textContent = secretNumber;
    body.style.backgroundColor = '#60b347';
    number.style.width = '30rem';
    if (score > highscore.textContent) {
      highscore.textContent = score;
    }

    //When guess is different than secretNumber
  } else if (guess !== secretNumber) {
    if (score > 1) {
      message.textContent =
        guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
      score--;
      scoreLabel.textContent = score;
    } else {
      message.textContent = '💥 You lost the game!';
      scoreLabel.textContent = 0;
    }
  }
});

againBtn.addEventListener('click', function () {
  number.textContent = '?';
  secretNumber = Math.floor(Math.random() * 20);
  score = 20;
  scoreLabel.textContent = score;
  message.textContent = 'Start guessing...';
  body.style.backgroundColor = '#222';
  number.style.width = '15rem';
});
