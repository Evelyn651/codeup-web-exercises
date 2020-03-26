var names = ["Douglas", "Fer", "Sophie", "Vivian"];
var numbers = [22,12,0,67,3,10];


console.log('original: ', names);
// var removedItem = names.pop();
//
// // var firstItemRemoved = name.shift();
// alert(firstItemRemoved + ' was removed');
//
// console.log(firstItemRemoved === "Douglas");
//
// console.log(names.indexOf("Fer"));
// console.log(names.indexOf("Fers"));
//Whats the difference between these two console.logs?

//if the array contains a number, makes sure you look for the data type.
// console.log(names);
// console.log(names.indexOf(12));
// names.push(0);
// names.push("12");
// console.log(names);
// console.log('names.indexOf("12"): ', names.indexOf("12"));


// var pieces = names.slice(3);
// console.log('pieces: ', pieces);
//
// var piecesByRange = names.slice(1, 3);
// console.log('piecesByRange: ', piecesByRange);


// names.reverse();
// console.log('names.reverse() ', names);

// names.sort();
// console.log('from A to Z: ', names);
// names.reverse();
// console.log('from Z to A: ', names);

var salariesString = "500,324 | 900,456 | 600,212";
var salariesArray = salariesString.split("|");
console.log(salariesString);
console.log(salariesArray);

var namesCSV = names.join(",");
console.log('namesCSV', namesCSV);

var numbersString = numbers.join("|");
console.log('numbersString', numbersString);
