// Kyle Wilson
// 1-9-15
// Homework Assignment Duel1 Goal1


// self executing function

(function() {

    console.log("Fight!!!");

// player name
    var playerOneName = "Spiderman";
    var playerTwoName = "Batman";

// player damage
    var player1Damage = 20;
    var player2Damage = 20;

// player health
    var playerOneHealth = 100;
    var playerTwoHealth = 100;

    var round = 0;


    function fight(){
        console.log("in the fight function");

        alert(playerOneName + ":" + playerOneHealth + " *START* " + playerTwoName + ":" + playerTwoHealth);

        for(var i = 0; i < 10; i++){



            // random number formula is - Math.floor(Math.random() * (max - min) + min);

            var minDamage1 = player1Damage * .5;
            var minDamage2 = player2Damage * .5;
            var f1 = Math.floor(Math.random() * (player1Damage - minDamage1) + minDamage1);
            var f2 = Math.floor(Math.random() * (player2Damage - minDamage2) + minDamage2);

            //console.log(f1);
            //console.log(f2);    // we want to console these both out to make sure the are looping correctly

            playerOneHealth -= f1;
            playerTwoHealth -= f2;   // these will minus the number generated above from the overall player health

            //console.log(playerOneHealth);   health deducted
            //console.log(playerTwoHealth);


            console.log(playerOneName + ":" + playerOneHealth + " ** " + playerTwoName + ":" + playerTwoHealth);

            var result = winnerCheck();
            console.log(result);


            if(result === "no winner") {
                round++;    // this adds one to the round
                alert(playerOneName + ":" + playerOneHealth + " *ROUND* " + round + "Over" + playerTwoName + ":" + playerTwoHealth);

           }else{
                alert(result);
                break;

           };


        };


    };


    function winnerCheck(){

        console.log("in winnerCheck FN");

        var results = "no winner";

        if(playerOneHealth < 1 && playerTwoHealth < 1){

            results = "You both die";

        }else if(playerOneHealth < 1){

            results = playerTwoName + "Wins!!!"

                }else if(playerTwoHealth < 1){

            results = playerOneName + "Wins!!!"
        }

        return results;





    }




    console.log("program starts here");

    // program starts calculating as soon as it hits this bottom
    fight();




})();



