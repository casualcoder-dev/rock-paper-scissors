function getComputerChoice() {
  let randomNumber
  randomNumber = Math.floor((Math.random() * 3) + 1);
  if (randomNumber === 1) {
    return "Rock"
  } else if (randomNumber === 2) {
    return "Paper"
  } else return "Scissors"
};


let playerScore = 1;
let computerScore = 1;

function playRound(playerSelection, computerSelection) {
       if (playerSelection.toUpperCase() === "ROCK" && computerSelection === "Paper") {
        computerScore++
        alert("You Lose! Paper beats Rock")
} else if (playerSelection.toUpperCase() === "PAPER" && computerSelection === "Scissors") {
  computerScore++
  alert("You Lose! Scissors beats Paper")
} else if (playerSelection.toUpperCase() === "SCISSORS" && computerSelection === "Rock") {
  computerScore++
  alert("You Lose! Rock beats Scissors")
} else if (playerSelection.toUpperCase() === "ROCK" && computerSelection === "Scissors") {
  playerScore++
  alert("You Win! Rock beats Scissors")
} else if (playerSelection.toUpperCase() === "PAPER" && computerSelection === "Rock") {
  playerScore++
  alert("You Win! Paper Beats Rock")
} else if (playerSelection.toUpperCase() === "SCISSORS" && computerSelection === "Paper") {
  playerScore++
  alert("You Win! Scissors beats Paper")
} else alert("Its a tie!")
};
// console.log(playRound(playerSelection,computerSelection)) 

function game() {
  playRound(prompt("Choose your weapon!"),getComputerChoice())
  playRound(prompt("Choose your weapon!"),getComputerChoice())
  playRound(prompt("Choose your weapon!"),getComputerChoice())
  playRound(prompt("Choose your weapon!"),getComputerChoice())
  playRound(prompt("Choose your weapon!"),getComputerChoice())
  if (playerScore > computerScore) {
    console.log("You Win!!!")
  } else if (playerScore === computerScore) {
    console.log("Its a tie!!!")
  } else console.log('You Lose!!!')
};

game();