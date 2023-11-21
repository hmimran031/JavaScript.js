// Math.pow
const result = Math.pow(3, 8);
console.log(result);

// Math.abs
const numb1 = 25;
const numb2 = 45;
const gap = Math.abs(numb1 - numb2);

if (gap < 5) {
  console.log("You guys can be friend");
} else {
  console.log("You guys stay apart");
}

// Math.round

const numbers = 2.5554;
const fullNumbers = Math.round(numbers);
console.log(fullNumbers);
//
const number = 2.5;
const fullNumber = Math.round(number);
console.log(fullNumber);

//Math.ceil
const numberr = 5.56556246584;
const fullNumberr = Math.ceil(numberr);
console.log(fullNumberr);

//Math.ceil
const numbr = 10.9956556246584;
const fullNumbr = Math.floor(numbr);
console.log(fullNumbr);

//Math.Random
console.log(Math.random());
//
const random = Math.round(Math.random() * 100);
console.log(random);
//
for (let i = 0; i < 20; i++) {
  const random = Math.round(Math.random() * 6);
  console.log(random);
}
