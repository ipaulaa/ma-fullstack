const x = 10 / 0;
const y = -10 / 0;
console.log(x, y);

const posInfinity = Infinity;
const negInfinity = -Infinity;
console.log(posInfinity, negInfinity);

const max = Number.MAX_VALUE;
console.log(max, max * 2);
console.log(isFinite(max), isFinite(max * 2));
