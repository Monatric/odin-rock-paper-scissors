function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);

    switch (computerChoice) {
        case 0:
            computerChoice = "Rock";
            break;
        case 1:
            computerChoice = "Paper";
            break;
        case 2:
            computerChoice = "Scissors";
            break;
    }

    return computerChoice;
}


let playerScore = 0;
let computerScore = 0;

function startRound(playerSelection, computerSelection) {
    playerSelection.toLowerCase();
    console.log("Computer: " + getComputerChoice());

    if (playerSelection == "rock" && computerSelection == "Rock") {
        console.log("It's a tie! Play again.")
    } else if (playerSelection == "rock" && computerSelection == "Paper") {
        computerScore++;
        console.log("You Lose! Rock is beaten by Paper");
    } else if (playerSelection == "rock" && computerSelection == "Scissors") {
        playerScore++;
        console.log("You Win! Rock beats Scissors");
    } else if (playerSelection == "paper" && computerSelection == "Rock") {
        playerScore++;
        console.log("You Win! Paper beats Rock");
    } else if (playerSelection == "paper" && computerSelection == "Paper") {
        console.log("It's a tie! Play again.")
    } else if (playerSelection == "paper" && computerSelection == "Scissors") {
        computerScore++;
        console.log("You Lose! Paper is beaten by Scissors");
    } else if (playerSelection == "scissors" && computerSelection == "Rock") {
        computerScore++;
        console.log("You Lose! Scissors is beaten by Rock");
    } else if (playerSelection == "scissors" && computerSelection == "Paper") {
        playerScore++;
        console.log("You Win! Scissors beats Paper");
    } else if (playerSelection == "scissors" && computerSelection == "Scissors") {
        console.log("It's a tie! Play again.");
    }

    console.log("[Total score] Player: " + playerScore + " | Computer: " + computerScore);
}

function game() {    
    let playerAnswer = prompt("Choose your weapon!");
    playerAnswer.toLowerCase();

    if (playerScore == 5) {
        return "Congrats! You won.";
    } else if (computerScore == 5) {
        return "LOSER!";
    } else if (playerScore < 5 && computerScore < 5) {
        startRound(playerAnswer, getComputerChoice());
        playerAnswer = prompt("Choose your weapon!");
        startRound(playerAnswer, getComputerChoice());
    }
}

game();