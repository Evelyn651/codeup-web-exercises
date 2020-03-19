console.log("Hello");

// ================ REAL WORLD SCENARIO ===============
// If a use is an admin, show a specific navbar
// If weather is rainy, show rain icon
// If number of lives is 0, game is over


//================= IF STATEMENT SYNTAX ================

// if (condition) {
// code here runs if condition evaluates to true
// }

var isAdmin = true;
if (isAdmin) {
    console.log("Turn on the admin navbar.")
}

// Send a 20% off coupon if its users birthday

var isBirthday = true;
if (isBirthday) {
    console.log("Send them the coupon.")
}

// Do I have enough money to buy this item?

var currentBalance = 1000;
var itemCost = 500;

if (currentBalance > itemCost) {
    // alert("You can buy it!");
}

//============= IF / ELSE STATEMENTS ===============

// if (condition){
// code here runs if condition evaluates to true
// } else {
//     // code runs here if condition evalustes to false
// }


var isAdmin = true;
if(isAdmin) {
    //If true run this code.
    console.log("Displaying admin navbar.")
} else {
    //If false run this code.
    console.log("Displaying regular navbar.")
}

var numberOfLives = 0;

if(numberOfLives === 0) {
    //alert("Game Over :(");
} else {
    //alert("Next Level!");
}

//Refactor number of lives into a function
function checkIfGameOver(numberOfLives) {
    if(numberOfLives === 0) {
        return "Sorry, game over. :(";
    } else {
        return "Next level!";
    }
}

//alert(checkIfGameOver(0));
//alert(checkIfGameOver(5));

// ============== IF / ELSE IF / ELSE STATEMENT SYNTAX ==================
// if(conditional) {
//         // code here runs if condition evaluates to true
// } else if(condition2) {
//      // code here runs if conditional is false *and* condition2 evaluates to true
//} else {
//    // code here gets executed if conditional nor condition2 evaluates to true
// }

var weather = "raining";
if (weather === "snowing"){
    alert("Stay inside!");
} else if(weather === "raining"){
    //alert("Get an umbrella.");
} else {
    //alert("You are good to go. Enjoy the weather.");
}

function checkWeather(weather) {
    if (weather === "snowing" || weather === "hailing"){
        return "Stay inside!";
    } else if(weather === "raining"){
        return "Get an umbrella.";
    } else {
        return "You are good to go. Enjoy the weather.";
    }
}

console.log(checkWeather("snowing"));
console.log(checkWeather("raining"));
console.log(checkWeather("sunny"));
console.log(checkWeather("hailing"));

var pizzaPreference = prompt("What kind of pizza do you like?").toLocaleLowerCase();

if (pizzaPreference === "pepperoni") {
    //alert("What a coincidence, I love that one too.")
} else if (pizzaPreference === "pineapple and hot sauce"){
    //alert("That is a spicy pizza.")
} else if (pizzaPreference === "steak"){
   // alert("Steak is great!");
} else if (pizzaPreference === "cheese"){
    //alert("Plain cheese is okay.");
} else {
    //alert(pizzaPreference + " isn't my favorite, but let's order some.");
}

var userAge = 17;
var hasPermit = true;

// if(userAge < 15 ){
//     alert("You are not eligible for a permit.");
// } else {
//     // all other possibilities.
//     if (userAge === 15) {
//         alert("You are eligible for a learners permit.");
//     } else if (userAge >= 16 && hasPermit){
//         alert("You can get a driver's license.");
//     } else if ((userAge >= 16 && !hasPermit)){
//         alert("You are not eligible for a license. :(")
//     } else {
//         alert("We don't have enough information to determine your eligibility. :( :(")
//     }
// }

var message;
var success = true;

// if(success){
//     message = "Operation was successful.";
// } else {
//     message = "Oops, something went wrong.";
// }

message = (success) ? "Operation was successful." : "Oops, something went wrong.";

console.log(message);

