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