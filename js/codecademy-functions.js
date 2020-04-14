//7- Helper Functions
function monitorCount(rows, columns) {
    return rows * columns;
}

function costOfMonitors(rows, columns){
    return monitorCount(rows, columns) * 200;
}
var totalCost = costOfMonitors(5, 4);
console.log(totalCost);

//8- Function Expressions

var plantNeedsWater = function(day){
    if(day === 'Wednesday'){
        return true;
    }else{
        return false;
    }
};

console.log(plantNeedsWater('Tuesday'));

//9- Arrow Functions
//without the keyword function and using the arrow to make it a function

var plantsNeedWater = (day) => {
    if(day === 'Wednesday'){
        return true;
    }else {
        return false;
    }
};

console.log(plantsNeedWater('Friday'));

// 10- Concise Body Arrow Functions
var plantsNeedWater = day => day ==='Wednesday' ? true : false;

/* 11- Review
A function is a reusable block of code that groups together a sequence of statements to perform a specific task.

A parameter is a named variable inside a function's block which will be assigned the value of the argument passed in
 when the function is invoked:

 function calculateArea (width, height){
            console.log(width * height);
            }
  Width and height are the parameters.

 To call a function, use the name of the function with empty parenthesis.

 To return a value, use a return statement

 To define a function use function expressions:

 e.g.
 var calculateArea[identifier] = function[keyword](width, height)[parameters]

 using arrow function notation

 e.g.
 var calculateArea = (width, height) => {};

 concise arrow notation

 e.g.
 var sumNumbers = number => number + number;

 vs.

 var sumNumbers = number => {
 var sum = number + number;
 return sum;
 };


 */