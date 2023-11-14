function add(num1, num2) {
  console.log(num1, num2);
  var sum = num1 + num2;
  return sum;
}
var total = add(800, 200);
console.log("Total: ", total);

function bringSingras(mony) {
  var singraPrice = 10;
  var quantity = mony / singraPrice;
  return quantity;
}
var singara = bringSingras(200);
console.log("Eating singra: ", singara);

//

function bringSingra(mony) {
  var singraPrice = 10;
  var quantity = mony / singraPrice;
  return quantity;
}
var myMony = 550;
var singras = bringSingra(myMony);
singras = singras.toFixed(2);
console.log("Eating singra: ", singras);
