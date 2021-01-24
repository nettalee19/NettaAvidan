(function(){
    'use strict';

    let readlineSync = require('readline-sync');
    
    function logNum(num){
        let numObj = {
            0: 'zero',
            1: 'one',
            2: 'two',
            3: 'three',
            4: 'four',
            5: 'five',
            6: 'six',
            7: 'seven',
            8: 'eight',
            9: 'nine'
        };
       console.log(numObj[num]);

    }
    let num = readlineSync.question("Enter a number between 0 to 9: ");

    logNum(num);
    
})();