//2
var i = 1;

while(i < 65536){
    i *= 2;
    console.log("number : " + i);
}


//3- Ice Cream Seller exercise

// This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50;
var conesPurchased = Math.floor(Math.random() * 5) + 1;
// This expression will generate a random number between 1 and 5

do{
   var conesPurchased = Math.floor(Math.random() * 5) + 1;
   if(conesPurchased > allCones){
       console.log('Cannot sell you ' + conesPurchased + 'I only have ' + allCones);
   }else {
       console.log(conesPurchased + ' cones sold ' + allCones + ' cones to go!');
       allCones = allCones - conesPurchased;
   }
} while(allCones < 0);



//^^^^^^might be only half right^^^^^^^^