(function(){
    'use strict';
    
    var readlineSync = require('readline-sync'); 
    
    function oddNum(num){
        for(let i=1; i<num; i++){
            if(i % 2 !== 0){
                console.log(i);
            }
        }
    }

    let num = readlineSync.question("Press Enter to show odd number between to 100");

    oddNum(100);
    
})();