function factorial(number) {
  let multiplication = 1;
  for (let i = number; i >= 1; i--) {
    multiplication = multiplication * i;
    console.log(i);
  }
  return multiplication;
}
const numbers = 5;
const fact = factorial(8);
// const multiplication = factorial(8);
console.log(numbers, fact);
