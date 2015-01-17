// Kyle Wilson
// 1-15-15
// Homework Assignment Duel2 Goal2


// self executing function

(function() {

    console.log("Fight!!!");   // this checks the connection between the js file and html

// player name
    var playerOneName = ["Spiderman", 20, 100];  // this is player ones variable that contains the array of his items such as name, health, and damage
    var playerTwoName = ["Batman", 20, 100];       // this is player twos variable that contains the array of his items such as name, health, and damage


    var round = 0;   // this is the beginning round which will help to counter to ten rounds


    function fight(){     // this is the fight function which contains the loop and math for the game play
        console.log("in the fight function");    // checking the js file is running all the way down the variables to this point

        alert(playerOneName[0] + ":" + playerOneName[2] + " *START* " + playerTwoName[0] + ":" + playerTwoName[2]);  // the beginning alert to the player, it is referencing the arrays above

        for(var i = 0; i < 10; i++){   // this is the for loop which progresses the game along



            // random number formula is - Math.floor(Math.random() * (max - min) + min);

            var minDamage1 = playerOneName[1] * .5;  // this takes the array above containing 20 (damage) and times it by .5 to calculate the minimum damage per player
            var minDamage2 = playerTwoName[1] * .5;  // this takes the array above containing 20 (damage) and times it by .5 to calculate the minimum damage per player
            var f1 = Math.floor(Math.random() * (playerOneName[1] - minDamage1) + minDamage1);  //this calcs the random numbers for player one damage using the array above
            var f2 = Math.floor(Math.random() * (playerTwoName[1] - minDamage2) + minDamage2);  // this calcs the random numbers for player one damage using the array above

            //the Math.random causes a random number to be chosen and Math.floor forces that number the be without a decimal

            //console.log(f1);
            //console.log(f2);    // we want to console these both out to make sure the are looping correctly

            playerOneName[2] -= f1;  // these will minus the number generated above from the overall player health, it has been changed to reference the array at the top
            playerTwoName[2] -= f2;   // these will minus the number generated above from the overall player health, it has been changed to reference the array at the top

            //console.log(playerOneHealth);   health deducted
            //console.log(playerTwoHealth);


            console.log(playerOneName[0] + playerOneName[2] + " ** " + playerTwoName[0] + playerTwoName[2]);  // this is printing to console each rounds results using the array info from above

            var result = winnerCheck();  // the variable result will check to see if we have a winner using the function below
            console.log(result); // printing result to console


            if(result === "no winner") {   // if there is no winner in the round the round is ++ by one and alert is printed
                round++;    // this adds one to the round
                alert(playerOneName[0] + ":" + playerOneName[2] + " *ROUND* " + round + "Over" + playerTwoName[0] + ":" + playerTwoName[2]); // alert to user if no winner on that round

           }else{  // or the result loop will be broken by a winner
                alert(result);
                break;  // breaks the loop

           };


        };


    };


    function winnerCheck(){  // this function checks to see if the players health is zero or below

        console.log("in winnerCheck FN");  // running to console to check if code is reaching this point

        var results = "no winner";  // variable containing what would happen if there is no winner by all being false

        if(playerOneName[2] < 1 && playerTwoName[2] < 1){   // if both players health below zero, has been changed to use array

            results = "You both die"; // then both lose

        }else if(playerOneName[2] < 1){  // if player one health below one than, has been changed to use array

            results = playerTwoName[0] + "Wins!!!";     // player two wins, has been changed to use array

                }else if(playerTwoName[2] < 1){    // if player two health below one, has been changed to use array

            results =  playerOneName[0] + "Wins!!!";    // then player one wins, has been changed to use array
        }

        return results;  // this returns the results of this if else statement to the results area in the right function





    }




    console.log("program starts here");   // initial check on the js file

    // program starts calculating as soon as it hits this bottom
    fight();




})();   //end of js file



