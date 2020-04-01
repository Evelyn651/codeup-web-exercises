console.log("Hello from BOM");

var numberOfTimesRun = 0;
var intervalFunction = function(){
    console.log("Are we there yet? " + numberOfTimesRun);
    numberOfTimesRun++;
};

intervalFunction();

// function has to be anonymous
// var interval = setInterval(function(){
//     console.log("Are we there yet? " + numberOfTimesRun);
//     numberOfTimesRun++;
// }, 1000);

var interval= setInterval(intervalFunction, 1000);
//clearInterval(interval);

var names = ["Douglas", "Fernando", "Dimitri", "Christian"];

function myForEach(array, callback){
    for(var index = 0; index < array.length; index++){
        callback(array[index], index, array);
    }
}

myForEach(names, function(name, index, currentArray){
    console.log('Element: ' + name);
    console.log('Current Index: ' + index);
    console.log('The entire array: ' + currentArray);
});

console.log('Using an anonymous function assigned to a variable');

var processElement = function (name, index, currentArray) {
    console.log('Element: ' + name);
    console.log('Current Index: ' + index);
    console.log('The entire array: ' + currentArray);

};

myForEach(names, processElement);

//setTimeout()

setTimeout(intervalFunction, 5000);

setTimeout(function(){
    console.log('Hello one second from the page load.');
}, 1000);