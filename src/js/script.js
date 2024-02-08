/*
 *
 *
 *         This Project is About getting input from user (rock, paper, scissors) and matching it against
 *         computer choice.
 *
 * */

// UI elements 
const gameText = document.querySelector(".game-result");
const rockButton = document.querySelector("#rock-button");
const paperButton = document.querySelector("#paper-button");
const scissorsButton = document.querySelector("#scissors-button");

// randomly pick a choice for the computer
function getComputerChoice() {
  const plays = ["rock", "paper", "scissors"];
  let randomIndex = plays[Math.floor(Math.random() * plays.length)];
  return randomIndex;
}

// play per round of rps
function playRound(userChoice) {
  let computerChoice = getComputerChoice();
  let result = "";

  if (userChoice === "rock") {
    if (computerChoice === "rock") result = "Draw!";
    if (computerChoice === "paper") result = "you lost!";
    if (computerChoice === "scissors") result = "you won!";
  } else if (userChoice === "paper") {
    if (computerChoice === "rock") result = "you won!";
    if (computerChoice === "paper") result = "Draw!";
    if (computerChoice === "scissors") result = "you lost!";
  } else if (userChoice === "scissors") {
    if (computerChoice === "rock") result = "you lost!";
    if (computerChoice === "paper") result = "you won!";
    if (computerChoice === "scissors") result = "draw!";
  }
  
  //change game result 

  gameText.textContent = result.toUpperCase();

  if (result === "you won!")
    gameText.style.color = "#0f0";
  else if (result === "you lost!")
    gameText.style.color = "#f00";
  else 
    gameText.style.color = "#fff";

  return result;
}

// set choice per button using property .choice
rockButton.choice = "rock";
paperButton.choice = "paper";
scissorsButton.choice = "scissors";

// add event listener to play round
rockButton.onclick = () => playRound(rockButton.choice);
paperButton.onclick = () => playRound(paperButton.choice);
scissorsButton.onclick = () => playRound(scissorsButton.choice);

