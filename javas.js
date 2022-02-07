rps=prompt("Choose Rock, Paper or Scissors");
userChoice=rps.toLowerCase();


function computerChoice(n) {
    if (n==3){

        return("rock");

    } else if(n==2) {

        return("paper");

    } else {

        return("scissors");
    }
}

function whoWins(computerChoice,userChoice){

    n=Math.round(Math.random()*3+0.5);

    if (computerChoice(n)==userChoice){

        return ("You both picked "+computerChoice(n)+"! You tied :\(")
    } else {
        
        console.log("You picked "+userChoice)
        console.log("The Computer picked "+computerChoice(n))
    }

    switch(computerChoice(n)){
        
        case ("rock"):
            if(userChoice=="scissors"){
                return("Rock crushes Scissors. The computer won!");
            }else{
                return("Paper covers Rock. You won!");
            }
            break;
        
        case ("scissors"):
            if (userChoice=="rock"){
                return("Rock crushes Scissors. You won!");

            }else{
                return("Scissors cuts Paper. The computer won!");
            }
            break;
         
        case ("paper"):
            if (userChoice=="scissors"){
                return("Scissors cuts Paper. You won!");

            }else{
                return("Paper covers Rock. The computer won!");
            }
            break;
    }
}

console.log(whoWins(computerChoice,userChoice))