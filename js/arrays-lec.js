//var douglas = "Douglas H";
//var fer = "Fer M";

var cohort = ["Douglas H","Sophie K","Vivian C", "Fer M", 1, 3.4];

//the number of items in the array
console.log("Cohort length", cohort.length);

console.log(cohort[1]);

console.log('index of Fer M', cohort.indexOf("Fer M"));

//you get -1 if item that you are looking for doesn't exist in the array
console.log('index of Fer Mendoza', cohort.indexOf("Fer Mendoza"));

console.log('get Fer', cohort[cohort.indexOf("Fer M")]);

for(var index = 0; index < cohort.length; index++){
    console.log('cohort[index] ' + index, cohort[index]);
}

//forEach works with callback functions that get executed while the loops run
cohort.forEach(function(element, index, array){
    console.log("element", element);
    console.log("index", index);
    console.log("array", array);
});