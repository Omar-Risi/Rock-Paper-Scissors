/*
* 
*
*         This Project is About getting input from user (rock, paper, scissors) and matching it against 
*         computer choice. 
*
* */

function getComputerChoice() {

  const plays = ["rock", "paper","scissors"];
  return plays[Math.floor(Math.random * plays.length)];
}

function playRound() {
  let userChoice = prompt("Choose (rock, paper, scissors)").toLowerCase();
  let computerChoice = getComputerChoice();
  let result = "";

  switch(userChoice) {

    case "rock": 
      if (computerChoice === "rock") result = "Draw!";
      if (computerChoice === "paper") result = "you lost!, Paper beats rock";
      if (computerChoice === "scissors") result = "you won!, Rock Beats Scissors";
      break;
    case "paper": 
      if (computerChoice === "rock") result = "you won!, Paper beats rock";
      if (computerChoice === "paper") result = "Draw!";
      if (computerChoice === "scissors") result = "you lost, Scissors beat paper";
      break;
    case "scissors":
      if (computerChoice === "rock") result = "you lost, Rock beats scissors";
      if (computerChoice === "paper") result = "you won, Scissors beat paper";
      if (computerChoice === "scissors") result = "draw";
      break;
  }

  return result;
}

function playGame() {
  for(let i = 0; i < 5; i++) {
    let result = playRound();
    alert(result);
  }
}
