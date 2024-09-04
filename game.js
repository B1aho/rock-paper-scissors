let humanScore = compScore = 0;

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

function getHumanChoice() {
    const btnDiv = document.querySelector(".container-btn");
    btnDiv.addEventListener("click", (event) => {
        let res;
        switch (event.target.id) {
            case "paper":
            res = "PAPER";
            break;

            case "rock":
            res = "ROCK";
            break;

            case "scissors":
            res = "SCISSORS";
            break;

            default: break;
        }
    });
}

function playGame() {
    while (humanScore !== 5 && compScore !== 5) {
        playRound(getHumanChoice(), getComputerChoice());
    }
    if (humanScore === 3)
        alert("You win, congratulations!");
    else 
        alert("You lose! Rerun page if you want try again..");
}

function playRound(hChoice, pcChoice) {
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
}

playGame();