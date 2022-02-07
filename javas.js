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
};

function whoWins(computerChoice,userChoice){

    n=Math.round(Math.random()*3+0.5);

    if (computerChoice(n)==userChoice){

        return ("You both picked "+computerChoice(n)+"! You tied :\(")
    } else {
        
        console.log("The Computer picked "+computerChoice(n))
        console.log("You picked "+userChoice)
    }

    switch(computerChoice(n),userChoice){
        

        case (computerChoice=="rock",userChoice=="scissors"):
            return("Rock crushes Scissors. The computer won!");
            break;

        case (computerChoice=="rock",userChoice=="paper"):
            return("Paper covers Rock. You won!");
            break;
    
        case (computerChoice=="scissors",userChoice=="rock"):
            return("Rock crushes Scissors. You won!");
            break;
  
        case (computerChoice=="scissors",userChoice=="paper"):
            return("Scissors cuts Paper. The computer won!");
            break;


        case (computerChoice=="paper",userChoice=="scissors"):
            return("Scissors cuts Paper. You won!");
            break;

        case (computerChoice=="paper",userChoice=="rock"):
            return("Paper covers Rock. The computer won!");
            break;

    }
}

console.log(whoWins(computerChoice,userChoice))