const digits = '0123456789';
console.log('.substr()'); // deprecated
console.log(digits.substr(3, 5));

console.log('.substring()');
console.log(digits.substring(3, 5), digits.substring(1));

console.log('.slice()');
console.log(digits.slice(3, 5), digits.slice(-6, -2), digits.slice(1));
