(function(){
    'use strict';
    
    var readlineSync = require('readline-sync');

    
    let inputArray = [];
    
    let size = readlineSync.question("Enter an Array's size: ");

    while((isNaN(size) === true) || (size <= 0)){
        size = readlineSync.question("This is not a valid size. Please enter a positive size: ");
    }

    for(let j = 0; j <= (size - 1); j++){
        
        inputArray[j] = readlineSync.question("Enter element number " + (Number(j) + 1) + ": " );
        inputArray[j] = Number(inputArray[j]);

        while((isNaN(inputArray[j]) === true)){
            inputArray[j] = readlineSync.question("This is not an integer. Please enter element number " + (Number(j) + 1) + ": " );
            inputArray[j] = Number(inputArray[j]);
        }

    }

    //console.log(inputArray);

    for(let i = 0; i <= ( (size - 1) / 2 ) ; i++){
            
        let temp = inputArray[size-1-i];
        inputArray[size-1-i] = inputArray[i];
        inputArray[i] = temp;  
    }

    console.log(inputArray);
})();