// Number Type
var price = 100;
console.log(price);
console.log(typeof price);

// String Type
var price = "100";
console.log(price);
console.log(typeof price);

// Boolean Type
var isHappy = true;
console.log(isHappy);
console.log(typeof isHappy);

// Undefined Type
var romantic;
console.log(romantic);
console.log(typeof romantic);

// ToFixed (.1 and .2 er spmou problem hoy !!!!!!!!!!!*)
var num1 = 0.1;
var num2 = 0.2;
var sum = num1 + num2;
console.log(sum);

// ToFixed (Solution)
var num1 = 0.1;
var num2 = 0.2;
var sum = num1 + num2;
sum = sum.toFixed(1);
console.log(sum);

// Remainder
var mango = 11;
var person = 3;
var remainder = mango % person;
console.log(remainder);
