function factorial(number) {
  let multiplication = 1;
  for (let i = 1; i <= number; i++) {
    multiplication = multiplication * i;
    console.log(i, multiplication);
  }
  return multiplication;
}

const myNumber = 9;
factorial(myNumber);
// const multiplication = factorial(15);

//

function factorial(number) {
  let multiplication = 1;
  for (let i = 1; i <= number; i++) {
    multiplication = multiplication * i;
  }
  return multiplication;
}

const multiplication = factorial(9);
console.log(multiplication);
