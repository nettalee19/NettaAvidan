(function(){
    'use strict';
    
    var readlineSync = require('readline-sync');
    
    function numArray(arrayLength){
        let newArray = new Array();
        let i;

        for(i = 0; i <= arrayLength -1; i++){
            newArray[i] = Math.floor((Math.random() * 50)+ 1);       
        }

        let max = newArray[0];
        let min = newArray[0];

        for(i = 0; i <= arrayLength -1; i++){
            if(newArray[i] > max){
                max = newArray[i];
            } 
            else if(newArray[i] < min){
                min = newArray[i];
            }
        }
        //console.log(newArray);
        
        console.log("Max is: ", max);
        console.log("Min is: ",min);

    }
    
    let arrayLength = readlineSync.question("Enter an array's length: ");

    while((isNaN(arrayLength) === true) || (arrayLength <= 0)){
        arrayLength = readlineSync.question("This is not a valid answer. Please enter a positive length: ");
    }
    numArray(arrayLength);
   
    
})();