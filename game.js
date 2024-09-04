let humanScore = compScore = 0;
const btnDiv = document.querySelector(".container-btn");
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
    while (humanScore !== 5 && compScore !== 5) {
        playRound(getHumanChoice(), getComputerChoice());
    }
    if (humanScore === 5)
        alert("You win, congratulations!");
    else 
        alert("You lose! Rerun page if you want try again..");
}

// Event handler function that change global score and check it every round
function playRound(event) {
    let hChoice = event.target.id;
    let pcChoice = getComputerChoice();
    if (hChoice === pcChoice) {
        humanScore++;
        compScore++;
        alert(`DRAW: ${hChoice} vs ${pcChoice}. Current score = ${humanScore} : ${compScore}`);
    } else if (hChoice === "PAPER" && pcChoice === "ROCK" || hChoice === "SCISSORS" && pcChoice === "PAPER" ||
      hChoice === "ROCK" && pcChoice === "SCISSORS") {
        humanScore++;
        alert(`You win the round: ${hChoice} beats ${pcChoice}. Current score = ${humanScore} : ${compScore}`);
    }  else {
        compScore++;
        alert(`You lose the round: ${pcChoice} beats ${hChoice}. Current score = ${humanScore} : ${compScore}`);
    } 
    checkScore();
}