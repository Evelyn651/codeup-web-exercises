var anxietyLevel = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for(var anxietyLevel = 0; anxietyLevel <= 10; anxietyLevel++) {
    var anxietyPrompt = prompt("What is your current anxiety level?");
    if (anxietyPrompt <= 4) {
        alert("Your anxiety level is : " + anxietyLevel + " Take a walk.");
    } else if (anxietyPrompt <= 7) {
        alert("Your anxiety level is : " + anxietyLevel + " Take a pill and do some breathing exercises.");
    } else {
        alert("Your anxiety level is : " + anxietyLevel + " Time for a nap.")
        //this would work with a 2-3 hour nap and maybe a cup of tea
    }

}

