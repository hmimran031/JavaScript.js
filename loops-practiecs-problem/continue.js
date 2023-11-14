var numbers = [1, 10, 22, 3, 14, 5, 6, 17, 38, 5, 2];
for (i = 0; i < numbers.length; i++) {
  number = numbers[i];
  if (number > 10) {
    continue;
  }
  console.log(number);
}
