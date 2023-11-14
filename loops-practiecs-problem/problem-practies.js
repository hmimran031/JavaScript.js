// 1. Ans:-   While Loop using
// var i = 1;
// while (i <= 39) {
//   console.log("Ajk amr mon valo nei" + i);
//   i++;
// }
// For loop using
// for (var i = 1; i <= 39; i++) {
//   console.log("Ajk amr mon valo nei" + i);
// }

// 2. Ans:-

// for (var i = 58; i <= 98; i++) {
//   console.log(i);
// }

// // 3. Ans:-
// for (var i = 412; i <= 456; i += 2) {
//   console.log(i);
// }

// 4. Ans:-
// for (var i = 581; i <= 623; i += 2) {
//   console.log(i);
// }
// var i = 581;
// while (i <= 623) {
//   console.log(i);
//   i += 2;
// }

// 4. Ans:-
// var studys = ["HTML", "CSS", "BOOTSTARP", "TAILWIND", "JS (basic)"];
// for (var i = 0; i < studys.length; i++) {
//   study = studys[i];
//   console.log(study);
// }

// 5. Ans:-
// var mobiles = ["SM", "SMS", "IP", "XM", "INF"];
// var i = 0;
// while (i < mobiles.length) {
//   mobile = mobiles[i];
//   console.log(mobile);
//   i++;
// }
// 6. Ans:-
// var numbers = [
//   38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56,
//   57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75,
//   76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86,
// ];

// for (var i = 38; i < 86; i++) {
//   number = numbers[i];
//   console.log(i);
//   if (i >= 44) {
//     break;
//   }
// }
// 7. Ans:-
var bookPrices = [
  181, 183, 185, 187, 189, 191, 193, 195, 197, 199, 201, 203, 205, 207, 209,
  211, 213, 215, 217, 219, 221, 223, 225, 227, 229,
];
for (i = 0; i < bookPrices.length; i++) {
  bookPrice = bookPrices[i];
  if (bookPrice > 200) {
    break;
  }
  console.log(bookPrice);
}
