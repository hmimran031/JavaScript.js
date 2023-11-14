var shoppingCart = {
  book: 10,
  sunglass: 2,
  keybpard: 3,
  mouse: 4,
  pen: 8,
};
console.log(shoppingCart);

var keys = Object.keys(shoppingCart);
console.log(keys);
var values = Object.values(shoppingCart);
console.log(values);

// for loop using
for (var i = 0; i < keys.length; i++) {
  var propartName = keys[i];
  var propartValue = shoppingCart[propartName];
  console.log(propartName, propartValue);
}

// Easy Method*******************************************************/*
// For in loop
for (const propartName in shoppingCart) {
  const value = shoppingCart[propartName];
  console.log(propartName, value);
}
