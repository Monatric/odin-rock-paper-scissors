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

    if (playerSelection == "rock" && computerSelection == "Rock") {
        return "It's a tie! Play again.";
        startRound(playerSelection, computerSelection);
    } else if (playerSelection == "rock" && computerSelection == "Paper") {
        return "You Lose! Paper beats Rock";
    } else if (playerSelection == "rock" && computerSelection == "Scissors") {
        return "You Win! Rock beats Scissors";
    }
}

// const playerSelection = "rock";
// const computerSelection = getComputerChoice();
// console.log(startRound(playerSelection, computerSelection));