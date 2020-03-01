"use strict";

// TODO: Ask the user for their name.

conosle.log("Before prompt...");
var userName = prompt("What is your name?");
console.log(userName);

console.log("After prompt.");

console.log("Before confirm...");
var confirmed = confirm("Do you like pizza?");

if (confirmed) {
    console.log("User likes pizza.");
} else {
    console.log("User does not like pizza.")
}
console.log("After confirm.");
alert("Thanks for sharing that with me!");

//       Keep asking if an empty input is provided.

// TODO: Show an alert message that welcomes the user based on their input.

// TODO: Ask the user if they like pizza.
//       Based on their answer show a creative alert message.
