var shoppingCart = {
  book: 10,
  sunglass: 2,
  keybpard: 3,
  mouse: 4,
  pen: 8,
};
console.log(shoppingCart);

//*************************************************** */
var bookCount = shoppingCart.book;
console.log(bookCount);

//*************************************************** */
var keybpardCount = shoppingCart["keybpard"];
console.log(keybpardCount);

//*************************************************** */
var shoppingCartpropart = Object.keys(shoppingCart);
console.log(shoppingCartpropart);

//*************************************************** */
var shoppingCartvalue = Object.values(shoppingCart);
console.log(shoppingCartvalue);

//*************************************************** */
var propartyName = "mouse";
var propartyvalue = shoppingCart[propartyName];
console.log(propartyName, propartyvalue);
