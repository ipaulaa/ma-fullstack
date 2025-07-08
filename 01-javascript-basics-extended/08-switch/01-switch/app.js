const num = Math.floor(Math.random() * 4);

console.log('num:', num);

switch (num) {
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
