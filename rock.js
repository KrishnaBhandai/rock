
let userScore = 0;
let compScore = 0;


let choices = document.querySelectorAll(".choice");

const msg =document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const genCompchoice =() =>{
    const options =["rock","paper","scissors"];
const randIdx = Math.floor(Math.random() * 3);
return options[randIdx];
};

const drawGame =() => {
    msg.innerText = "game was Draw. play again.";
    msg.style.backgroundColor ="#081b31";
};

const showinner = (userWin,userchoice,Compchoice) =>{
    if(userWin){
userScore++;
userScorePara.innerText = userScore;
msg.innerText = "you win! ";
msg.style.backgroundColor ="green";
 } else {
    compScore++;
compScorePara.innerText = compScore;
    msg.innerText = "you lose.";
    msg.style.backgroundColor ="red";
 }
};


const playGame =(userchoice) =>{

// Generate computer choice
const Compchoice = genCompchoice();

if(userchoice === Compchoice){
drawGame();
}
else{
    let userWin = true;
    if(userchoice === "rock"){
       userWin = Compchoice === "paper" ? false : true;

    }
     else if( userchoice === "paper"){
 userWin = Compchoice === "scissors" ? false : true;

       } 
       else{
       userWin =  Compchoice === "rock" ? false : true;
       }
    showinner(userWin,userchoice,Compchoice);
}
};





choices.forEach((choice) =>{
    console.log(choice);

    choice.addEventListener("click", () =>{
        const userchoice = choice.getAttribute("Id");
        playGame(userchoice);

    });
});



/*
const buttons = document.querySelectorAll('button');
const resultDiv = document.getElementById('result');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const playerSelection = button.id;
        const computerSelection = computerPlay();
        const winner = playRound(playerSelection, computerSelection);
        resultDiv.textContent = winner;
    });
});

function computerPlay() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        return `You win! ${playerSelection} beats ${computerSelection}.`;
    } else {
        return `You lose! ${computerSelection} beats ${playerSelection}.`;
    }
}
*/