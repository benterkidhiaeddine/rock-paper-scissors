//declare the choices list
let choices = ["rock","paper","scissors"];

// function for computer choice
function getComputerChoice(){
   
    randomNumber =getRandomInt(3);
    return choices[randomNumber]
}
//function that generates a random int between 0 and max(exclusive)
function getRandomInt(max){
    return Math.floor(Math.random()*max);
}
console.log(getComputerChoice())

//function that plays one round of rock paper scissors
    //variable to store the computer choice


    //variable to store the player choice


