

const btnScissors=document.querySelector('.scissors');
const btnRock=document.querySelector('.rock');
const btnPaper=document.querySelector('.paper');


let mainArray=["ERROR",0,0];
console.log(mainArray)

let computerPoints=mainArray[1];
let userPoints=mainArray[2];
let messageToDisplay=mainArray[0];

console.log(messageToDisplay,computerPoints,userPoints)

/*
function rpsOnButtonClick(computerChoice,choice,computerPoints,userPoints){

        mainArray=whoWins(computerChoice,choice,computerPoints,userPoints);
        computerPoints=mainArray[1];
        userPoints=mainArray[2];
        messageToDisplay=mainArray[0];
        console.log(mainArray);

        return mainArray
}

possible function to not force me to rewrite the same thing multiple times on the .onclick function
but it's not working correctly soo im not using it for now

*/

const resultOutput = document.querySelector("#resultado");
const results=document.createElement("h1");
results.textContent= "START"
resultOutput.appendChild(results);


const score=document.createElement("h1");
score.textContent="The score is "+userPoints+ " to " + computerPoints+ ".";
resultOutput.appendChild(score);



function rpsResults(messageToDisplay,computerPoints,userPoints){

    results.textContent= messageToDisplay;
    score.textContent="The score is "+userPoints+ " to " + computerPoints+ ".";



}

btnScissors.onclick = () => {
    
    btnPaper.classList.remove("highlightUserPick","highlightComputerPick");
    btnRock.classList.remove("highlightUserPick","highlightComputerPick");
    btnScissors.classList.remove("highlightComputerPick");

    mainArray=whoWins(computerChoice,"scissors",computerPoints,userPoints);
    computerPoints=mainArray[1];
    userPoints=mainArray[2];
    messageToDisplay=mainArray[0];
    

    rpsResults(messageToDisplay,computerPoints,userPoints);

    console.log(mainArray);
  
    btnScissors.classList.toggle("highlightUserPick")
}


btnRock.onclick = () => {
    btnPaper.classList.remove("highlightUserPick","highlightComputerPick");
    btnRock.classList.remove("highlightComputerPick");
    btnScissors.classList.remove("highlightUserPick","highlightComputerPick");

    mainArray=whoWins(computerChoice,"rock",computerPoints,userPoints);
    computerPoints=mainArray[1];
    userPoints=mainArray[2];
    messageToDisplay=mainArray[0];

    rpsResults(messageToDisplay,computerPoints,userPoints);

    console.log(mainArray);


    btnRock.classList.toggle("highlightUserPick");
}


btnPaper.onclick = () => {
    btnPaper.classList.remove("highlightComputerPick");
    btnRock.classList.remove("highlightUserPick","highlightComputerPick");
    btnScissors.classList.remove("highlightUserPick","highlightComputerPick");

    mainArray=whoWins(computerChoice,"paper",computerPoints,userPoints);
    computerPoints=mainArray[1];
    userPoints=mainArray[2];
    messageToDisplay=mainArray[0];

    rpsResults(messageToDisplay,computerPoints,userPoints);

    console.log(mainArray);

    btnPaper.classList.toggle("highlightUserPick")
    
}





console.log(computerPoints,userPoints)
if (computerPoints==5||userPoints==5){
    btnPaper.disabled=false;
    btnScissors.disabled=false;
    btnRock.disabled=false;
};



function computerChoice(n) {
    if (n==3){
        btnRock.classList.toggle("highlightComputerPick");
        return("rock");

    } else if(n==2) {
        btnPaper.classList.toggle("highlightComputerPick")
        return("paper");

    } else {
        btnScissors.classList.toggle("highlightComputerPick");
        return("scissors");
    }
}

function whoWins(computerChoice,userChoice,computerPoints,userPoints){

    n=Math.round(Math.random()*3+0.5);

    if (computerChoice(n)==userChoice){

        return ["You both picked "+computerChoice(n)+"! You tied :\(",computerPoints,userPoints]
    } else {
        
        console.log("You picked "+userChoice)
        console.log("The Computer picked "+computerChoice(n))
    }

    switch(computerChoice(n)){
        
        case ("rock"):
            if(userChoice=="scissors"){
                return["Rock crushes Scissors. The computer won!",++computerPoints,userPoints];
            }else{
                return["Paper covers Rock. You won!",computerPoints,++userPoints];
            }
            break;
        
        case ("scissors"):
            if (userChoice=="rock"){
                return["Rock crushes Scissors. You won!",computerPoints,++userPoints];

            }else{
                return["Scissors cuts Paper. The computer won!",++computerPoints,userPoints];
            }
            break;
         
        case ("paper"):
            if (userChoice=="scissors"){
                return["Scissors cuts Paper. You won!",computerPoints,++userPoints];

            }else{
                return["Paper covers Rock. The computer won!",++computerPoints,userPoints];
            }
            break;
    }
}

//console.log(whoWins(computerChoice,userChoice))


