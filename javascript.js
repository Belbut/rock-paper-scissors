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

function game() {

    //initialize 2 variables that stores the points of previous games
    let playerPoints = 0;
    let computerPoints = 0;
    //use a for loop to play 5 rounds.
    for (round = 0; round < 5; round++) {
        //    in each round:
        //    create a variable that get user input using prompt() function
        playerChoice = window.prompt("Pick your weapon carefully");
        //    create a variable that stores the random computerChoice
        computerChoice = getComputerChoice();
        //    Create a  variable to store a dynamic String to log on the end of each round
        logString = "This is round" + (round + 1) + " , Player picked:" + playerChoice + " and computer:" + computerChoice + " result is";

        //    should playRound() using the 2 variables and give the point to the winner
        switch (playRound(playerChoice,computerChoice)) {
            case "draw":
                logString = logString + " a draw";
                break;

            case "player won":
                logString = logString + " a point for the human";
                playerPoints++;
                break;

            case "player loss":
                logString = logString + " a point for the machine";
                computerPoints++;
                break;
        }
        //    log the message of who won;
        console.log(logString)
    }

    //after the 5 round present the winner
    if (playerPoints === computerPoints) {
        console.log("No one own");
    } else if (playerPoints > computerPoints) {
        console.log("HUMAN Won with " + playerPoints + " points");
    } else {
        console.log("MACHINE Won with " + computerPoints + " points");

    }

}


game();