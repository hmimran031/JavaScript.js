const country = "Bangladesh";
const age = 26;
const isIndepensent = true;
const student = { id: 38, class: 12, name: "Kobir" };
const friendsAges = [25, 26, 27, 28, 29, 30];

console.log(typeof country);
console.log(typeof age);
console.log(typeof isIndepensent);
console.log(typeof student);
// Wrong way
console.log(typeof friendsAges);
// Right way
console.log(Array.isArray(friendsAges));

console.log(friendsAges.includes(26));

const newFriendsAge = [20, 21, 22, 23, 24];
const allFriendsAge = newFriendsAge.concat(friendsAges);
console.log(allFriendsAge);
