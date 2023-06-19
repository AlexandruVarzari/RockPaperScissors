const buttons = document.querySelectorAll("[data-selection]");
const finalColumn = document.querySelector("[data-final]");
const computerSpan = document.querySelector("[data-computer-score]");
const yourSpan = document.querySelector("[data-your-score]");
const drawScore = document.querySelector("[data-score-draw]");
const SELECTIONS = [
  {
    name: "rock",
    emoji: "✊",
    beats: "scissors",
  },
  {
    name: "paper",
    emoji: "✋",
    beats: "rock",
  },
  {
    name: "scissors",
    emoji: "🖖",
    beats: "paper",
  },
];
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const buttonName = button.dataset.selection;
    const selection = SELECTIONS.find(
      (selection) => selection.name === buttonName
    );
    makeSelection(selection);
  });
});

function makeSelection(selection) {
  const computerSelection = computerChoice();
  const youWin = winner(selection, computerSelection);
  const computerWin = winner(computerSelection, selection);

  if (youWin) incrementScore(yourSpan);
  if (computerWin) incrementScore(computerSpan);
  if (youWin === computerWin) incrementScore(drawScore);
}

function incrementScore(scoreParam) {
  scoreParam.innerText = parseInt(scoreParam.innerText) + 1;
}

function winner(selection, opponentSelection) {
  return selection.name === opponentSelection.beats;
}

function computerChoice() {
  const randomChoice = Math.floor(Math.random() * SELECTIONS.length);
  return SELECTIONS[randomChoice];
}
