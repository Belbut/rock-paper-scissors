function getComputerChoice() {
    //the const randomCode is a random number between 1 and 3;
    const randomCode = Math.floor(Math.random() * 3 + 1);

    switch (randomCode) {
        case 1:
            return "rock"
        case 2:
            return "paper";
        case 3:
            return "scissor";
        default:
            console.error("randomCode is not returning has expected");
            break;
    }
}

function playRound(playerSelection, computerSelection) {
    const lowCasePlayerSelection = playerSelection.toLowerCase();

    if (lowCasePlayerSelection === computerSelection) {
        return "draw";
    } else {
        if ((lowCasePlayerSelection === "rock" && computerSelection === "scissor") ||
            (lowCasePlayerSelection === "paper" && computerSelection === "rock") ||
            (lowCasePlayerSelection === "scissor" && computerSelection === "paper")
        ) {
            return "player won";
        }
        else return "player loss"
    }
}

