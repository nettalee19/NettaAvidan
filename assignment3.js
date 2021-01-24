(function(){
    'use strict';

    let figlet = require('figlet');

    console.log("\nWelcome to the game: ");
    
    console.log(figlet.textSync('Hangman!', {
        horizontalLayout: 'default',
        verticalLayout: 'default',
        width: 80,
        whitespaceBreak: true
    }));
    
    var readlineSync = require('readline-sync');
    
    

    function gameHangman(){

        let words = ['Abolitionist', 'Architecture', 'Scissor', 'Resurrection', 'Intimidating', 'PenNsylVania', 'Relationship', 'Thanksgiving', 'ExpectaTions', 'Consequences']; //array which contains different words
        let chosenWord = words[Math.floor(Math.random()*words.length)]; //the specific chosen word

        let wordArray = Array.from(chosenWord); //an array which turns the string of the chosen word to an array.

        let asteriskArray = []; 
        let j;

        for(j = 0; j <= (wordArray.length - 1); j++){ //this loop turns into an array of asterisks
        
            asteriskArray[j] = '*';
        }

        let numGuesses = 10; //number of guesses

        while(numGuesses > 0){//As long as there are guesses left, enter the loop.
            console.log("\nYou have " + numGuesses + " guesses.")
            console.log("The word is: " + asteriskArray.join(" "));
        
            let guessLetter = readlineSync.question("Please enter a letter. What is your guess? ");

            while( (/[a-zA-Z]/).test(guessLetter) !== true || (guessLetter.length > 1) ){ //only accepts letters as a guess
                guessLetter = readlineSync.question("You didn't enter a letter. What is your guess? "); 
            }

            for(j = 0; j <= (wordArray.length - 1) ; j++){ //the loop reveilies letters that exist in the chosen word.
                if( (wordArray[j] === guessLetter) || (guessLetter === wordArray[j].toLowerCase()) || (guessLetter === wordArray[j].toUpperCase()) ){
                    asteriskArray[j] = wordArray[j]; //if there is a match (both upper and lower case)- the asterisk array is updated with the exposed letter
                } 
            } 

            if( wordArray.includes(guessLetter) != true && wordArray.includes(guessLetter.toLowerCase()) != true && wordArray.includes(guessLetter.toUpperCase()) != true ){
                console.log("\nWrong guess");
                numGuesses -= 1;  //if there is no match (both upper and lower case)- the number of guesses is diducted by 1.
            }
            console.log("\n");

            if( asteriskArray.includes('*') == false){//in the case there are still guesses left but the word is completly exposed and the user won
                console.log("***Good job! You guessed the word ** " + chosenWord + " ** correctly!! :) :) :) :) *** ");  
                break;
            }

        }

        if(numGuesses === 0){ //in the case there are no guesses left and the user lost.
            console.log("You're out of guesses! You lost! :( :( :( Better luck next time! ");
        }
    
    }
    
    gameHangman();

    





    
})();