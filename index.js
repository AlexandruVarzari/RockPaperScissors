const buttons = document.querySelectorAll("[data-selection]");
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
  console.log(selection);
}
