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
    let res = 0;
    while (res !== "ROCK" && res !== "PAPER" && res !== "SCISSORS") {
        res = window.prompt("Enter the word: Rock, Pape or Scissors. Capitalization not matter!", "rock").toUpperCase();
    }
    return res;
}

function playGame() {
    while (humanScore !== 3 && compScore !== 3) {
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
        alert(`DRAW: Your - ${hChoice} vs Comp - ${pcChoice}. Score is ${humanScore}:${pcChoice}`);
    } else if (hChoice === "PAPER" && pcChoice === "ROCK" || hChoice === "SCISSORS" && pcChoice === "PAPER" ||
      hChoice === "ROCK" && pcChoice === "SCISSORS") {
        humanScore++;
        alert(`You win the round: Your - ${hChoice} vs Comp - ${pcChoice}. Score is ${humanScore} : ${compScore}`);
    }  else {
        compScore++;
        alert(`You lose the round: Your - ${hChoice} vs Comp - ${pcChoice}. Score is ${humanScore} : ${compScore}`);
    } 
}

playGame();