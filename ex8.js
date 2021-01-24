(function(){
    'use strict';
    
    var readlineSync = require('readline-sync'); 
    
    function boomSeven(num){
        for(let i=1; i<num; i++){
            
            if((i % 7 === 0) || (i % 10 === 7) || (((i/10) - (Math.floor(i/10))) === 7) ){
                console.log("BOOM");
            }
            else{
                console.log(i); 
            }
        }
    }

    let num = readlineSync.question("For Seven Boom, press Enter ");

    boomSeven(100);
    
})();