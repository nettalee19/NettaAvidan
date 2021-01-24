(function(){
    'use strict';
    
    var readlineSync = require('readline-sync');
    
    function isPalindrome(newString){
      let newArray = Array.from(newString);
      let n = newArray.length;

      for(let i = 0; i <= n/2; i++){

        if(newArray[i] !== newArray[n-1-i]){
          console.log("Not Palindrome");
          break;
        }

        else{
          console.log("Palindrome");
          break;
        }
      }
    }

    let newString = readlineSync.question("Enter a string: ");
    isPalindrome(newString);
   

    
})();