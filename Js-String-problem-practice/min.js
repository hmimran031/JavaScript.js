const jim = 85;
const dela = 95;
const chinku = 99;

if (jim < dela && jim < chinku) {
  console.log("Jim will get the cake");
} else if (dela < jim && dela < chinku) {
  console.log("Dela will eat cake in this bela");
} else {
  console.log("Chinku will get the cake");
}

// Math.min using with function
function getMinNumber(num1, num2, num3) {
  return Math.min(num1, num2, num3);
}

const minNumber = getMinNumber(85, 95, 99);
console.log("The minimum number is:", minNumber);
