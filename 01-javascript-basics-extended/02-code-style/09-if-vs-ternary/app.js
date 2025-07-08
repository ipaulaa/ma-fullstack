let age = 29;

if (age > 17) {
  console.log('(if) Adult');
} else if (age > 10) {
  console.log('(if) Teenager');
} else {
  console.log('(if) Child');
}

age > 17
  ? console.log('(?:) Adult')
  : age > 10
    ? console.log('(?:) Teenager')
    : console.log('(?:) Child');

age = 17;
let ifMessage;
if (age > 17) {
  ifMessage = '(if) Adult';
} else if (age > 10) {
  ifMessage = '(if) Teenager';
} else {
  ifMessage = '(if) Child';
}
console.log(ifMessage);

const ternaryMessage =
  age > 17 ? '(?:) Adult' : age > 10 ? '(?:) Teenager' : '(?:) Child';
console.log(ternaryMessage);
