

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




function getUserChoice(){
    let userChoice = prompt("Enter your choice");
    return userChoice;
}

let humanScore = 0, computerScore = 0;


function playRound(humanChoice, computerChoice){
    if(humanChoice.toLowerCase() == "rock" && computerChoice == "paper"){
        console.log("You lose! Paper beats Rock");
        computerScore++;
    }
    else if(humanChoice.toLowerCase() == "rock" && computerChoice == "scissors"){
        console.log("You Win! Rock beats Scissors");
        humanScore++;
    }
    else if(humanChoice.toLowerCase() == "rock" && computerChoice == "rock"){
        console.log("Oops! Its a tie");
    }
    else if(humanChoice.toLowerCase() == "paper" && computerChoice == "scissors"){
        console.log("You lose! Scissors beats Paper");
        computerScore++;
    }
    else if(humanChoice.toLowerCase() == "paper" && computerChoice == "rock"){
        console.log("You Win! Paper beats Rock");
        humanScore++;
    }
    else if(humanChoice.toLowerCase() == "paper" && computerChoice == "paper"){
        console.log("Oops! Its a tie");
    }
    else if(humanChoice.toLowerCase() == "scissors" && computerChoice == "paper"){
        console.log("You Win! Scissors beats Paper");
        humanScore++;
    }
    else if(humanChoice.toLowerCase() == "scissors" && computerChoice == "scissors"){
        console.log("Oops! Its a tie");
    }
    else if(humanChoice.toLowerCase() == "scissors" && computerChoice == "rock"){
        console.log("You lose! Rock beats Scissors");
        computerScore++;
    }
    else{
        console.log("Some Error has occured!");
    }
}


function playGame(){
    let humanChoice;
    let computerChoice;
    
    for(let i=1; i<=5; i++){
        humanChoice = getUserChoice();
        computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }

    console.log("Human Score : "+ humanScore +"\n Computer Score : " + computerScore);
    if(humanScore>computerScore){
        console.log("You are the winner!")
    }
    else if(computerScore > humanScore){
        console.log("Computer is the winner!")
    }
    else{
        console.log("It is a tie");
    }
}

playGame();