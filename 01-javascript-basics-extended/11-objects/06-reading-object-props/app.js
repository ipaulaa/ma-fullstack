const user = {
  name: 'Paula',
  lastName: 'Rodrigues',
  isMarried: false,
  age: 29
};

console.log(user.name);
console.log(user['lastName']);

// ReferenceError
// console.log(user[isMarried]);

const age = 29;
console.log(user[age]);
