const jim = 85;
const dela = 97;
const chinku = 99;

if (jim > dela && jim > chinku) {
  console.log("Jim will get the cake");
} else if (dela > jim && dela > chinku) {
  console.log("Dela will eat cake in this bela");
} else {
  console.log("Chinku will get the cake");
}

// Max Using
function maxNumber(num1, num2, num3) {
  return Math.max(num1, num2, num3);
}
const result = maxNumber(85, 97, 99);
console.log("The maximum number is:", result);
