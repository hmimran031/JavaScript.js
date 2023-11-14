var i = 1;
while (i < 8) {
  console.log(i);
  i++;
  if (i > 5) {
    break;
  }
}

for (var i = 1; i < 10; i++) {
  console.log(i);
  if (i > 6) {
    break;
  }
}

var numbers = [1, 11, 22, 33, 44, 55, 66, 77, 88, 99, 111];
for (i = 0; i < numbers.length; i++) {
  number = numbers[i];
  if (number > 100) {
    break;
  }
  console.log(number);
}
