console.log("Hello from external JavaScript!");

console.log("Welcome to my Website!");

//Alert Function
// console.log("Before alert...");
// alert("Welcome to my Website!");
// console.log("After alert...");

//Prompt Function
// console.log("Before prompt...");
// var response = prompt("What is your favorite colour?");
// alert("Great, " + response + " is my favorite colour too!");
// console.log("After prompt...");

//When the exercise asks you to use a number, instead use a prompt to ask the user for that number.
// Use an alert to show the results of each problem.

// var littleMerMaid = prompt("How do many days do you want to rent The Little Mermaid?");
// var brotherBear = prompt("How do many days do you want to rent Brother Bear?");
// var hercules = prompt("How do many days do you want to rent Hercules?");
//
// var rentalTotal = (
//     parseInt(littleMerMaid) +
//     parseInt(brotherBear) +
//     parseInt(hercules)) * 3;
//
// alert("Total rental $" + rentalTotal);

//Work rates

// var googleRate = prompt("What is your rate for Google?");
// googleRate = parseInt(googleRate);
//
// var amazonRate = prompt("What is your rate for Amazon?");
// amazonRate = parseInt(amazonRate);
//
// var facebookRate = prompt("What is your rate for Facebook?");
// facebookRate = parseInt(facebookRate);
//
// //Collect total hours
//
// var googleHours = prompt("How many hours did you work at Google this week?"); googleHours = parseInt(googleHours);
//
// var amazonHours = prompt("How many hours did you work at Amazon this week?"); amazonHours = parseInt(amazonHours);
//
// var facebookHours = prompt("How many hours did you work at Facebook this week?"); facebookHours = parseInt(facebookHours);
//
// var totalDollars = (facebookRate * facebookHours) + (amazonRate * amazonHours) + (googleRate * googleHours);
//
// alert("Total dollars: $" + totalDollars);

//isClassFull exercise

// var isClassFull = false;
// var isClassConflict = false;
//
// var canAttendClass = (!isClassFull && !isClassConflict);
// alert("Student can attend class " + canAttendClass);

var numberOfItems = prompt("How many items do you want to buy?");
numberOfItems = parseInt(numberOfItems);

var numberOfItemsRequired = prompt("How many items are required for the offer?");
numberOfItemsRequired = parseInt(numberOfItemsRequired);

var isOfferExpired = false;
var isCustomerPremium = false;

var isOfferValid = (isCustomerPremium && !isOfferExpired) || (numberOfItems >= numberOfItemsRequired && !isOfferExpired);
alert("Offer is valid " + isOfferValid);

