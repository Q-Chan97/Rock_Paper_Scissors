function getComputerChoice() {
   const moves = ["rock", "paper", "scissors"];
   let index = Math.floor(Math.random() * 3);
   return moves[index];
}

function playRound(playerSelection, computerSelection) {
   if (computerSelection === playerSelection) {
      return "Aww, it's a tie";
   }
   else if (computerSelection === "paper" && playerSelection === "rock") {
      return "You lose! Paper beats rock";
   }
   else if (computerSelection === "scissors" && playerSelection === "rock") {
      return "You win! Rock beats scissors";
   }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection))