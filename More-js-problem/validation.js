function add(num1, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return "Please enter a number";
  }
  return num1 + num2;
}
const result = add("2", 2);
console.log(result);

//

function multiply(num1, num2) {
  console.log(num1, num2);
  return num1 * num2;
}
const output = multiply(2.01, 3.03);
const outputs = output.toFixed(2);
console.log(outputs);
