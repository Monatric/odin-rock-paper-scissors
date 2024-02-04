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

    const compSelection = document.querySelector('.comp-selection');
    compSelection.textContent = 'Computer: ' + computerChoice;

    return computerChoice;
}

let rpsBtns = document.querySelector('.rps-btns');
function rpsEvent(event) {
    let target = event.target;
    

    switch(target.id) {
        case 'rock':
            startRound('rock', getComputerChoice());
            break;
        case 'paper':
            startRound('paper', getComputerChoice());
            break;
        case 'scissors':
            startRound('scissors', getComputerChoice());
            break;
    }
}
rpsBtns.addEventListener('click', rpsEvent);


let playerScore = 0;
let computerScore = 0;

function startRound(playerSelection, computerSelection) {
    const dialogue = document.querySelector('.dialogue');

    if (playerSelection == "rock" && computerSelection == "Rock") {
        dialogue.textContent = "It's a tie! Play again.";
    } else if (playerSelection == "rock" && computerSelection == "Paper") {
        computerScore++;
        dialogue.textContent = "You Lose! Rock is beaten by Paper";
    } else if (playerSelection == "rock" && computerSelection == "Scissors") {
        playerScore++;
        dialogue.textContent = "You Win! Rock beats Scissors";
    } else if (playerSelection == "paper" && computerSelection == "Rock") {
        playerScore++;
        dialogue.textContent = "You Win! Paper beats Rock";
    } else if (playerSelection == "paper" && computerSelection == "Paper") {
        dialogue.textContent = "It's a tie! Play again.";
    } else if (playerSelection == "paper" && computerSelection == "Scissors") {
        computerScore++;
        dialogue.textContent = "You Lose! Paper is beaten by Scissors";
    } else if (playerSelection == "scissors" && computerSelection == "Rock") {
        computerScore++;
        dialogue.textContent = "You Lose! Scissors is beaten by Rock";
    } else if (playerSelection == "scissors" && computerSelection == "Paper") {
        playerScore++;
        dialogue.textContent = "You Win! Scissors beats Paper";
    } else if (playerSelection == "scissors" && computerSelection == "Scissors") {
        dialogue.textContent = "It's a tie! Play again.";
    }

    const playerScoreDiv = document.querySelector('.player-score');
    const compScoreDiv = document.querySelector('.comp-score');
    playerScoreDiv.textContent = playerScore;
    compScoreDiv.textContent = computerScore;

    const results = document.querySelector('.results');
    const resetBtn = document.createElement('button');
    resetBtn.textContent = 'Play Again';

    if (playerScore == 5) {
        results.textContent = 'Congrats';
        rpsBtns.removeEventListener('click', rpsEvent);
        document.body.appendChild(resetBtn);
    } else if (computerScore == 5) {
        results.textContent = 'Loser';
        rpsBtns.removeEventListener('click', rpsEvent);
        
        document.body.appendChild(resetBtn);
    }

    resetBtn.addEventListener('click', () => {
        playerScore = 0;
        computerScore = 0;
        playerScoreDiv.textContent = '0';
        compScoreDiv.textContent = '0';
        dialogue.textContent = '';
        const compSelection = document.querySelector('.comp-selection');
        compSelection.textContent = '';

        rpsBtns.addEventListener('click', rpsEvent);
        document.body.removeChild(resetBtn);
    })
}