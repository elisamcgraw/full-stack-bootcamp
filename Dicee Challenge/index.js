// Created by Elisa McGraw

/*
 Generate a random number between 1 and 6 for LEFT dice
 */

var randomNumber1 = Math.floor(Math.random() * 6) + 1;

/*

 Use the random number you created in the last step to 
 pick out a random dice image between dice1.png 
 to dice 6.png then place this image inside the left <img> element.

*/

// Create the file path for the random dice image
var imagePath = "images/dice" + randomNumber1 + ".png";

// Get the left <img> element and set the source attribute of the left <img> element to the random dice image
var image1 = document.querySelectorAll("img")[0].setAttribute("src", imagePath);


/*
 Generate a random number between 1 and 6 for RIGHT dice
 */

 var randomNumber2 = Math.floor(Math.random() * 6) + 1;

/*

 Use the random number you created in the last step to 
 pick out a random dice image between dice1.png 
 to dice 6.png then place this image inside the left <img> element.

*/

 // Create the file path for the random dice image
 var imagePath2 = "images/dice" + randomNumber2 + ".png";

 // Get the left <img> element and set the source attribute of the left <img> element to the random dice image
 document.querySelectorAll("img")[1].setAttribute("src", imagePath2);


 /*
    Change the title to display a winner
 */

// Change the text in h1 to show which user won dpending on the dice values
 if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins! ";
 }
 else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
 }
 else {
    document.querySelector("h1").innerHTML = "Draw!";
 }