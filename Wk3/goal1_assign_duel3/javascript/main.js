// Kyle Wilson
// 1-20-15
// Homework Assignment Duel3 Week3


// self executing function

(function() {

    console.log("Fight!!!");   // this checks the connection between the js file and html

    // Defining the DOM pieces

    var fighterOneText = document.querySelector("#kabal").querySelector("p");   // defining fighter one dom spot
    var fighterTwoText = document.querySelector("#kratos").querySelector("p");  // defining fighter two dom spot
    var roundText = document.querySelector("h5");  // putting the round text in the h5 spot on the html page
    var button = document.querySelector("#fight_btn");  // putting the fight button on the html page for functionality


    // Now the click event

    button.addEventListener("click", fight, false);  // creating the mouse click action to run fight function


    // player name

    var fightersTogether = [   //this is an object array with the players name, damage, and health inside
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
    var round = 1;   // this is the beginning round number


    roundText.innerHTML = "Click Fight Button to Start!";  // this is the message printing to h5
    fighterOneText.innerHTML = fightersTogether[0].name + ":  " + fightersTogether[0].health;  // this is setting up the player name and health
    fighterTwoText.innerHTML = fightersTogether[1].name + ":  " + fightersTogether[1].health;  // into the html file



    function fight(){     // this is the fight function which contains the loop and math for the game play
        console.log("in the fight function");    // checking the js file is running all the way down to this point



        fighterOneText.innerHTML = fightersTogether[0].name + ":  " + fightersTogether[0].health; // placing name and health inside html
        fighterTwoText.innerHTML = fightersTogether[1].name + ":  " + fightersTogether[1].health;  // placing name and health inside html


            var f1 = Math.floor(Math.random() * fightersTogether[0].damage + fightersTogether[0].damage * .5);  // this is still randomly calculating play ones damage, changed to use object array above
            var f2 = Math.floor(Math.random() * fightersTogether[1].damage + fightersTogether[1].damage *.5);  // this is still randomly calculating play twos damage, changed to use object array above


            fightersTogether[0].health -= f1;  // these will minus the number generated above from the overall player health
            fightersTogether[1].health -= f2;   // these will minus the number generated above from the overall player health


            console.log(fightersTogether[0].health, fightersTogether[1].health);  // this is printing to console each rounds results using the object from above

            var result = winnerCheck();  // the variable result will check to see if we have a winner using the function below
            console.log(result, "This is the result"); // printing result to console

            roundText.innerHTML = "Round #" + round + " Results!";  // this is sending the updated round number and text to h5 on html page
            round++;  // adding one to counter
            if(result === "no winner") {   // if results equal no winner

                fighterOneText.innerHTML = fightersTogether[0].name + ":  " + fightersTogether[0].health;  // then print updated health onto html page using innerHTML tag
                fighterTwoText.innerHTML = fightersTogether[1].name + ":  " + fightersTogether[1].health; // then print updated health onto html page using innerHTML tag


            }else{  // or

                fighterOneText.innerHTML = result;  // print result variable from below to html page
                fighterTwoText.innerHTML = "";  // no info

                button.removeEventListener("click", fight, false);  // removing the click function after winner has been selected

                document.querySelector(".buttonblue").innerHTML = "DONE!!!";  // change button to say done

            };





    };


    function winnerCheck(){  // this function checks to see if the players health is zero or below

        console.log("we are in winner check");  // checking code this far down


        var result = "no winner";  // variable containing what would happen if there is no winner by all being false

        if(fightersTogether[0].health < 1 && fightersTogether[1].health < 1){   // if both players health below zero, has been changed to use object

            result = "You Both Die - LOSERS!"; // then both lose

        }else if(fightersTogether[0].health < 1){   // if player ones health is below one

            result = fightersTogether[1].name + "Wins!!!";     // player two wins, has been changed to use object

        }else if(fightersTogether[1].health < 1){    // if player two health below one, has been changed to use object

            result =  fightersTogether[0].name + "Wins!!!";    // then player one wins, has been changed to use object



        }

        return result;  // this returns the results of this if else statement to the results area in the right function





    }




    console.log("program starts here");   // initial check on the js file

    // program starts calculating as soon as it hits this bottom
    fight();




})();   //end of js file



