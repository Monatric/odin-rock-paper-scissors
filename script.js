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
}

// function startRound(playerSelection, computerSelection) {
//     playerSelection.toLowerCase();
//     return "You Lose! Paper beats Rock";
// }