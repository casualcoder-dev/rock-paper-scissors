function getComputerChoice() {
  let randomNumber
  randomNumber = Math.floor((Math.random() * 3) + 1);
  if (randomNumber === 1) {
    return "Rock"
  } else if (randomNumber === 2) {
    return "Paper"
  } else return "Scissors"
};

let computerSelection = getComputerChoice();
let playerSelection = prompt("Choose your weapon!")
let playerScore = 1;
let computerScore = 1;

function playRound(playerSelection, computerSelection) {
       if (playerSelection.toUpperCase() === "ROCK" && computerSelection === "Paper") {
        computerScore++
        console.log("You Lose! Paper beats Rock")
  return "You Lose! Paper beats Rock"
} else if (playerSelection.toUpperCase() === "PAPER" && computerSelection === "Scissors") {
  computerScore++
  console.log("You Lose! Paper beats Rock")
  return "You Lose! Scissors beats Paper"
} else if (playerSelection.toUpperCase() === "SCISSORS" && computerSelection === "Rock") {
  computerScore++
  console.log("You Lose! Paper beats Rock")
  return "You Lose! Rock beats Scissors"
} else if (playerSelection.toUpperCase() === "ROCK" && computerSelection === "Scissors") {
  playerScore++
  console.log("You Win! Rock beats Scissors")
  return "You Win! Rock beats Scissors"
} else if (playerSelection.toUpperCase() === "PAPER" && computerSelection === "Rock") {
  playerScore++
  console.log("You Win! Rock beats Scissors")
  return "You Win! Paper beats Rock"
} else if (playerSelection.toUpperCase() === "SCISSORS" && computerSelection === "Paper") {
  playerScore++
  console.log("You Win! Rock beats Scissors")
  return "You Win! Scissors beats Paper"
} else return "Its a tie!"
};
// console.log(playRound(playerSelection,computerSelection)) 

function game() {
  playRound(playerSelection,getComputerChoice())
  playRound(playerSelection,getComputerChoice())
  playRound(playerSelection,getComputerChoice())
  playRound(playerSelection,getComputerChoice())
  playRound(playerSelection,getComputerChoice())
  if (playerScore > computerScore) {
    console.log("You Win!!!")
  } else console.log("You Lose!!!")
};

game();