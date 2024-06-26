function getComputerChoice() {
    randNum=Math.random();
    if(randNum<=.33) {
        return "rock";
    }
    else if(randNum<=.66) {
        return "paper";
    }
    else if(randNum<=1) {
        return "scissors";
    }
}

function getHumanChoice() {
    input=prompt("Please enter rock paper or scissors.");
    return input.toLowerCase();
}


function playGame() {
    let humanScore=0;
    let computerScore=0;

    function playRound() {
        let humanSelection=getHumanChoice();
        let computerSelection=getComputerChoice();
        let combinedSelection=humanSelection+computerSelection;

        console.log("You've chosen " + humanSelection.toLowerCase() + ". The computer has chosen " + computerSelection + ".");
    
        if(combinedSelection==="rockrock"||combinedSelection==="paperpaper"||combinedSelection==="scissorsscissors") {
            console.log("\nDraw! Please try again.");
        }

        if(combinedSelection==="rockpaper"|| combinedSelection==="scissorsrock"||combinedSelection==="paperscissors") {
            console.log("\nYou lose! "+computerSelection.at(0).toUpperCase()+computerSelection.slice(1)+" beats "+humanSelection.toLowerCase()+".");
            computerScore++;
        }

        if(combinedSelection==="paperrock"||combinedSelection==="rockscissors"||combinedSelection==="scissorspaper") {
            console.log("\nYou win! "+humanSelection.at(0).toUpperCase()+humanSelection.slice(1).toLowerCase()+" beats "+computerSelection+".");
            humanScore++;
        }
    }

        playRound();
        playRound();
        playRound();
        playRound();
        playRound();

        if(humanScore>computerScore) {
            console.log("You win!  The final score was "+humanScore+" to "+computerScore+".");
        }
        else if(humanScore<computerScore) {
            console.log("You lose!  The final score was "+humanScore+" to "+computerScore+".");
        }
        else {
            console.log("Draw, please play again!  The final score was "+humanScore+" to "+computerScore+".");
        }
}

//getComputerChoice Test
//console.log(getComputerChoice());

//getHumanChoice Test
//console.log(getHumanChoice());

playGame();