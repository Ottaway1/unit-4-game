// <!--p/ you will be given a random number at begining of game -->



// variables to define: random number, value of each crystal, wins, losses, user total score

// Math.floor(Math.random() * 100) + 1; // returns a random integer from 1 to 100;

// 
// <!--p/ there are 4 crystals below. by clicking on a crystal you will add a specific amount of points to your total score. -->
// buttons for each crystal//
// <!--p/ you will win the game by matching your total score to the random number, you lose the game if your total score goes above the random number. -->

// <!--p/ the value of each crystal is hidden from you till you click on it. -->

// <!--p/ each time the game starts, the game will change the values of each crystal. -->

// <!-- random number display      &&    wins and losses counter -->

// <!-- four crystal buttons -->

// <!-- p/total score -->

// <!-- total score display -->

$(document).ready(function () {
    // all custom jQuery will go here


    var diamondOutput = Math.floor((Math.random() * 12) + 1);
    var rudyOutput = Math.floor((Math.random() * 12) + 1);
    var topazOutput = Math.floor((Math.random() * 12) + 1);
    var emeraldOutput = Math.floor((Math.random() * 12) + 1);


    var winsOutput = 0;
    var lossesOutput = 0;
    var userScore = {};

    
    var randomNumber = Math.floor((Math.random() * 120) + 19);
    
   
   
    $(document).ready( function () {
        $("#random-number").append(randomNumber);
    })
    
    
    
    
    
    
    
    $(document).on("click", "#diamond", function () {
        $("#score").append(diamondOutput+ userScore);
    })

    $(document).on("click", "#ruby", function () {
        alert("test");
    })
    $(document).on("click", "#topaz", function () {
        alert("test");
    })
    $(document).on("click", "#emerald", function () {
        ;
    })





    function reset() {
        ;
      }





});






