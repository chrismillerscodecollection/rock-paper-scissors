function getRandomInt(min, max) {
    min = Math.ceil(min);
    max - Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let computerRandomNum = getRandomInt(0, 2);
let getComputerChoice;
switch (computerRandomNum) {
    case 0:
        getComputerChoice = 'rock';
        break;
    case 1:
        getComputerChoice = 'paper';
        break;
    case 2:
        getComputerChoice = 'scissors';
        break;
}
console.log(getComputerChoice);

let getUserChoice = prompt("Type your choice (rock, paper, or scissors)");
console.log(getUserChoice);