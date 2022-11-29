"use strict";

let randomNumber1 = Math.trunc(Math.random() * 6) + 1; //1 - 6
let randomDiceImage = "dice" + randomNumber1 + ".png"; // dice1.png - dice6.png
let randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png
let image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);

let randomNumber2 = Math.trunc(Math.random() * 6) + 1;
let randomImageSource2 = "images/dice" + randomNumber2 + ".png";
let image2 = document
  .querySelectorAll("img")[1]
  .setAttribute("src", randomImageSource2);

//If player 1 wins
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").textContent = "🚩 Player 1 Wins!";
  //If player 2 wins
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").textContent = "Player 2 Wins! 🚩";
  //If drow
} else {
  document.querySelector("h1").textContent = "Drow!";
}
