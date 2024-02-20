"Use strict";

const choices = ["rock", "paper", "scissors"];
// const choices = ["./img/rock.png", "./img/paper.png", "./img/paper.png"];
let playerScore = 0;
let computerScore = 0;
let roundsPlayed = 0;

const buttons = document.querySelectorAll(".choice");
const playerScoreDisplay = document.getElementById("playerScore");
const computerScoreDisplay = document.getElementById("computerScore");
const resultDisplay = document.getElementById("result");
const roundDisplay = document.getElementById("round");
const resetBtn = document.getElementById("reset");

const imgPlayer = document.querySelector("playerImg");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (roundsPlayed < 10) {
      const playerChoice = button.id;
      const computerChoice = choices[Math.floor(Math.random() * 3)];

      const result = playRound(playerChoice, computerChoice);
      resultDisplay.textContent = result;
      console.log(result);

      if (result.includes("Win")) {
        playerScore++;
        playerScoreDisplay.textContent = playerScore;
      } else if (result.includes("Lose")) {
        computerScore++;
        computerScoreDisplay.textContent = computerScore;
      }

      roundsPlayed++;
      roundDisplay.textContent = roundsPlayed;

      if (roundsPlayed === 10) {
        endGame();
      }
    }
  });
});

// player vs Computer function

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

// end Game function
function endGame() {
  if (playerScore > computerScore) {
    resultDisplay.textContent = "Congratulations! You win!";
  } else if (computerScore > playerScore) {
    resultDisplay.textContent = "Sorry, you lose!";
  } else {
    resultDisplay.textContent = "It's a tie game!";
  }
}

// button
resetBtn.addEventListener("click", () => {
  playerScore = 0;
  computerScore = 0;
  roundsPlayed = 0;

  playerScoreDisplay.textContent = playerScore;
  computerScoreDisplay.textContent = computerScore;
  roundDisplay.textContent = roundsPlayed;
  resultDisplay.textContent = "Start Game";
});

//* PRELOADER

window.addEventListener("load", function () {
  const preloader = document.querySelector(".preloader");
  const content = document.querySelector(".container");
  const footer = document.querySelector("footer");

  // Introduce a delay (in milliseconds) before showing the content
  const delayDuration = 2000; // 2 seconds

  setTimeout(function () {
    preloader.style.display = "none";
    content.style.display = "block";
    footer.style.display = "block";
  }, delayDuration);
});
