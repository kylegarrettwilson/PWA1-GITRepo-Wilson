// Kyle Wilson
// 1-20-15
// Homework Assignment Duel3 Week3


// self executing function

(function() {

    console.log("Fight!!!");   // this checks the connection between the js file and html

    // Defining the DOM pieces

    var fighterOneText = document.querySelector("#kabal").querySelector("p");
    var fighterTwoText = document.querySelector("#kratos").querySelector("p");
    var roundText = document.querySelector("h5");
    var button = document.querySelector("#fight_btn");


    // Now the click event

    button.addEventListener("click", fight, false);


    // player name

    var fightersTogether = [
        {

            name: "Kabal",
            damage: 20,
            health: 100
        },
        {

            name: "Kratos",
            damage: 20,
            health: 100

        }];
    var round = 0;   // this is the beginning round which will help to counter to ten rounds


    roundText.innerHTML = "Click FIGHT BUTTON to Start!";
    fighterOneText.innerHTML = fightersTogether[0].name + ":  " + fightersTogether[0].health;
    fighterTwoText.innerHTML = fightersTogether[1].name + ":  " + fightersTogether[1].health;



    function fight(){     // this is the fight function which contains the loop and math for the game play
        console.log("in the fight function");    // checking the js file is running all the way down the variables to this point



        fighterOneText.innerHTML = fightersTogether[0].name + ":  " + fightersTogether[0].health;
        fighterTwoText.innerHTML = fightersTogether[1].name + ":  " + fightersTogether[1].health;


            var f1 = Math.floor(Math.random() * fightersTogether[0].damage + fightersTogether[0].damage * .5);
            var f2 = Math.floor(Math.random() * fightersTogether[1].damage + fightersTogether[1].damage *.5);


            fightersTogether[0].health -= f1;  // these will minus the number generated above from the overall player health, it has been changed to reference the array at the top
            fightersTogether[1].health -= f2;   // these will minus the number generated above from the overall player health, it has been changed to reference the array at the top


            console.log(fightersTogether[0].health, fightersTogether[1].health);  // this is printing to console each rounds results using the array info from above

            var result = winnerCheck();  // the variable result will check to see if we have a winner using the function below
            console.log(result, "This is the result"); // printing result to console

            roundText.innerHTML = "Round #" + round + " Results!";
            round++;

            if(result === "no winner") {

                fighterOneText.innerHTML = fightersTogether[0].name + ":  " + fightersTogether[0].health;
                fighterTwoText.innerHTML = fightersTogether[1].name + ":  " + fightersTogether[1].health;


           }else{

                fighterOneText.innerHTML = result;
                fighterTwoText.innerHTML = "";

                button.removeEventListener("click", fight, false);

                document.querySelector(".buttonblue").innerHTML = "DONE!!!";

           };





    };


    function winnerCheck(){  // this function checks to see if the players health is zero or below

        console.log("we are in winner check");


        var result = "no winner";  // variable containing what would happen if there is no winner by all being false

        if(fightersTogether[0].health < 1 && fightersTogether[1].health < 1){   // if both players health below zero, has been changed to use array

            result = "You Both Die - LOSERS!"; // then both lose

        }else if(fightersTogether[0].health < 1){

            result = fightersTogether[1].name + "Wins!!!";     // player two wins, has been changed to use array

        }else if(fightersTogether[1].health < 1){    // if player two health below one, has been changed to use array

            result =  fightersTogether[0].name + "Wins!!!";    // then player one wins, has been changed to use array



        }

        return result;  // this returns the results of this if else statement to the results area in the right function





    }




    console.log("program starts here");   // initial check on the js file

    // program starts calculating as soon as it hits this bottom
    fight();




})();   //end of js file



