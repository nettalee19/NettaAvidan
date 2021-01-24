(function(){
    'use strict';
    
    var readlineSync = require('readline-sync'); 
    
    const num = readlineSync.question('Enter a number: ');

    console.log(`The prime numbers between 1 and ${num} are:`);

    for (let i = 1; i <= num; i++) {
        let flag = 0;

        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
              flag = 1;
             break;
        }
    }

    if (i > 1 && flag == 0) {
        console.log(i);
    }
}
    
})();