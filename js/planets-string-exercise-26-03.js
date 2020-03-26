(function () {
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray = [];

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named planetsArray. console.log planetsArray to
     * check your work
     */

    planetsArray = planetsString.split("|");
    console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     */

    var planetsWithBR = planetsArray.join("<br>");
    console.log(planetsWithBR);
    document.write(planetsWithBR);
    /**
     * BONUS:
     * Create another string that would display your planets in an unordered list. You will need an opening AND
     * closing <ul> tags around the entire string, and <li> tags around each planet.
     */
    var planetsUL = ("<ul><li>");
    planetsUL += planetsArray.join("</li><li>");
    planetsUL += "</li></ul>";
    document.write(planetsUL);
    console.log(planetsUL);

})();
