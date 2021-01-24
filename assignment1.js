(function(){
    'use strict';

    let readlineSync = require('readline-sync');

    console.log('',"*~~~~~~~~~~~~~~~~~~~~~~*****~~~~~~~~~~~~~~~~~~~~~~*",'\n',"Welcome to the quiz - Are you an Angel or a Demon?",'\n',"*~~~~~~~~~~~~~~~~~~~~~~*****~~~~~~~~~~~~~~~~~~~~~~*");

    let q1 = ['Partying', 'Reading', 'Volunteering', 'Cooking for others']
    let q1Answer = readlineSync.keyInSelect(q1, "What is your favorite activity? ");

    let q2 = ['Only red', 'White cloths', 'All dark', 'Colorful cloths']
    let q2Answer = readlineSync.keyInSelect(q2, "What color do you like wearing? ");

    let q3 = ['A stright A student', 'Helpful to others as much as I could', 'I was the prom queen', 'Trouble maker']
    let q3Answer = readlineSync.keyInSelect(q3, "What kind of a student were you in school? ");

    let q4 = ['A dog', 'none', 'A cat', 'I owen both a cat and a dog']
    let q4Answer= readlineSync.keyInSelect(q4, "Do you have a pet? ");

    let q5 = ['Play video games', 'Workout', 'Cook', 'Sleep']
    let q5Answer = readlineSync.keyInSelect(q5, "What do you do when you're alone? "); //holds 1 2 3 4

    /*I use ketInSelect to ask the user five different questions. Each question has an array called qX (X is the number of the question), 
    which holds the answers. qxAnswer is a varaible which holds the number of the answer the user give.*/ 

    let q_answer = [q1Answer, q2Answer, q3Answer, q4Answer, q5Answer]; //An array which keeps the number of each answer the user gave.
    //console.log(q_answer);

    let scoreArray = [ [1, 2, 4, 3], [2, 4, 1, 3], [3, 4, 2, 1], [3, 1, 2, 4], [2, 3, 4, 1] ]; /* holds the score for each answer from all questions. Every element is dedicated for a question 
    according to their order. each element is also an array, and it holds the score for each answer.*/
    let score = 0;  //holds the sum of the answers' score.
    let AnsNum = q_answer.length; //q_answer's length. Means how many questions were answered.

    for (let q_num = 0 ;  q_num <= (q_answer.length - 1) ; (q_num)++){ //q_num is a variable that runs through the questions' number.

        if((q_answer[q_num]) === -1){  // the user logged "cancel"- in that case q_answer[q_num] = -1, and so in this case score is not 
                                         //updated, and AnsNum is reduced by one
            AnsNum -= 1;
            score += 0 ;
        }
        else{
            score += scoreArray[q_num][q_answer[q_num]];  //score is updated according to the element in scoreArray.
        } 
    }

    let finalScore = score/AnsNum; //the calculation of the score divided by the updated AnsNum. It means- it's enough to answer only one question
    //console.log("Your score is: ", score);
    //console.log(finalScore);

    console.log('\n');
    console.log('',"************",'\n',"Quiz Results",'\n',"************");
    console.log("You scored: ");


    if (score === 0){ //In the case the user only choose 'cancel' to every question- he gets a message saying he didn't answer at all. */
        console.log("You didn't answer at all! Next time please answer :) "); 
    }

    else if (finalScore >= 1 && finalScore < 2){ //According to the location of the value (the if statements) the outcome is displayed.
        console.log("Defently a DEMON");
    }
    
    else if (finalScore >= 2 && finalScore <= 3){
        console.log("You're a normal human being");
    }
    
    else if (finalScore > 3 && finalScore <= 4){
        console.log("A perfect Angel!! :):)");
    }
    console.log('\n');




})();





