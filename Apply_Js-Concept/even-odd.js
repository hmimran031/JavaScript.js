function isEven(number) {
  const reminder = number % 2;
  if (reminder === 0) {
    return true;
  } else {
    return false;
  }
}
const myNumberIsEven = isEven(1400);
console.log("My number is: ", myNumberIsEven);

const herNumberIsEven = isEven(141);
console.log("Her number is: ", herNumberIsEven);
