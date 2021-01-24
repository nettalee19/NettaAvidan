(function(){
    'use strict';
    
    var readlineSync = require('readline-sync');
    
    function longestWord(stringUser){
        
        let newArray = Array.from(stringUser);
        let longest = new Array(); 
        
        let count = 0, max = 0, index = 0, i, j;

        for(i = 0; i <= newArray.length -1 ; i++){
            if( (/[a-zA-Z]/).test(newArray[i]) == true ){
                count++;
            }
            else{ 
                if(count > max){
                    max = count;
                    index = i-max;
                }
                count = 0;
            }
        }
        if(count>max) {
            max = count;  
            index = (newArray.length)-max; 
        }
        j=0;
        for(i = index ; i < index+max ; i++ ){ 
            longest[j] = newArray[i];
            j++;
        }

        let longestString = longest.join("");
        console.log(longestString);

    }
    
    let stringUser = readlineSync.question("Enter a string: ");
    // while((/[a-zA-Z]/).test(stringUser == true)){
    //     stringUser = readlineSync.question("There are no letters in here. please enter a string with letters: ");
    // }

    longestWord(stringUser);
   
    
})();