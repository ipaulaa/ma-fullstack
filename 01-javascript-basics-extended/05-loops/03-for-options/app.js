console.log('For #1');
for (let i = 0; i < 3; i++) {
  console.log(i);
}
// ReferenceError
// console.log(i);

console.log('For #2');
let i = 0;
for (;;) {
  if (i >= 3) {
    break;
  }
  console.log(i);
  i++;
}
console.log('after:', i);
