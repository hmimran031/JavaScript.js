//  Push

var number = [111, 222, 333, 444, 555, 666, 777, 888, 999];
number.push(101, 2002, 303);
number.push(404);
number.push(505);

console.log(number);

var humanName = ["Himu", "Kabir", "Rahim", "Hiron"];
humanName.push("Miron", "Kiron");
// humanName = humanName.indexOf("Rahim");
console.log(humanName.length);
console.log(humanName);

// Pop
var number = [111, 222, 333, 444, 555, 666, 777, 888, 999];
number.pop();
number.pop();
number.pop();
console.log(number);

var humanName = ["Himu", "Kabir", "Rahim", "Hiron"];
humanName.pop();
humanName.pop();
humanName.pop();
// humanName = humanName.indexOf("Rahim");
console.log(humanName.length);
console.log(humanName);

// Push And Pop Element Cheack
// Push element cheack  (irror  program)
// var number = [111, 222, 333, 444, 555, 666, 777, 888, 999];
// number.push(101, 2002, 303);
// number.push(404);
// number.push(505);
// number.push(606);
// console.log(number);

// Pop element cheack
var humanName = ["Himu", "Kabir", "Rahim", "Hiron", "Khiron", "Mamun"];
humanName.pop();
humanName.pop();
console.log(humanName);
var element = humanName.pop();
console.log(element);

// Add the first element of an array with  (***** unshift *****)
var number = [111, 222, 333, 444, 555, 666, 777, 888, 999];
var addFristElement = number.unshift(1001);
console.log(number);
console.log(addFristElement);

// Remove the first element of an array with  (***** shift *****)
var number = [111, 222, 333, 444, 555, 666, 777, 888, 999];
var removeFristElement = number.shift();
console.log(number);
console.log(removeFristElement);
