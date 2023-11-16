function getAnEvenNumber(numbers) {
  const oddNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    const index = i;
    const element = numbers[index];
    if (element % 2 === 0) {
      console.log(index, element);
      oddNumbers.push(element);
    }
  }
  return oddNumbers;
}

const myNumbers = [21, 72, 65, 94, 58, 32, 49, 88, 99, 25, 62, 55];
const oddNumbers = getAnEvenNumber(myNumbers);
console.log(oddNumbers);
