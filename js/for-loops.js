//2-- ?
function showMultiplicationTable(aNumber){
    for(var aNumber = 1; i <= 10; i++){
        if (i = 1 * aNumber){
            console.log("Iteration: " + i);
        }
    }
}



//3
for (var i = 20; i <= 200; Math.floor(Math.random() * 20) + i++){

    if(i % 2 === 0){
        console.log(i + " is even");
    }else{
        console.log(" " + i + " is odd");
    }

}

//4
for (var i = 1; i < 10; i++){
        console.log("exercise 4: ", String(i + " ").repeat(i));
}



//5
for( var i = 100; i >= 5; i--){
    if(i % 5 === 0) {
        console.log("counting down from 100 in 5's: " + i);
    }
}