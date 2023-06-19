function getComputerChoice() {
   const moves = ["rock", "paper", "scissors"];
   let index = Math.floor(Math.random() * 3);
   return moves[index];
}

function playRound(playerSelection, computerSelection) {
   if (computerSelection === playerSelection) {
      return "Aww, it's a tie";
   }
   switch(true) {
      case playerSelection === "rock" && computerSelection === "scissors":
      case playerSelection === "paper" && computerSelection === "rock":
      case playerSelection === "scissors" && computerSelection === "paper":
         return "Yeah! You win, way to go!";
      default:
         return "Too bad, you lose!"
   }
}