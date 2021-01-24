(function(){
    'use strict';

    let readlineSync = require('readline-sync');

    let numPeople = readlineSync.question("How many people are you going with? ");
    
    while( numPeople <= 0){
        numPeople = readlineSync.question("Please choose a positive number. How many people are you going with? "); 
    }


    let isKosher = readlineSync.question("Should it be Kosher? (yes/no) ");

    let typeKosher;

    while ( (isKosher !== 'yes') && (isKosher !== 'no')) {
        isKosher = readlineSync.question("This is not a valid answer. Should it be Kosher? (yes/no) "); 
    }

     if( isKosher === 'yes' ){
        isKosher = readlineSync.question("Should it be Kashrut Lemehadrin? (yes/no) ");

        if (isKosher === 'yes'){
            typeKosher = 'Kashrut Lemehadrin';
        }
        else if(isKosher === 'no'){
            typeKosher = 'kosher';  
        }
    }
    else if (isKosher === 'no'){
        typeKosher = 'no kosher';
    }

    
        


    let food = ['hamburger', 'pizza', 'sushi', 'sandwitchs']
    let index = readlineSync.keyInSelect(food, "What kind of food do you want? ");

    let choice;

    if (typeKosher === 'no kosher'){
        switch (food[index]){
            case 'hamburger':
                choice = 'Burger Saloon';
                break;    
            case 'pizza':
                choice = 'Dominos Pizza'; 
                break; 
            case 'sushi':
                choice = 'Foo Sushi';
                break; 
            case 'sandwitchs':
                choice = 'Aroma';  
                break; 
        }

    }

    else if (typeKosher === 'kosher'){
        switch (food[index]){
            case 'hamburger':
                choice = 'bbb';
                break; 
            case 'pizza':
                choice = 'tony vespa';
                break;  
            case 'sushi':
                choice = 'Yapanit';
                break; 
            case 'sandwitchs':
                choice = 'Tal Bagels';
                break;    
        }

    }

    else if (typeKosher === 'Kashrut Lemehadrin'){
        switch (food[index]){
            case 'hamburger':
                choice = 'BP';
                break; 
            case 'pizza':
                choice = 'Tracys Pizza'; 
                break; 
            case 'sushi':
                choice = 'Japanika';
                break; 
            case 'sandwitchs':
                choice = 'Holly Bagel';
                break;    
        }

    }



    console.log('Ok, you are going with ' + numPeople + ' people, It should be ' + typeKosher + ', you picked ' + food[index] + ' to eat. I recommend: ' + choice + ' restaurant');
    

})();



