(function(){
    'use strict';
    
    var readlineSync = require('readline-sync'); 

    function facCount(num){
        let result = num;
        if(num === 0 || num === 1){
            return 1;
        }
        while(num > 1){
           num--;
           result *= num; 
        }
        console.log(result);
        return result;      
    }


    let num = readlineSync.question("Please enter a positive number: ");


    while((isNaN(num) === true) || (num <= 0)){
        num = readlineSync.question("This is not a positive number. Please enter a positive number: ");
    }

    facCount(num);
    
})();