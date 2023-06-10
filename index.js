function getComputerChoice() {
  let computerInput = ["rock", "paper", "scissors"];
  let comptuerChoice = Math.floor(Math.random() * computerInput.length);
  return computerInput[comptuerChoice];
}

function playRound(playerSelection, comptuerSlection) {
  if (playerSelection === comptuerSlection) {
    return "This is a Draw!";
  }
  if (playerSelection === "scissors" && comptuerSlection === "rock") {
    return "You lose! rock beats scissors";
  }
  if (playerSelection === "rock" && comptuerSlection === "paper") {
    return "You lose! paper beats rock";
  }
  if (playerSelection === "paper" && comptuerSlection === "scissors") {
    return "You lose! scissors beats paper";
  }

  if (playerSelection === "rock" && comptuerSlection === "scissors") {
    return "You win! rock beats scissors";
  }
  if (playerSelection === "paper" && comptuerSlection === "rock") {
    return "You win! paper beats rock";
  }
  if (playerSelection === "scissors" && comptuerSlection === "paper") {
    return "You win! scissors beats paper";
  }
}

const playerSelection = "";
const comptuerSlection = getComputerChoice();
console.log(playRound(playerSelection, comptuerSlection));
