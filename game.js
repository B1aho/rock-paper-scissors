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
    while (humanScore !== 0 && compScore !== 0) {
        playRound();
    }
    if (humanScore === 3)
        alert("You win, congratulations!");
    else 
        alert("You lose! Rerun page if you want try again..");
}