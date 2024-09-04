let humanScore = compScore = 0;
const btnDiv = document.querySelector(".container-btn");
const scoreDiv = document.querySelector(".score");
// To avoid multiple event listeners for every button, I choose event delegation approach
btnDiv.addEventListener("click", playRound);


function getComputerChoice() {
    let res = (Math.floor(Math.random() * 3) + 1);
    switch (res) {
        case 1: 
        res = "ROCK";
        break;

        case 2: 
        res = "PAPER";
        break;

        case 3:
        res = "SCISSORS";
        break;

        default: break;
    }
    return res;
}

function checkScore() {
    if (humanScore === 5 || compScore === 5) {
        if (humanScore === 5 && compScore === 5)
            scoreDiv.textContent = "Draw. No winners - no losers!";
        else if (humanScore === 5)
            scoreDiv.textContent = "You win, congratulations!";
        else if (compScore === 5)
            scoreDiv.textContent = "You lose! Computer win..";
        reloadPage();
    }
}

// Event handler function that change global score and check it every round
function playRound(event) {
    let hChoice = event.target.id;
    let pcChoice = getComputerChoice();
    if (hChoice === pcChoice) {
        humanScore++;
        compScore++;
        scoreDiv.textContent = `DRAW: ${hChoice} vs ${pcChoice}. Current score = ${humanScore} : ${compScore}`;
    } else if (hChoice === "PAPER" && pcChoice === "ROCK" || hChoice === "SCISSORS" && pcChoice === "PAPER" ||
      hChoice === "ROCK" && pcChoice === "SCISSORS") {
        humanScore++;
        scoreDiv.textContent = 
            `You win the round: ${hChoice} beats ${pcChoice}. Current score = ${humanScore} : ${compScore}`;
    }  else {
        compScore++;
        scoreDiv.textContent = 
        `You lose the round: ${pcChoice} beats ${hChoice}. Current score = ${humanScore} : ${compScore}`;
    } 
    checkScore();
}

function reloadPage() {
    scoreDiv.textContent += "Page will be refreshed for a new game in 5 seconds!";
    setTimeout(function() {document.location.reload();}, 5000);
}