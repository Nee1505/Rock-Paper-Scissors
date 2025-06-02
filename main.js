

function getComputerChoice(){
    let choice = Math.floor(Math.random()*100);
    if(choice<=30){
        return "rock";
    }
    else if(choice<=60){
        return "paper";
    }
    else{
        return "scissors"
    }
}



let humanScore = 0, computerScore = 0;

const resultDiv = document.querySelector("#result");
const scoreDiv = document.querySelector("#score");
const winnerDiv = document.querySelector("#winner");


function playRound(humanChoice, computerChoice){
    if(humanChoice.toLowerCase() == "rock" && computerChoice == "paper"){
        resultDiv.textContent = "You lose! Paper beats Rock.";
        computerScore++;
    }
    else if(humanChoice.toLowerCase() == "rock" && computerChoice == "scissors"){
        resultDiv.textContent = "You Win! Rock beats Scissors";
        humanScore++;
    }
    else if(humanChoice.toLowerCase() == "rock" && computerChoice == "rock"){
        resultDiv.textContent = "Oops! Its a tie";
    }
    else if(humanChoice.toLowerCase() == "paper" && computerChoice == "scissors"){
        resultDiv.textContent = "You lose! Scissors beats Paper";
        computerScore++;
    }
    else if(humanChoice.toLowerCase() == "paper" && computerChoice == "rock"){
        resultDiv.textContent = "You Win! Paper beats Rock";
        humanScore++;
    }
    else if(humanChoice.toLowerCase() == "paper" && computerChoice == "paper"){
        resultDiv.textContent = "Oops! Its a tie";
    }
    else if(humanChoice.toLowerCase() == "scissors" && computerChoice == "paper"){
        resultDiv.textContent = "You Win! Scissors beats Paper";
        humanScore++;
    }
    else if(humanChoice.toLowerCase() == "scissors" && computerChoice == "scissors"){
        resultDiv.textContent = "Oops! Its a tie";
    }
    else if(humanChoice.toLowerCase() == "scissors" && computerChoice == "rock"){
        resultDiv.textContent = "You lose! Rock beats Scissors";
        computerScore++;
    }
    else{
        resultDiv.textContent = "Some Error has occured!";
    }

    scoreDiv.textContent = "Your Score: " + humanScore + " Computer Score: " + computerScore;

    if(humanScore === 5 || computerScore === 5){
        if(humanScore > computerScore){
            winnerDiv.textContent = "You are the winner!";
        }
        else if(computerScore > humanScore){
            winnerDiv.textContent = "Computer is the winner!";
        }
        else{
            winnerDiv.textContent = "It is a tie";
        }
    }
}




const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

rock.addEventListener('click', () => playRound("rock", getComputerChoice()));
paper.addEventListener('click', () => playRound("paper", getComputerChoice()));
scissors.addEventListener('click', () => playRound("scissors", getComputerChoice()));

