let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let rand = Math.random();
    let choice;

    if (rand <= 0.33) {
        choice = "rock"
    
    }else if (rand <= 0.66){
        choice = "paper";

    }else {
        choice = "scissors";
    }
    return choice;
}

function getHumanChoice(){
    choice = window.prompt("rock, paper or scissors");
    return choice;
}

function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();
}
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
