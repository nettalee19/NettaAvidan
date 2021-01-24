(function(){
    'use strict';

    var readlineSync = require('readline-sync');

    var username = readlineSync.question("What is your name?");
    
    console.log("Hello",username,"!");
    
})();
