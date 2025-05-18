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
    let choice = window.prompt("rock, paper or scissors");
    choice = choice.toLowerCase();
    return choice;
}

function playRound(humanChoice, computerChoice){

    let winner; 
    //if both same its a tie
    if (humanChoice === computerChoice){
        console.log("its a tie")
        winner = "tie";
    }

    //not tie
    else{
        if (computerChoice === 'rock' && humanChoice === "paper"){
            winner = "human";
            
        }else if (computerChoice === 'rock' && humanChoice === "scissors"){
            winner = "computer";

        }else if (computerChoice === 'paper' && humanChoice === "rock"){
            winner = "computer";

        }else if (computerChoice === 'paper' && humanChoice === "scissors"){
            winner = "human";

        }else if (computerChoice === 'scissors' && humanChoice === "rock"){
            winner = "human";

        }else if (computerChoice === 'scissors' && humanChoice === "paper"){
            winner = "computer";   
        }
    }
    
    if (winner === "human"){
        humanScore += 1;
        console.log(`computer chose ${computerChoice} and you chose ${humanChoice}, you win!`);
    }else if (winner === "computer"){
        computerScore += 1;
        console.log(`computer chose ${computerChoice} and you chose ${humanChoice}, you lose!`);
    }// if winner === "tie" neither score changes
}



function playGame(){
    for(let i = 1; i <= 5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);

    }
    let ties = 5 - computerScore - humanScore;
    console.log(`comutper has won ${computerScore} time(s) and you have have won ${humanScore} time(s), there were ${ties} tie(s)`)
}

playGame();
