const num1 = Math.floor(Math.random() * 10) + 1;

console.log('num1:', num1);
if (num1 === 5) {
  console.log('Few');
} else if (num1 === 10) {
  console.log('Many');
} else {
  console.log('Some');
}

switch (num1) {
  case 5:
    console.log('Few');
    break;
  case 10:
    console.log('Many');
    break;
  default:
    console.log('Some');
}

const num2 = Math.floor(Math.random() * 10) + 1;
console.log('\nnum2:', num2);
console.log('\nExample 2:');
if (num2 < 5) {
  console.log('Few');
} else if (num2 > 10) {
  console.log('Many');
} else {
  console.log('Some');
}

switch (true) {
  case num2 < 5:
    console.log('Few');
    break;
  case num2 > 10:
    console.log('Many');
    break;
  default:
    console.log('Some');
}
