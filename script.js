let rounds = 0;
let humanScore = 0;
let computerScore = 0;
let ties = 0;

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

function playRound(humanChoice, computerChoice){

    let winner; 
    //if both same its a tie
    if (humanChoice === computerChoice){
        ties += 1;
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
    }else {
        console.log('Its a tie!');
    }
    rounds += 1;
}
let options = document.querySelector('#options');
let stats = document.querySelector('#stats');
let current = document.querySelector('#current');
let roundsPlayed = document.querySelector('#rounds');
let gameOver = document.querySelector('#gameOver');

options.addEventListener('click', (e) => {
    let target = e.target;
    const computerChoice = getComputerChoice();
    
    switch (target.id) {

        case 'rock':
            //alert("rock");
            playRound('rock', computerChoice);
            break;
        
        case 'paper':
            //alert('paper');
            playRound('paper', computerChoice);
            break;
        
        case 'scissors':
            //alert('scissors');
            playRound('scissors',computerChoice);
            break;
    }
    roundsPlayed.textContent = `Rounds played: ${rounds}`;
    current.textContent = `You chose: ${target.id} || Computer chose: ${computerChoice}`;
    stats.textContent = `Wins: ${humanScore} || Losses: ${computerScore} || Ties: ${ties}`;
    
    if (humanScore === 5 || computerScore === 5){
         humanScore > computerScore ? gameOver.textContent = "GAME OVER YOU WIN" : gameOver.textContent = "GAME OVER YOU LOSE"; 
    } 
});


