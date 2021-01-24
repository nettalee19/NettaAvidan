(function(){
    'use strict';
    
    var readlineSync = require('readline-sync');
    
    function newStringArray(stringStar){
        let newArray = Array.from(stringStar);

        for(let i = 0; i <= newArray.length; i++){
            if(newArray[i] === ' '){
            newArray[i] = '*';
            }
            
        }

        let newString = newArray.join("");
        console.log(newString);

    }
    
    let stringStar = readlineSync.question("Enter a string: ");
    newStringArray(stringStar);
   
    
})();