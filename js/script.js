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
         return `Yeah, you win! ${playerSelection} beats ${computerSelection}!`;
      default:
         return `Too bad, you lost. ${computerSelection} beats ${playerSelection}.`;
   }
}

function game() {
   let playerScore = 0;

   for (let i = 0; i < 5; i++) {
      playerSelection = prompt("Rock, paper, scissors, shoot!").toLowerCase;
      computerSelection = getComputerChoice();

      let gameRound = playRound(playerSelection, computerSelection);
      console.log(gameRound);

      playerScore += gameRound[0] == 'Y' ? 1 : gameRound[0] == 'D' ? 0 : -1;
      // Adds 1 to playerScore if they win, 0 if they draw, and removes one if they lose
   }   

   if (playerScore > 0) {
      return "Congratulation, A Winner Is You!"
   }
   else if (playerScore == 0) {
      return "Hooray, no-one wins."
   }
   else {
      return "Too bad, so sad. Better luck next time kid."
   }
}