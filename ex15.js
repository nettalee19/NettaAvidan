(function(){
    'use strict';
    
    var readlineSync = require('readline-sync');

    
    let inputArray1 = [];
    let inputArray2 = [];

    let i, j;
    
    let sizeArray1 = readlineSync.question("Enter first Array's size: ");

    while((isNaN(sizeArray1) === true) || (sizeArray1 <= 0)){
        sizeArray1 = readlineSync.question("This is not a valid size. Please enter a positive size: ");
    }

    for(j = 0; j <= (sizeArray1 - 1); j++){
        inputArray1[j] = readlineSync.question("Enter element number " + (Number(j) + 1) + " for first array: " );
    }
    


    let sizeArray2 = readlineSync.question("Enter second Array's size: ");

    while((isNaN(sizeArray2) === true) || (sizeArray2 <= 0)){
        sizeArray2 = readlineSync.question("This is not a valid size. Please enter a positive size: ");
    }

    for(j = 0; j <= (sizeArray2 - 1); j++){
        inputArray2[j] = readlineSync.question("Enter element number " + (Number(j) + 1) + " for second array: " );
    }

    //console.log(inputArray1);
    //console.log(inputArray2);

    let combinedArray = [];
    
    for (i = 0; i <= inputArray1.length -1 ; i++){
        combinedArray[i] = inputArray1[i];
    }

    for (i = 0; i <= inputArray2.length -1 ;inputArray1.length++, i++){
        combinedArray[inputArray1.length] = inputArray2[i];
    }

    console.log(combinedArray);
   
})();