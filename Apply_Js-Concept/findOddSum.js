function getSumOfAnArray(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    const index = i;
    const element = numbers[index];

    console.log(index, element);
  }
}
const myNumbers = [11, 98, 55, 64, 22, 85, 76, 21, 33, 44];
// getSumOfAnArray(myNumbers);

//

function getSumOfAnArray(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    const index = i;
    const element = numbers[index];
    sum = sum + element;
    console.log(index, element, sum);
  }
}

const myNumber = [11, 98, 55, 64, 22, 85, 76, 21, 33, 44];
getSumOfAnArray(myNumber);
