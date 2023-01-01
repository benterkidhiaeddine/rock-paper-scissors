//declare the choices list
let choices = ["rock","paper","scissors"];

//function that generates a random int between 0 and max(exclusive)
function getRandomInt(max){
    return Math.floor(Math.random()*max);
}

// function for computer choice
function getComputerChoice(){
   
    randomNumber =getRandomInt(3);
    return choices[randomNumber]
}



//function that plays one round of rock paper scissors
function playRound(playerChoice,computerChoice){
    if ((playerChoice.toLowerCase() ==="rock") && (computerChoice==="paper")){
        return "Computer wins!"+computerChoice+" beats "+playerChoice;

    }
    else if ((playerChoice.toLowerCase() ==="paper") && (computerChoice==="rock")){
        return "Player wins!";

    }
    else if ((playerChoice.toLowerCase() ==="rock") && (computerChoice==="scissors")){
        return "Player wins!"+playerChoice+" beats "+computerChoice;

    }
    else if ((playerChoice.toLowerCase() ==="scissors") && (computerChoice==="paper")){
        return "Player wins!"+playerChoice+" beats "+computerChoice;

    }
    else if ((playerChoice.toLowerCase() ==="scissors") && (computerChoice==="rock")){
        return "Computer wins!"+computerChoice+" beats "+playerChoice;

    }
    else if ((playerChoice.toLowerCase() ==="paper") && (computerChoice==="scissors")){
        return "Computer wins!"+computerChoice+" beats "+playerChoice;

    }
    else if ((playerChoice.toLowerCase() ==="paper") && (computerChoice==="paper")){
        return "It's a draw!";

    }
    else if ((playerChoice.toLowerCase() ==="rock") && (computerChoice==="rock")){
        return "It's a draw!";

    }
    else if ((playerChoice.toLowerCase() ==="scissors") && (computerChoice==="scissors")){
        return "It's a draw!";

    }

    return

}

console.log(playRound("rock",getComputerChoice()));


