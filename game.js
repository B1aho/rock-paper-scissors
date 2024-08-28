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
