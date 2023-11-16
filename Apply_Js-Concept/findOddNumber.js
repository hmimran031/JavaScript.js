function getAnOddNumber(numbers) {
  const oddNumber = [];
  for (let i = 0; i < numbers.length; i++) {
    const index = i;
    const element = numbers[index];
    if (element % 2 !== 0) {
      //   if (element % 2 === 1)
      console.log(index, element);
      oddNumber.push(element);
    }
  }
  return oddNumber;
}

const myNumbers = [21, 72, 65, 94, 58, 32, 49, 88, 99, 25, 62, 55];
const oddnumbers = getAnOddNumber(myNumbers);
console.log(oddnumbers);
