// //2-- ? it was a lot simpler than i thought.
function showMultiplicationTable(input){
    for(var i = 1; i <= 10; i++){
        var answer = input * i;

        console.log(input + ' x ' + i + ' = ' + answer);
    }
}

showMultiplicationTable(7);


//3
for (var i = 0; i < 10; i++){
    var randomNumber = Math.floor(Math.random() * 180) + 20;
    if(randomNumber % 2 === 0){
        console.log(randomNumber + " is even");
    }else{
        console.log(randomNumber + " is odd");
    }

}

//4
for (var i = 1; i < 10; i++){
        // console.log("exercise 4: ", String(i + " ").repeat(i));
    console.log(i.toString().repeat(i));
}



//5
for( var i = 100; i >= 5; i--){
    if(i % 5 === 0) {
        console.log("counting down from 100 in 5's: " + i);
    }
}