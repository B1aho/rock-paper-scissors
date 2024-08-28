function getComputerChoice() {
    return (Math.floor(Math.random() * 3) + 1);
}

function getHumanChoice() {
    return (window.prompt("Enter the word: Rock, Pape or Scissors. Capitalization not matter!", "rock")).toUpperCase();
}
