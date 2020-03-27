"use strict";

console.log("Hello from External JavaScript");

//1
alert("Welcome to my website!");

//2

var userInput = prompt("What's your favourite colour?");
alert("Great, " + userInput + " is my favorite color too!");

//3

//Renting Videos exercise
var littleMermaid = prompt("How many days do you want to rent the Little Mermaid?" );
var brotherBear = prompt("How many days do you want to rent Brother Bear?");
var hercules = prompt("How many days do you want to rent Hercules?");
var amountDue = (parseInt(littleMermaid) + parseInt(brotherBear) + parseInt(hercules)) * 3;
alert("Your total amount due is: " + amountDue);

//Three Paycheck Exercise

var googleCheck = prompt("What is the pay rate for Google?");
var amazonCheck = prompt("What is the pay rate for Amazon?");
var faceBookCheck = prompt("What is the pay rate for FaceBook?");
var googleHours = prompt("How many hours did you work with Google?");
var amazonHours = prompt("How many hours did you work with Amazon?");
var faceBookHours = prompt("How many hours did you work with FaceBook?");

var totalPaycheck = (parseInt(googleCheck) * parseInt(googleHours)) + (parseInt(amazonCheck) * parseInt(amazonHours)) + (parseInt(faceBookCheck) * parseInt(faceBookHours));

alert("Your total paycheck is: $" + totalPaycheck);

//Can student take this class?

var isClassFull = true;
var isClassConflict = true;

var canStudentAttend = (isClassConflict && isClassFull);
alert("Student can attend class: ", canStudentAttend);





