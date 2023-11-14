var numbers = [11, 12, 13, 88, 89, 100, 555, 888, 1111, 1555];

console.log(numbers[4]);

// Get element value by index
var element = numbers[8];
console.log(element);

// Set element value by index
numbers[6] = 666;
numbers[7] = 777;
numbers[8] = 2222;

console.log(numbers);

// Find index of an elements
var positionIndex = numbers.indexOf(1555);

console.log(positionIndex);
