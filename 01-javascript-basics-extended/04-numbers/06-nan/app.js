const x1 = 0 / 0;
const x2 = 0 / 'a';
const x3 = 0 / '10';
const x4 = +'abc';
const x5 = NaN;

console.log(x1, x2, x3, x4, x5);
console.log(x1, x1 === NaN);
console.log(x1, x3, isNaN(x1), isNaN(x3));
