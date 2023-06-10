function getComputerChoice() {
  let computerInput = ["rock", "paper", "scissors"];
  let comptuerChoice = Math.floor(Math.random() * computerInput.length);
  return computerInput[comptuerChoice];
}
console.log(getComputerChoice());
