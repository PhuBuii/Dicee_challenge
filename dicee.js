function getDice(number) {
  if (number == 0) {
    return "./images/dice1.png";
  } else if (number == 1) {
    return "./images/dice2.png";
  } else if (number == 2) {
    return "./images/dice3.png";
  } else if (number == 3) {
    return "./images/dice4.png";
  } else if (number == 4) {
    return "./images/dice5.png";
  } else if (number == 5) {
    return "./images/dice6.png";
  }
}

var number1 = Math.floor(Math.random() * 6);
var number2 = Math.floor(Math.random() * 6);
var image1 = document.querySelectorAll("img")[0];
var image2 = document.querySelectorAll("img")[1];
var title = document.querySelector("h1");
image1.setAttribute("src", getDice(number1));
image2.setAttribute("src", getDice(number2));

if (number1 > number2) {
  title.innerHTML = "🚩Player 1 Wins!";
} else if (number1 < number2) {
  title.innerHTML = "Player 2 Wins!🚩";
} else {
  title.innerHTML = "Draw!";
}
