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

function updateScore () {
    const score = document.querySelector(".score");

    if (humanScore < 5 && computerScore < 5) {
        score.innerText = `Human Score: ${humanScore}, Computer Score: ${computerScore}`;
    } else if (humanScore === 5) {
        score.innerText = `Human wins first to 5!`;
        humanScore = 0;
        computerScore = 0;
    } else if (computerScore === 5) {
        score.innerText = `Computer wins first to 5!`;
        humanScore = 0;
        computerScore = 0;
    }
}

function playRound (event) {
    let computerChoice = getComputerChoice();
    let humanChoice = event.target.innerText;
    // console.log(`Test line ${humanChoice}`);
    const results = document.querySelector(".results");

    if (humanChoice === computerChoice) {
        results.innerText = `Computer: ${computerChoice}. Human: ${humanChoice}. It's a tie!`;
        return;
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        results.innerText = `Computer: ${computerChoice}. Human: ${humanChoice}. Computer wins!`;
        computerScore++;
        updateScore();
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        results.innerText = `Computer: ${computerChoice}. Human: ${humanChoice}. Human wins!`
        humanScore++;
        updateScore();
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        results.innerText = `Computer: ${computerChoice}. Human: ${humanChoice}. Human wins!`
        humanScore++;
        updateScore();
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        results.innerText = `Computer: ${computerChoice}. Human: ${humanChoice}. Computer wins!`;
        computerScore++;
        updateScore();
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        results.innerText = `Computer: ${computerChoice}. Human: ${humanChoice}. Computer wins!`;
        computerScore++;
        updateScore();
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        results.innerText = `Computer: ${computerChoice}. Human: ${humanChoice}. Human wins!`
        humanScore++;
        updateScore();
    }
}

updateScore();
const buttonRock = document.createElement("button");
const buttonPaper = document.createElement("button");
const buttonScissors = document.createElement("button");

buttonRock.innerText = "rock";
buttonPaper.innerText = "paper";
buttonScissors.innerText = "scissors";

const buttons = document.querySelector(".buttons");

buttons.appendChild(buttonRock);
buttons.appendChild(buttonPaper);
buttons.appendChild(buttonScissors);

buttonRock.addEventListener("click", playRound);
buttonPaper.addEventListener("click", playRound);
buttonScissors.addEventListener("click", playRound);