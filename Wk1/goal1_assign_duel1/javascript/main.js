// Kyle Wilson
// 1-9-15
// Homework Assignment Duel1 Goal1


// self executing function

(function() {

    console.log("Fight!!!");   // this checks the connection between the js file and html

// player name
    var playerOneName = "Spiderman";  // this is the first variable containing name one
    var playerTwoName = "Batman";       // this is the second variable containing name two

// player damage
    var player1Damage = 20;     // this is the damage player one conflicts
    var player2Damage = 20;         // this is the damage player two conflicts

// player health
    var playerOneHealth = 100;     // this is the health that player one starts with
    var playerTwoHealth = 100;          // this is the health player two starts with

    var round = 0;   // this is the beginning round which will help to counter to ten rounds


    function fight(){     // this is the fight function which contains the loop and math for the game play
        console.log("in the fight function");    // checking the js file is running all the way down the variables to this point

        alert(playerOneName + ":" + playerOneHealth + " *START* " + playerTwoName + ":" + playerTwoHealth);  // the beginning alert to the player

        for(var i = 0; i < 10; i++){   // this is the for loop which progresses the game along



            // random number formula is - Math.floor(Math.random() * (max - min) + min);

            var minDamage1 = player1Damage * .5;  // this takes the var above containing 20 and times it by .5 to calculate the minimum damage per player
            var minDamage2 = player2Damage * .5;  // this takes the var above containing 20 and times it by .5 to calculate the minimum damage per player
            var f1 = Math.floor(Math.random() * (player1Damage - minDamage1) + minDamage1);  //this calcs the random numbers for player one damage
            var f2 = Math.floor(Math.random() * (player2Damage - minDamage2) + minDamage2);  // this calcs the random numbers for player one damage

            //the Math.random causes a random number to be chosen and Math.floor forces that number the be without a decimal

            //console.log(f1);
            //console.log(f2);    // we want to console these both out to make sure the are looping correctly

            playerOneHealth -= f1;  // these will minus the number generated above from the overall player health
            playerTwoHealth -= f2;   // these will minus the number generated above from the overall player health

            //console.log(playerOneHealth);   health deducted
            //console.log(playerTwoHealth);


            console.log(playerOneName + ":" + playerOneHealth + " ** " + playerTwoName + ":" + playerTwoHealth);  // this is printing to console each rounds results

            var result = winnerCheck();  // the variable result will check to see if we have a winner using the function below
            console.log(result); // printing result to console


            if(result === "no winner") {   // if there is no winner in the round the round is ++ by one and alert is printed
                round++;    // this adds one to the round
                alert(playerOneName + ":" + playerOneHealth + " *ROUND* " + round + "Over" + playerTwoName + ":" + playerTwoHealth);

           }else{  // or the result loop will be broken by a winner
                alert(result);
                break;

           };


        };


    };


    function winnerCheck(){  // this function checks to see if the players health is zero or below

        console.log("in winnerCheck FN");  // running to console to check if code is reaching this point

        var results = "no winner";  // variable containing what would happen if there is no winner by all being false

        if(playerOneHealth < 1 && playerTwoHealth < 1){   // if both players health below zero

            results = "You both die"; // then both lose

        }else if(playerOneHealth < 1){  // if player one health below one than

            results = playerTwoName + "Wins!!!";     // player two wins

                }else if(playerTwoHealth < 1){    // if player two health below one

            results =  playerOneName + "Wins!!!";    // then player one wins
        }

        return results;  // this returns the results of this if else statement to the results area in the right function





    }




    console.log("program starts here");   // initial check on the js file

    // program starts calculating as soon as it hits this bottom
    fight();




})();   //end of js file



