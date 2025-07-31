// In our UI, the player should be able to play the game by clicking on buttons rather than typing their answer in a prompt.
// For now, remove the logic that plays exactly five rounds.

// Create three buttons, one for each selection. Add an event listener to the buttons that call your playRound 
// function with the correct playerSelection every time a button is clicked. (you can keep the console.logs for this step)

// Add a div for displaying results and change all of your console.logs into DOM methods.

// Display the running score, and announce a winner of the game once one player reaches 5 points.

// You will likely have to refactor (rework/rewrite) your original code to make it work for this. That’s OK! Reworking old code is an important part of a programmer’s life.




function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getComputerChoice() {
    let randomNum = getRandomInt(0, 2);
    let computerChoice;

    switch (randomNum) {
        case 0:
            computerChoice = 'rock';
            break;
        case 1:
            computerChoice = 'paper';
            break;
        case 2:
            computerChoice = 'scissor';
            break;
    }
    return computerChoice;
}

function getHumanChoice(playerSelection) {
    return playerSelection;
}


function playRound(computerChoice, humanChoice) {
  
    if (computerChoice == 'rock' && humanChoice == 'scissor') {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
        computerScore++;
    } else if (computerChoice == 'paper' && humanChoice == 'rock') {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
        computerScore++;
    } else if (computerChoice == 'scissor' && humanChoice == 'paper') {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
        computerScore++;
    } else if (computerChoice == humanChoice) {
        console.log(`You both selected ${computerChoice}. The round is a tie!`);
    } else {
        console.log(`You won! ${humanChoice} beats ${computerChoice}.`);
        humanScore++
    }
    return [computerScore, humanScore];
}

function determineWinner(computerScore, humanScore) {
    if (computerScore == humanScore) {
        console.log("Tie match!");
    } else if (computerScore > humanScore) {
        console.log("You lost the match!");
    } else {
        console.log("You won the match!");
    }
}

function setGameState(numberOfRounds) {
    let computerScore = 0;
    let humanScore = 0;
    const rounds = numberOfRounds;
    return {computerScore, humanScore, rounds};
}

function playGame() {
    const gameState = setGameState(5)
}

// for (let i = 0; i < totalRounds; i++) {



// let computerChoice = getComputerChoice();
// let humanChoice = getHumanChoice();
// [computerScore, humanScore] = playRound(computerChoice, humanChoice);
// console.log(`Computer: ${computerScore}`);
// console.log(`Human: ${humanScore}`);
// }

determineWinner(computerScore, humanScore);