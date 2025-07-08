const values = ['100', '3abc', '3.14abc', '3.14159'];
for (const value of values) {
  console.log('value:', value);
  console.log('Number:', Number(value));
  console.log('+', +value);
  console.log('parseInt:', parseInt(value));
  console.log('parseFloat:', parseFloat(value));
  console.log();
}

const base2 = '11101';
const base8 = '35';
const base16 = '1D';
console.log(base2, parseInt(base2, 2));
console.log(base8, parseInt(base8, 8));
console.log(base16, parseInt(base16, 16));
