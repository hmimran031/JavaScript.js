// 1. Ans:
function milesToKilometer(miles) {
  const kilometer = miles * 1.60934;
  return kilometer;
}

const isKilometer = 10;
const ismiles = milesToKilometer(isKilometer);
console.log(ismiles);

// 1. Ans:
function hourToMinutes(hour) {
  const minute = hour * 60;
  return minute;
}
const isInputHour = 2;
const isInputsMinutes = hourToMinutes(isInputHour);
console.log("Minute: ", isInputsMinutes);

// 2. Ans: Even Number
function isEven(numbers) {
  const reminder = numbers % 2;
  if (reminder % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

const myNumberIsEven = isEven(10);
console.log(myNumberIsEven);

// 2. Ans: Odd Number
function isOdd(numbers) {
  const reminder = numbers % 2;
  if (reminder % 2 !== 0) {
    return true;
  } else {
    return false;
  }
}

const myNumberIsOdd = isOdd(11);
console.log(myNumberIsOdd);

// // 3. Ans: Leap Year
function getLeapYearOrNot(year) {
  const reminder = year % 4;
  if (reminder === 0) {
    return true;
  } else {
    return false;
  }
}

const myYearIsLeapYear = getLeapYearOrNot(1989);
console.log(myYearIsLeapYear);

// 3. Ans: Leap Year
function getLeapYearOrNot(year) {
  const reminder = year % 4;
  if (reminder % 4 == 0) {
    console.log("Is a leap year");
  } else {
    console.log("Is not a leap year");
  }
}

getLeapYearOrNot(1981);
getLeapYearOrNot(2020);
getLeapYearOrNot(1989);

// 3. Ans: Leap Year
function isLeapYear(year) {
  const remainder = year % 4;
  return remainder === 0 && (year % 100 !== 0 || year % 400 === 0);
}

function checkLeapYears(yearsArray) {
  yearsArray.forEach((year) => {
    if (isLeapYear(year)) {
      console.log(`${year} is a leap year`);
    } else {
      console.log(`${year} is not a leap year`);
    }
  });
}

const leapYears = [1981, 1620, 1789];
checkLeapYears(leapYears);

// 4. Ans: Odd and Sum
function getFindOddAndEven(numbers) {
  let sum = 0;
  for (let i = 1; i <= numbers; i++) {
    sum = sum + i;
    console.log(i, sum);
  }
  return sum;
}
const myNumberr = 11;
getFindOddAndEven(myNumberr);

// 4. Ans: Odd and Sum
function getFindOddAndEven(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    const index = i;
    const element = numbers[index];
    sum = sum + element;
    console.log(index, element, sum);
  }
}
const myNumber = [10, 30, 50, 70, 20, 40, 60, 80];
getFindOddAndEven(myNumber);

// 4. Ans: Odd and Sum
function getFindOddAndEven(numbers) {
  let oddNumber = [];
  for (let i = 0; i < numbers.length; i++) {
    const index = i;
    const element = numbers[index];
    if (element % 2 === 0) {
      console.log(index, element);
      oddNumber.push(element);
    }
  }
  return oddNumber;
}
const myNumbers = [11, 33, 55, 77, 22, 44, 66, 88];
const oddnumber = getFindOddAndEven(myNumber);
console.log(oddnumber);
