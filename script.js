let humanScore = 0;
let computerScore = 0;


function getComputerChoice () {
    let randomNumber = Math.random();
    if (randomNumber < 1/3) {
        return "rock";
    } else if (randomNumber < 2/3) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice () {
    let choice = prompt("Pick Rock, Paper or Scissors","");
    return choice;
}

function playRound (humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log(`Computer: ${computerChoice}. Human: ${humanChoice}. It's a tie!`);
        return;
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        console.log(`Computer: ${computerChoice}. Human: ${humanChoice}. Computer wins!`);
        computerScore++;
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log(`Computer: ${computerChoice}. Human: ${humanChoice}. Human wins!`);
        humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log(`Computer: ${computerChoice}. Human: ${humanChoice}. Human wins!`);
        humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log(`Computer: ${computerChoice}. Human: ${humanChoice}. Computer wins!`);
        computerScore++;
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log(`Computer: ${computerChoice}. Human: ${humanChoice}. Computer wins!`);
        computerScore++;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("Human wins!")
        humanScore++;
    }
}


function playGame () {
    for (let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice().toLowerCase();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }
    console.log(`Human score:${humanScore} Computer score: ${computerScore}`);
}

playGame();