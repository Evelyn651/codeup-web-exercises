(function(){
    "use strict";

    var planets = [
        'Mercury',
        'Venus',
        'Earth',
        'Mars',
        'Jupiter',
        'Saturn',
        'Uranus',
        'Neptune'
    ];
console.log('original: ', planets);
    /**
     * TODO:
     * Read each console log below, and write some javascript code to perform
     * the step that it describes
     */
    planets.unshift("The Sun");
    console.log('Adding "The Sun" to the beginning of the planets array.', planets);

//###################################################################
    planets.push("Pluto");
    console.log('Adding "Pluto" to the end of the planets array.', planets);

//###################################################################
    planets.shift(); //or planets.shift("The Sun"); both work.
    console.log('Removing "The Sun" from the beginning of the planets array.', planets);

//###################################################################
    planets.pop();
    console.log('Removing "Pluto" from the end of the planets array.', planets);


//##################################################################

    console.log('Finding and logging the index of "Earth" in the planets array.', planets.indexOf("Earth"));

//##################################################################
    planets.reverse();
    console.log("Reversing the order of the planets array.", planets);

//###################################################################
    planets.sort();
    console.log("Sorting the planets array.", planets);

})();
