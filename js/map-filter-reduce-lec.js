const numbers = [1,2,3,4,5,6,7,8,9];

// function arrayFilter(array, checkFunction){
//     const result = [];
//
//     for(let index = 0; index < array.length; index++){
//         const value = array[index];
//         if(checkFunction(value, index, array)){
//             result.push(value);
//         }
//     }
//     return result;
// }
//
// const evens = arrayFilter(numbers, function (value){
//     return value % 2 === 0
// });
//
// console.log('evens from arrayFilter', evens);
//
// const odds = arrayFilter(numbers, function (value) {
//     return value % 2 !==0
// });
//
// console.log('odds from arrayFilter', odds);

// const evens = numbers.filter(function (value) {
//     return value % 2 === 0;
// });

const evens = numbers.filter(value => value % 2 === 0);

const odds = numbers.filter(number => number % 2 !== 0);

console.log('evens from arrayFilter ',evens);
console.log('odds from arrayFilter ',odds);