const phones = [
  {
    name: "Samsung",
    camera: 12,
    storage: "32gb",
    price: 50000,
    color: "Silver",
  },
  {
    name: "Walton",
    camera: 10,
    storage: "30gb",
    price: 20000,
    color: "Yellow",
  },
  {
    name: "Iphone",
    camera: 18,
    storage: "128gb",
    price: 150000,
    color: "Blue",
  },
  {
    name: "Nokia",
    camera: 20,
    storage: "64gb",
    price: 40000,
    color: "Perpelmix",
  },
  {
    name: "Xaomi",
    camera: 64,
    storage: "128gb",
    price: 35000,
    color: "Whitemix",
  },
];

function chepestPhone(phones) {
  let chepest = phones[0];
  for (let i = 0; i < phones.length; i++) {
    const phone = phones[i];
    if (phone.price < chepest.price) {
      chepest = phone;
    }
  }
  return chepest;
}
const mySelection = chepestPhone(phones);
console.log(mySelection);
