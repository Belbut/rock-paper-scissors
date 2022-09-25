const gameResult = document.querySelector("#game_result");
let playerScore = document.querySelector("#player_score");
let computerScore = document.querySelector("#computer_score");

const container = document.querySelector("#results");
const actionMade = document.createElement("div");
container.append(actionMade);



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
        gameResult.textContent = "Draw";
        return "draw";
    } else {
        if ((lowCasePlayerSelection === "rock" && computerSelection === "scissor") ||
            (lowCasePlayerSelection === "paper" && computerSelection === "rock") ||
            (lowCasePlayerSelection === "scissor" && computerSelection === "paper")
        ) {
            gameResult.textContent = "Player Won";
            playerScore.textContent= parseInt(playerScore.textContent)+1;
            return "player won";
        }
        else {
            gameResult.textContent = "Computer Won";
            computerScore.textContent= parseInt(computerScore.textContent)+1;
            return "player loss"
        }
    }
}



const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const playerWeapon = button.id;
        const computerWeapon = getComputerChoice();
        actionMade.textContent = `You picked ${playerWeapon} and computer used ${computerWeapon}`;
        gameResult.textContent = playRound(playerWeapon, computerWeapon);
    });
});


