let input = '10';
console.log(+input ? 'OK' : 'Error');

input = '0';
console.log(+input ? 'OK' : 'Error');
console.log(!isNaN(input) ? 'OK' : 'Error');

input = 'Infinity';
console.log(!isNaN(input) ? 'OK' : 'Error');
console.log(isFinite(input) ? 'OK' : 'Error');

input = '';
console.log(isFinite(input) ? 'OK' : 'Error');
console.log(input && isFinite(input) ? 'OK' : 'Error');

input = '   ';
console.log(input && isFinite(input) ? 'OK' : 'Error');
console.log(input.trim() && isFinite(input) ? 'OK' : 'Error');
