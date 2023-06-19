function getComputerChoice() {
   const moves = ["rock", "paper", "scissors"];
   let index = Math.floor(Math.random() * 3);
   return moves[index];
}