const num = Math.floor(Math.random() * 6);

console.log('num:', num);

console.log('Switch 1:');
switch (num) {
  case 5:
  case 4:
  case 3:
    console.log('Three...');
    break;
  case 2:
    console.log('Two...');
    break;
  case 1:
    console.log('One...');
    break;
  default:
    console.log('LIFT OFF!');
}

console.log('\nSwitch 2:');
switch (num) {
  case 5:
  case 4:
  case 3:
    console.log('Three...');
  case 2:
    console.log('Two...');
  case 1:
    console.log('One...');
  default:
    console.log('LIFT OFF!');
}
