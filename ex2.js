(function(){
    'use strict';
    
    var readlineSync = require('readline-sync');
    
    var num1 = readlineSync.question("Enter first number: "); 
    var num2 = readlineSync.question("Enter second number: ");
    
    var sum = Number(num1) + Number(num2);

    if(sum === 10){
        console.log("makes 10");
    }
    else {
        console.log("nope");
    }



})();