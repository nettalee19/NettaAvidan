(function(){
    'use strict';
    
    var readlineSync = require('readline-sync');
    
    function longestWord(stringUser){
        let newArray = Array.from(stringUser);

        for(let i = 0; i <= newArray.length; i++){
            if((newArray[i] === 'a') || (newArray[i] === 'e') || (newArray[i] === 'i') || (newArray[i] === 'o') || (newArray[i] === 'u') || (newArray[i] === 'y')){
            newArray[i] = newArray[i].toUpperCase();
            }       
        }

        let newString = newArray.join("");
        console.log(newString);

    }
    
    let stringUser = readlineSync.question("Enter a string: ");
    longestWord(stringUser);
   
    
})();