const name = 'Paula';
const user = {
  name: 'Paula',
  'last name': 'Rodrigues',
  age: 29
};

const key = 'age';
console.log(user.name, user['last name'], user[key]);

user.age = 29.06;
user['isMarried'] = false;
console.table(user);

delete user.isMarried;
delete user['last name'];
console.table(user);
