let i = 0;

console.log('i:', i);
console.log(++i === i++);
console.log('i:', i);

i = 0;

++i;
const left = i;
const right = i;
i++;

console.log('i:', i);
console.log(left === right);
console.log('i:', i);
