// function getavareg(assignment1, assignment2, assignment3) {
//   const total = assignment1 + assignment2 + assignment3;
//   const avarage = total / 3;
//   return avarage;
// }
// const assignment1mark = 60;
// const assignment2mark = 58;
// const assignment3mark = 59;

// const myAvareges = getavareg(assignment1mark, assignment2mark, assignment3mark);
// console.log("My avarege so far: ", myAvareges);

//

function getavareg(assignment1, assignment2, assignment3) {
  var total = assignment1 + assignment2 + assignment3;
  var avarage = total / 3;
  return avarage;
}
var assignment1marks = 60;
var assignment2marks = 55;
var assignment3marks = 56;

var myAvarege = getavareg(assignment1marks, assignment2marks, assignment3marks);
myAvarege = myAvarege.toFixed(2);
console.log("My avarege so far: ", myAvarege);
