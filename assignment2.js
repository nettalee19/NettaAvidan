(function(){
    'use strict';
    
    var readlineSync = require('readline-sync'); 

    console.log('',"*~~~~~~~*****~~~~~~~*",'\n',"   Welcome to WAR",'\n',"*~~~~~~~*****~~~~~~~*");

    let userName = readlineSync.question("Please enter your name: ");
    let amountMoney = 50;

    console.log("Hello " + userName + ", You currently have " + amountMoney + " ILS");

    let amoutBet = readlineSync.question("Please enter your bet from 1 to " + amountMoney + ": ");

    while( 1 > 0 ){ 
        if((amoutBet > amountMoney) || (amoutBet <= 0) || (isNaN(amoutBet) === true)){
            console.log("This is not a valid bet. Bye bye.");
            break;
        }

        let userCard = Math.floor((Math.random() * 12)+ 1);
        let computerCard = Math.floor((Math.random() * 12)+ 1);

        console.log("Your card is: " +userCard+ " and my card is: " +computerCard);

        if(userCard < computerCard){
            amountMoney -= Number(amoutBet);
            console.log("You lost " +amoutBet+ " ILS and now you have " +amountMoney+ " ILS");

            if(amountMoney === 0){
                console.log("You are broke and the game is over. Bye bye.");
                break;
            }
        }
        else if(userCard > computerCard){
            amountMoney += Number(amoutBet);
            console.log("You won " +amoutBet+ " ILS and now you have " +amountMoney+ " ILS");
        }
        else{
            console.log("There is a tie so you didn't either win or loose. You still have a total of: " +amountMoney+ " ILS")
        }

        let choice = readlineSync.question("What would you like to do next? 1. Play another round 2. Leave with my money: ");
            while(choice != 1 && choice != 2){
                choice = readlineSync.question("This is not a valid answer. please choose 1 or 2: ");
            }

            if(choice == 1){
                amoutBet = readlineSync.question("Please enter your bet from 1 to " + amountMoney + ": ");
            }
            else{
                console.log("Ok see you next time! You won in total: "+ amountMoney + " ILS");
                break;
            }

        
    }

    
})();