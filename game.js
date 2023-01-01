

//declare the choices list
let choices = ["rock","paper","scissors"];

//

//function that generates a random int between 0 and max(exclusive)
function getRandomInt(max){
    return Math.floor(Math.random()*max);
}

// function for computer choice
function getComputerChoice(){
   
    randomNumber =getRandomInt(3);
    return choices[randomNumber]
}



//function that plays one round of rock paper scissors if player wins return win otherwise return false , if it's a draw return draw
function playRound(playerChoice,computerChoice){
    if ((playerChoice ==="rock") && (computerChoice==="paper")){
        return "lose";

    }
    else if ((playerChoice==="paper") && (computerChoice==="rock")){
        return "win";

    }
    else if ((playerChoice ==="rock") && (computerChoice==="scissors")){
        return "win";

    }
    else if ((playerChoice ==="scissors") && (computerChoice==="paper")){
        return "win";

    }
    else if ((playerChoice==="scissors") && (computerChoice==="rock")){
        return "lose";

    }
    else if ((playerChoice==="paper") && (computerChoice==="scissors")){
        return "lose";

    }
    else if ((playerChoice==="paper") && (computerChoice==="paper")){
        return "draw";

    }
    else if ((playerChoice ==="rock") && (computerChoice==="rock")){
        return "draw";

    }
    else if ((playerChoice ==="scissors") && (computerChoice==="scissors")){
        return "draw";

    }

    return

}

//define the buttons
let rockButton = document.getElementById('rock');
let paperButton = document.getElementById('paper');
let scissorsButton = document.getElementById('scissors');

//define the result text so we can modify it
let resultRoundPara = document.getElementById('round-result');

//define the scores

let computerTracker = document.getElementById('player-score');
let playerTracker = document.getElementById('computer-score');

//define final result 

let finalResult = document.getElementById('result-game');

//the game function

let playerWins = 0 ;
let computerWins =0 ;
const numberOfRounds = 5;

function game(choice){
    if(playerWins == numberOfRounds || computerWins ==numberOfRounds){
        finalResult.innerText=playerWins<computerWins?"the computer win the match":"the player wins the match";

        

    }
    else{
    let computerChoice = getComputerChoice();
    let playerChoice=choice;
    if (playRound(playerChoice,computerChoice)=="win"){
        playerWins ++;
        resultRoundPara.innerText=`The player wins`;
        playerTracker.innerText=playerWins;
    }
    else if (playRound(playerChoice,computerChoice)=="lose"){
        computerWins ++;
        resultRoundPara.innerText=`The Computer wins`;
        computerTracker.innerText=computerWins;
    }
    else if (playRound(playerChoice,computerChoice)=="draw"){
        playerWins ++;
        resultRoundPara.innerText=`it's a draw`;
        
    }
    if(playerWins == numberOfRounds || computerWins ==numberOfRounds){
        finalResult.innerText=playerWins<computerWins?"the computer win the match":"the player wins the match";

        

    }


    }
    
}


//game start with click on the buttons
let resetButton=document.selectElementById('reset');

function reset(){
    playerWins=0;
    computerWins=0;
    computerTracker.innerHTML="0";
    playerTracker.innerText="0";
    resultRoundPara.innerText="";
}


