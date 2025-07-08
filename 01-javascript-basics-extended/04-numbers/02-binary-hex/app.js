const decimal = 111; // base 10
// 111 => 1 * 100 + 1 * 10 + 1 * 1 = 111

const binary = 0b111; // base 2
// 111 => 1 * 4 + 1 * 2 + 1 * 1 = 7

const hexadecimal = 0x111; // base 16
// 111 => 1 * 256 + 1 * 16 + 1 * 1 = 273

console.log(`111 dec = ${decimal} dec`);
console.log(`111 bin = ${binary} dec`);
console.log(`111 hex = ${hexadecimal} dec`);

const number = 123;
console.log(number.toString(2));
console.log(number.toString(8));
console.log(number.toString(16));

/*
 10 - a
 11 - b
 12 - c
 13 - d
 14 - e
 15 - f
 */

const hex = 0xff;
console.log(hex);
