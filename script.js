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

function startRound(playerSelection, computerSelection) {
    playerSelection.toLowerCase();

    let playerScore;
    let computerScore;

    if (playerSelection == "rock" && computerSelection == "Rock") {
        return "It's a tie! Play again.";
    } else if (playerSelection == "rock" && computerSelection == "Paper") {
        computerScore++;
        return "You Lose! Rock is beaten by Paper";
    } else if (playerSelection == "rock" && computerSelection == "Scissors") {
        playerScore++;
        return "You Win! Rock beats Scissors";
    } else if (playerSelection == "paper" && computerSelection == "Rock") {
        playerScore++;
        return "You Win! Paper beats Rock";
    } else if (playerSelection == "paper" && computerSelection == "Paper") {
        return "It's a tie! Play again.";
    } else if (playerSelection == "paper" && computerSelection == "Scissors") {
        computerScore++;
        return "You Lose! Paper is beaten by Scissors";
    } else if (playerSelection == "scissors" && computerSelection == "Rock") {
        computerScore++;
        return "You Lose! Scissors is beaten by Rock";
    } else if (playerSelection == "scissors" && computerSelection == "Paper") {
        playerScore++;
        return "You Win! Scissors beats Paper";
    } else if (playerSelection == "scissors" && computerSelection == "Scissors") {
        return "It's a tie! Play again.";
    }

    console.log("[Total score] Player: " + playerScore + "| Computer: " + computerScore);
}



function game() {    
    let playerAnswer = prompt("Choose your weapon!");

}