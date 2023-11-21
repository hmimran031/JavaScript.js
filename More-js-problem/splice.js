const friends = [26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40];

const partial = friends.splice(2, 10);
console.log(partial);
console.log(friends);

// Add Elemnts-------------------****
const friend = [26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40];

const partials = friend.splice(2, 10, 25, 41, 42);
console.log(partials);
console.log(friend);
