// //event.listener watch event change -"click" in userChoice [];
// //const userPick = click.value;
// //let botChoice = [paper, scissor, rock], let botPick = botChoice[].random;
// //compare botPick to userPick: const = possibleResult{(userPic = "scissor" && botPic = "scissor"): "it's a tie"...etc.}; 
// //return "You beat the Bot!" or return "How can you loose to the bot? Try again!" or "It's a tie!" in the <div id="resultDisplay"></div> area;



const userChoice = document.querySelectorAll("li");
const possibleResults = {
  rock: {
    rock: "It's a tie!",
    paper: "How can you lose to the bot? Try again!",
    scissor: "You beat the bot!"
  },
  paper: {
    rock: "You beat the bot!",
    paper: "It's a tie!",
    scissor: "How can you lose to the bot? Try again!"
  },
  scissor: {
    rock: "How can you lose to the bot? Try again!",
    paper: "You beat the bot!",
    scissor: "It's a tie!"
  }
};

function getRandomChoice() {
  const choices = ["rock", "paper", "scissor"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function displayResult(result) {
  const resultDisplay = document.getElementById("resultDisplay");
  resultDisplay.textContent = result;

  const resetContainer = document.getElementById("reset");
  resetContainer.innerHTML = ""; // Clear any previous content

  const resetButton = document.createElement("button");
  resetButton.textContent = "Do it again";
  resetButton.addEventListener("click", resetGame);
  resetContainer.appendChild(resetButton);
}

function resetGame() {
  const choiceContainer = document.getElementById("choice");
  choiceContainer.innerHTML = `
    <li id="rock"><img src="rock.png" alt="rock" width="400" height="400"></li>
    <li id="scissor"><img src="scissor.png" alt="scissor" width="400" height="400"></li>
    <li id="paper"><img src="paper.png" alt="paper" width="400" height="400"></li>
  `;

  const resetContainer = document.getElementById("reset");
  resetContainer.innerHTML = ""; // Clear the reset button

  userChoice.forEach((choice) => {
    choice.addEventListener("click", () => {
      const userPick = choice.id;
      const botPick = getRandomChoice();
      const result = possibleResults[userPick][botPick];
      displayResult(result);
    });
  });
}

userChoice.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userPick = choice.id;
    const botPick = getRandomChoice();
    const result = possibleResults[userPick][botPick];
    displayResult(result);
  });
});


