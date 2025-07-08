console.log('RANDOM: [0, 1[');
for (let i = 0; i < 10; i++) {
  const randomNumber = Math.random();
  console.log(randomNumber);
}

console.log('RANDOM: [0, 5[');
for (let i = 0; i < 10; i++) {
  const randomNumber = 5 * Math.random();
  console.log(randomNumber);
}

console.log('RANDOM: [1, 6[');
for (let i = 0; i < 10; i++) {
  const randomNumber = 1 + 5 * Math.random();
  console.log(randomNumber);
}

console.log('RANDOM: {1, 2, 3, 4, 5, 6}');
for (let i = 0; i < 10; i++) {
  const randomNumber = Math.floor(6 * Math.random()) + 1;
  console.log(randomNumber);
}
