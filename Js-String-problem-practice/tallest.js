function maxInArray(numbers) {
  let largestNumber = 0;
  for (let i = 0; i < numbers.length; i++) {
    const index = [i];
    const element = numbers[index];
    if (element > largestNumber) {
      largestNumber = element;
    }
  }
  return largestNumber;
}

const highest = [85, 333, 65, 777, 824, 1000000000000001, 1, 3, 555, 999, 6474];
const tallestNumber = maxInArray(highest);
console.log(tallestNumber);
