function getLimit() {
  console.log('Calculating the limit...');
  return 7;
}

console.log('For #1');
for (let i = 0; i < getLimit(); i++) {
  console.log(i);
}

console.log('For #2');
const limit = getLimit();
for (let i = 0; i < limit; i++) {
  console.log(i);
}

console.log('For #3');
for (let i = 1; i <= 3; i++) {
  const seconds = i * 24 * 60 ** 2;
  console.log(`day ${i} has ${seconds} secs`);
}

const SECONDS_PER_DAY = 24 * 60 ** 2;
console.log('For #4');
for (let i = 1; i <= 3; i++) {
  const seconds = i * SECONDS_PER_DAY;
  console.log(`day ${i} has ${seconds} secs`);
}
