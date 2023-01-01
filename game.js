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
//function to help with user input is correct
function isValid(input){
    input = input.toLowerCase();
    return input=="rock" || input == "paper" || input=="scissors" ?true:false;
}



//the game function
function game(){
    let playerWins = 0 ;
    let computerWins =0 ;
    const numberOfRounds = 5;
    while (numberOfRounds > 0) {
        let playerChoice=prompt("Rock,paper or scissors?");
        //to confirm user enters a valid value
        while (!isValid(playerChoice)){
            playerChoice=prompt("Pleas choose Rock,paper or scissors")
        }
        
        computerChoice=getComputerChoice();
        //player wins
        if(playRound(playerChoice,computerChoice)==="win"){
            console.log(`the player wins,${playerChoice} beats ${computerChoice}`);
            playerWins ++;
        }
        //computer wins
        else if ( playRound(playerChoice,computerChoice)=="lose"){
            console.log(`the computer wins,${computerChoice} beats ${playerChoice}`);
            computerWins ++;
        }
        //draw
        else if (playRound(playerChoice,computerChoice)=="draw"){
            console.log("Nobody wins it's a draw");
        }
        //when one of the two reach 3wins
        if (computerWins === 3 || playerWins ===3)
        {
            console.log(computerWins<playerWins?"The player beat the computer at the game ,Congratulations !":"The Computer beat the the player at the game ,better luck next time");
            break;
        }
        



        
        
    

        
    
}

}
game();