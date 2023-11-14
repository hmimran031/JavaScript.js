// Problem 1
// (a) Asn:
var fruits = ["Apple", "Banana", "Orange"];

var item = fruits.indexOf("Banana");
console.log(item);

fruits[1] = "Mango";
console.log(fruits);

// (b) Asn:
fruits.pop();

fruits.push("Watermelon");
console.log(fruits);

// Problem 2

// var myScore = 85;
// var tom = 66;
// var jane = 95;
// var peter = 56;
// var john = 40;

// function calculateGrade(score) {
//   if (score >= 80) {
//     return "A";
//   } else if (score >= 60) {
//     return "B";
//   } else if (score >= 50) {
//     return "C";
//   } else if (score >= 40) {
//     return "D";
//   } else {
//     return "F";
//   }
// }
// console.log("My Grade: " + calculateGrade(myScore));
// console.log("Tom Grade: " + calculateGrade(tom));
// console.log("Jane Grade: " + calculateGrade(jane));
// console.log("Peter Grade: " + calculateGrade(peter));
// console.log("John Grade: " + calculateGrade(john));

var myScore = 85;
var tom = 66;
var jane = 95;
var peter = 56;
var john = 40;

var myGrade, tomGrade, janeGrade, peterGrade, johnGrade;

if (myScore >= 80) {
  myGrade = "A";
} else if (myScore >= 60) {
  myGrade = "B";
} else if (myScore >= 50) {
  myGrade = "C";
} else if (myScore >= 40) {
  myGrade = "D";
} else {
  myGrade = "F";
}

if (tom >= 80) {
  tomGrade = "A";
} else if (tom >= 60) {
  tomGrade = "B";
} else if (tom >= 50) {
  tomGrade = "C";
} else if (tom >= 40) {
  tomGrade = "D";
} else {
  tomGrade = "F";
}

if (jane >= 80) {
  janeGrade = "A";
} else if (jane >= 60) {
  janeGrade = "B";
} else if (jane >= 50) {
  janeGrade = "C";
} else if (jane >= 40) {
  janeGrade = "D";
} else {
  janeGrade = "F";
}

if (peter >= 80) {
  peterGrade = "A";
} else if (peter >= 60) {
  peterGrade = "B";
} else if (peter >= 50) {
  peterGrade = "C";
} else if (peter >= 40) {
  peterGrade = "D";
} else {
  peterGrade = "F";
}

if (john >= 80) {
  johnGrade = "A";
} else if (john >= 60) {
  johnGrade = "B";
} else if (john >= 50) {
  johnGrade = "C";
} else if (john >= 40) {
  johnGrade = "D";
} else {
  johnGrade = "F";
}

console.log("My Grade: " + myGrade);
console.log("Tom Grade: " + tomGrade);
console.log("Jane Grade: " + janeGrade);
console.log("Peter Grade: " + peterGrade);
console.log("John Grade: " + johnGrade);

// Problem 3
// (a) Asn:
var number1 = 13;
var number2 = 79;
var number3 = 45;

var largestNumber;

if (number1 >= number2 && number1 >= number3) {
  largestNumber = number1;
} else if (number2 >= number1 && number2 >= number3) {
  largestNumber = number2;
} else {
  largestNumber = number3;
}

console.log("The largest number is: " + largestNumber);

// (b) Asn:
var side1 = 9;
var side2 = 8;
var side3 = 9;

if (side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1) {
  console.log("Yes, it forms a triangle.");
} else {
  console.log("No, it does not form a triangle.");
}
