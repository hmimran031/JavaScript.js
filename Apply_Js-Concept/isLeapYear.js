function isLeapYear(year) {
  const reminder = year % 4;
  if (reminder === 0) {
    console.log("Your year is leap year", year);
  } else {
    console.log("Your year is not leap year", year);
  }
}
isLeapYear(2023);

//

function isLeapYear(year) {
  var reminder = year % 4;
  if (reminder === 0) {
    return true;
  } else {
    return false;
  }
}

var myYearIsleapyear = isLeapYear(2024);
console.log(myYearIsleapyear);

var myYearIsleapyear = isLeapYear(2023);
console.log(myYearIsleapyear);

//

function isLeapYear(year) {
  var reminder = year % 4;
  if (reminder === 0) {
    console.log("My year is leap year");
  } else {
    console.log("My year is not leap year");
  }
}
isLeapYear(2021);
isLeapYear(2020);
isLeapYear(2022);
isLeapYear(2024);
isLeapYear(2023);
