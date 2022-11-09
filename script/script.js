function getComputerTest() {
    let x = Math.random() * 100;
    if (x <= 30) {
        console.log("Rock")
    }
    else if (x <= 60) {
        console.log("Paper")
    }
    else console.log("Scissor")     
}

function game(playerselection, computerselection = getComputerTest()) {
    if (playerselection = "rock" && computerselection == "Scissor") {
            console.log("You Win");
    } else if (playerselection = "paper" && computerselection == "Rock") {
            console.log("You Win");
    }  else if (playerselection = "scissor" && computerselection == "Paper") {
            console.log("You Win");
    } else console.log("You Lose");