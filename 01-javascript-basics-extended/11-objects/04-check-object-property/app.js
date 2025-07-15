const user = { name: 'Paula', lastName: 'Rodrigues', color: null };
console.log(user.age);

console.log('age' in user, user.hasOwnProperty('age'));
user.age = 29;
console.log('age' in user, user.hasOwnProperty('age'));
