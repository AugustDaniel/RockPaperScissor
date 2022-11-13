function getComputerTest() {
    let x = Math.random() * 100;
    if (x <= 30) {
        return "Rock";
    }
    else if (x <= 60) {
        return "Paper";
    }
    else {return "Scissor";  }   
}

function playRound(playerSelection, computerSelection) {
    playerSelection = prompt("Choose your move:");
    let playerSelect = playerSelection.toUpperCase();
    computerSelection = getComputerTest().toUpperCase();
    
    console.log(computerSelection.toLowerCase());
    
    if (playerSelect == "ROCK"  && computerSelection== "SCISSOR") {
            console.log("You Win " + playerSelect + " beats " + computerSelection);
            return true
    } 
    else if (playerSelect == "PAPER" && computerSelection == "ROCK") {
            console.log("You Win " + playerSelect + " beats " + computerSelection);
            return true
    }  
    else if (playerSelect == "SCISSOR" && computerSelection == "PAPER") {
            console.log("You Win " + playerSelect + " beats " + computerSelection);
            return true
    }   
    else if (playerSelect == computerSelection) {
            console.log("Tie");
            return false
    } 
    else {console.log("You Lose " + computerSelection + " beats " + playerSelect); 
            return false   }
}

function game() {
    let playerScore = 0
    let computerScore = 0
    let i = 0
    
    while (i < 5) {
        let result = playRound();
        if (result === true) {playerScore++};
        if (result === false) {computerScore++};
        i++;
    }
    
    if (playerScore > computerScore) {
        console.log("You win the game")
    }
    else {
        console.log("You lose the game")
    }
}