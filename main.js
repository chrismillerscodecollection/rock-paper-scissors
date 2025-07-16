function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getComputerChoice() {
    let computerRandomNum = getRandomInt(0, 2);
    let computerChoice;

    switch (computerRandomNum) {
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

function getHumanChoice() {
    let notValidChoice = true;
    let humanChoice;

    while (notValidChoice) {
        humanChoice = prompt("Type your choice (rock, paper, or scissor)");
        humanChoice = humanChoice.toLowerCase();

        if (humanChoice == 'rock' || humanChoice == 'paper' || humanChoice == 'scissor') {
            notValidChoice = false;
        } else if (humanChoice == '') {
            console.log("You didn't enter a value. Try again.");
        }
    }
    return humanChoice
}

let computerScore = 0;
let humanScore = 0;

function playRound(computerChoice, humanChoice) {
  
    if (computerChoice == 'rock' && humanChoice == 'scissor') {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    } else if (computerChoice == 'paper' && humanChoice == 'rock') {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    } else if (computerChoice == 'scissor' && humanChoice == 'paper') {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    } else if (computerChoice == humanChoice) {
        console.log("You tied! Try again.");
    } else {
        console.log(`You won! ${humanChoice} beats ${computerChoice}`);
        humanScore++
    }
    return [computerScore, humanScore];
}

const totalRounds = 3;

for (let i = 0; i < totalRounds; i++) {
    computerChoice = getComputerChoice();
    humanChoice = getHumanChoice();
    [computerScore, humanScore] = playRound(computerChoice, humanChoice);
    console.log(`Computer: ${computerScore}`);
    console.log(`Human: ${humanScore}`);
}