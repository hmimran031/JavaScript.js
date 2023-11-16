// var myInches = 140;
// var myFeet = myInches / 12;
// myFeet = myFeet.toFixed(2);
// console.log(myFeet);

//

// var dadaInches = 180;
// var dadaFeet = dadaInches / 12;
// console.log("Dada feet: ", dadaFeet);

//

// var dadiInches = 60;
// var dadiFeet = dadiInches / 12;
// dadiFeet = dadiFeet.toFixed(2);
// console.log("Dadi feet: ", dadiFeet);

// Using Function
// function inchToFeet(inche) {
//   var feet = inche / 12;
//   return feet;
// }

// var myInche = 112;
// var myFeet = inchToFeet(myInche);
// myFeet = myFeet.toFixed(3);
// console.log("My feet: ", myFeet);

//

function inchToFeet(inche) {
  const feet = inche / 12;
  return feet;
}

const myInche = 111;
const myFeet = inchToFeet(myInche);
console.log("My feet", myFeet);

const dadaInche = 108;
const dadaFeet = inchToFeet(dadaInche);
console.log("Dada feet: ", dadaFeet);

const dadiInche = 93;
const dadiFeet = inchToFeet(dadiInche);
console.log("Dadi feet", dadiFeet);
