function logUser(user) {
  console.log(`USER: ${user.name} ${user.lastName} (${user.age})`);
}

const user1 = {
  name: 'Xaden',
  lastName: 'Riorson',
  age: 22
};

const user2 = {
  name: 'Violet',
  lastName: 'Sorrengail',
  age: 20
};

logUser(user1);
logUser(user2);
