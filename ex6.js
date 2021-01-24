(function(){
    'use strict';
    
    var readlineSync = require('readline-sync'); 
    
    function pleaseChoose(num){
        while(num < 10){
            let num = readlineSync.question("please choose a number LARGER than 10: "); 
            
           // if(num > 10){
           //     console.log("thank you :)");  
           //     break;
           // }

        }

        if(num > 10){
            console.log("thank you");  
        }
           
    }

    let num = readlineSync.question("Please choose a number larger than 10: ");

    pleaseChoose(num);
    
})();