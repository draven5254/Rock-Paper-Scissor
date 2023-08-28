const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;
let roundsPlayed = 0;

const buttons = document.querySelectorAll(".choice");
const playerScoreDisplay = document.getElementById("playerScore");
const computerScoreDisplay = document.getElementById("computerScore");
const resultDisplay = document.getElementById("result");
const roundDisplay = document.getElementById("round");
const resetBtn = document.getElementById("reset");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (roundsPlayed < 5) {
      const playerChoice = button.id;
      const computerChoice = choices[Math.floor(Math.random() * 3)];

      const result = playRound(playerChoice, computerChoice);
      resultDisplay.textContent = result;
      //   console.log(resultDisplay);

      if (result.includes("Win")) {
        playerScore++;
        playerScoreDisplay.textContent = playerScore;
      } else if (result.includes("Lose")) {
        computerScore++;
        computerScoreDisplay.textContent = computerScore;
      }

      roundsPlayed++;
      roundDisplay.textContent = roundsPlayed;

      if (roundsPlayed === 5) {
        endGame();
      }
    }
  });
});

function playRound(player, computer) {
  if (player === computer) return "Draw!";
  if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) {
    return "You Win!";
  } else {
    return "You Lose!";
  }
}

function endGame() {
  if (playerScore > computerScore) {
    resultDisplay.textContent = "Congratulations! You win!";
  } else if (computerScore > playerScore) {
    resultDisplay.textContent = "Sorry, you lose!";
  } else {
    resultDisplay.textContent = "It's a tie game!";
  }
}

resetBtn.addEventListener("click", () => {
  playerScore = 0;
  computerScore = 0;
  roundsPlayed = 0;

  playerScoreDisplay.textContent = playerScore;
  computerScoreDisplay.textContent = computerScore;
  roundDisplay.textContent = roundsPlayed;
  resultDisplay.textContent = "Game Start";
});
