let bodySelector = document.querySelector("body");
let humanScore=0;
let computerScore=0;
let buttons = document.createElement("div");

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

function selectionButtons() {

    let rButton = document.createElement("button");
    let pButton = document.createElement("button");
    let sButton = document.createElement("button");

    rButton.textContent = "rock";
    pButton.textContent = "paper";
    sButton.textContent = "scissors";

    buttons.appendChild(rButton);
    buttons.appendChild(pButton);
    buttons.appendChild(sButton);

    bodySelector.appendChild(buttons);

    buttons.addEventListener("click", playRound);

}

function playRound(hChoice) {
    let finalResults=document.createElement("p");

    if (humanScore<5 && computerScore<5) {
        let humanSelection=hChoice.target.textContent;
        let computerSelection=getComputerChoice();
        let combinedSelection=humanSelection+computerSelection;
        let results=document.createElement("div");
        let choices=document.createElement("p");
        let wld=document.createElement("p");

        choices.textContent="You've chosen " + humanSelection.toLowerCase() + ". The computer has chosen " + computerSelection + ".";

        if(combinedSelection==="rockrock"||combinedSelection==="paperpaper"||combinedSelection==="scissorsscissors") {
            wld.textContent="\nDraw! Please try again. The score is "+humanScore+" to "+computerScore+".";
        }

        if(combinedSelection==="rockpaper"|| combinedSelection==="scissorsrock"||combinedSelection==="paperscissors") {
            computerScore++;
            wld.textContent="\nYou lose! "+computerSelection.at(0).toUpperCase()+computerSelection.slice(1)+" beats "+humanSelection.toLowerCase()+". The score is "+humanScore+" to "+computerScore+".";
            
        }

        if(combinedSelection==="paperrock"||combinedSelection==="rockscissors"||combinedSelection==="scissorspaper") {
            humanScore++;
            wld.textContent="\nYou win! "+humanSelection.at(0).toUpperCase()+humanSelection.slice(1).toLowerCase()+" beats "+computerSelection+". The score is "+humanScore+" to "+computerScore+".";
            
        }

        results.appendChild(choices);
        results.appendChild(wld);
        bodySelector.appendChild(results);
    }
    else {
        buttons.removeEventListener("click", playRound);
        if(humanScore>computerScore) {
            finalResults.textContent="You win!  The final score was "+humanScore+" to "+computerScore+".";
            bodySelector.appendChild(finalResults);
        }
    
        else if(humanScore<computerScore) {
            finalResults.textContent="You lose!  The final score was "+humanScore+" to "+computerScore+".";
            bodySelector.appendChild(finalResults);
        }
        
        else {
            finalResults.textContent="Draw, please play again!  The final score was "+humanScore+" to "+computerScore+".";
            bodySelector.appendChild(finalResults);
        } 
    }  
}

function playGame() {

    let finalResults=document.createElement("p");

    selectionButtons();

    bodySelector.appendChild(finalResults);

}

playGame();