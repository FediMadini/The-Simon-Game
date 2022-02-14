function display(randomNumber) {

  var green = new Audio('sounds/green.mp3');
  var red = new Audio('sounds/red.mp3');
  var yellow = new Audio('sounds/yellow.mp3');
  var blue = new Audio('sounds/blue.mp3');

  switch (randomNumber) {
    case 0:
      $('.green').animate({ opacity: 0.5 }, 'fast');
      $('.green').animate({ opacity: 1 }, 'fast');
      green.play();
      break;
    case 1:
      $('.red').animate({ opacity: 0.5 }, 'fast');
      $('.red').animate({ opacity: 1 }, 'fast');
      red.play();
      break;
    case 2:
      $('.yellow').animate({ opacity: 0.5 }, 'fast');
      $('.yellow').animate({ opacity: 1 }, 'fast');
      yellow.play();
      break;
    case 3:
      $('.blue').animate({ opacity: 0.5 }, 'fast');
      $('.blue').animate({ opacity: 1 }, 'fast');
      blue.play();
  }
}

function translate(randomNumber) {
  switch (randomNumber) {
    case 0:
      return 'green';
    case 1:
      return 'red';
    case 2:
      return 'yellow';
    case 3:
      return 'blue';
  }
}

function addEffect(elemnt, effect1, effect2, effect3) {
  $(elemnt).addClass(effect1);
  $(elemnt).css('background-color', effect2);
  setTimeout(function () {
    $(elemnt).removeClass(effect1);
    $(elemnt).css('background-color', effect3);
  }, 100);
}

var listOfInputs = [];
var score = 0;
var lvl = 1;
var counter = 0;
var counter1 = 0;
var counter2 = 0;
var randomNumber = Math.floor(Math.random() * 4);
var gameOver = new Audio('sounds/wrong.mp3');

$(document).keypress(function () {
  if (counter1 == 0) {
    counter1 = 1;
    counter = 0;
    lvl = 1;
    listOfInputs = [];
    $('h1').html('Level ' + lvl);
    randomNumber = Math.floor(Math.random() * 4);
    listOfInputs.push(randomNumber);
    display(randomNumber);
  }
});

$('.box').click(function () {
  addEffect('.' + this.classList[1], 'effect', 'gray', this.classList[1]);
  if (this.classList[1] == translate(listOfInputs[counter])) {
    if (counter == listOfInputs.length - 1) {
      lvl++;
      counter = 0;
      $('h1').html('Level ' + lvl);
      randomNumber = Math.floor(Math.random() * 4);
      listOfInputs.push(randomNumber);
      display(randomNumber);
    }else {
      counter++;
    }
  }else {
    gameOver.play();
    $('h1').html('Game Over, Press Any Key to Restart');
    addEffect('body', 'red', 'red', '#011F3F');
    if (score < lvl) {
      score = lvl;
    }
    $('p').html('Highest score: ' + score);
    counter1 = 0;
  }
});
