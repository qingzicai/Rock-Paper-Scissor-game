
// Selects all <li> elements and assigns them to the variable userChoice
const userChoice = document.querySelectorAll("li");

// Defines an object called possibleResults that stores the possible outcomes of the game
const possibleResults = {
  rock: {
    rock: "It's a tie!",
    paper: "You lost to the bot. Try again!",
    scissor: "You beat the bot!"
  },
  paper: {
    rock: "You beat the bot!",
    paper: "It's a tie!",
    scissor: "You lost to the bot. Try again!"
  },
  scissor: {
    rock: "You lost to the bot. Try again!",
    paper: "You beat the bot!",
    scissor: "It's a tie!"
  }
};

// function called getRandomChoice that randomly selects and returns a choice from the choices array
function getRandomChoice() {
  const choices = ["rock", "paper", "scissor"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

//display the result in the <id=resultDisplay> element, and append the reseting button to it. 
function displayResult(result) {
    const resultDisplay = document.getElementById("resultDisplay");
    resultDisplay.innerHTML = `
    <div class = "style">${result}</p>
    </div>
    `;
    const resetButton = document.getElementById("try-again");
    resetButton.style = "display: block" 
}

// Iterates over each element in the userChoice array using the forEach method
userChoice.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userPick = choice.id;
    const botPick = getRandomChoice();
    // Retrieves the result from the possibleResults object based on the user's and bot's picks
    const result = possibleResults[userPick][botPick];
    // Remove all the pictures from the page 
    document.getElementById('choice').innerHTML = "";
    
    displayResult(result);
  });
});

//bond event listener to "document"(whole page), to catch the event of clicking "reset" button 
document.addEventListener("click", function(event) {
  if (event.target.id === "try-again") {
    location.reload();
  }
});

//Animation when mouse over pictures
userChoice.forEach((choice) => {
  choice.addEventListener("mouseover", () => {
    choice.classList.add("shake");
  });

  choice.addEventListener("mouseout", () => {
    choice.classList.remove("shake");
  });
});


