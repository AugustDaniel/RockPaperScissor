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

function game(playerselection, computerselection) {
    computerselection = getComputerTest();
    x = playerselection
    
}
