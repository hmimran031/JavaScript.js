function factorial(number) {
  let multiplication = 1;
  let i = number;
  while (i >= 1) {
    multiplication = multiplication * i;
    console.log(i);
    i--;
  }
  return multiplication;
}
const numbers = 5;
const fact = factorial(8);
// const multiplication = factorial(8);
console.log(numbers, fact);
