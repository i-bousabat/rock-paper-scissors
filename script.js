function getComputerChoice() {
    let rand = Math.random();
    let choice;

    if (rand <= 0.33) {
        choice = "Rock"
    
    }else if (rand <= 0.66){
        choice = "Paper";

    }else {
        choice = "Scissors";
    }

}


