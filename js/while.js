//2
var i = 1;

while(i < 65536){
    i *= 2;
    console.log("number : " + i);
}


//3- Ice Cream Seller exercise

// This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50;
// This expression will generate a random number between 1 and 5

// do{
//    var conesToPurchase = Math.floor(Math.random() * 5) + 1;
//    if(conesToPurchase <= allCones){
//        console.log(conesToPurchase + ' cones sold ');
//    }else {
//        console.log("Cannot sell you" + conesToPurchase + " cones. I only have " + allCones + "...");
//         allCones -= conesToPurchase;
//    }
//    console.log(allCones)
// } while(allCones > 0);



//^^^^^^might be only half right^^^^^^^^