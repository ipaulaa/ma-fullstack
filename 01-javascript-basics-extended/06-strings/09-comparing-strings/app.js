const name1 = 'paul';
const name2 = 'paula';
const name3 = 'paulo';

console.log(name1, name2, name3);
console.log(`${name1} > ${name2}? ${name1 > name2}`);
console.log(`${name1} > ${name3}? ${name1 > name3}`);
console.log(`${name2} > ${name3}? ${name2 > name3}`);

for (let i = 0; i < name2.length; i++) {
  console.log(`\nINDEX: ${i}`);
  console.log(name2[i], name2.charCodeAt(i));
  console.log(name3[i], name3.charCodeAt(i));
}

const lowerA = 'a';
const upperA = 'A';
console.log(`\n${lowerA} > ${upperA}? ${lowerA > upperA} `);
console.log(upperA, upperA.charCodeAt(0));
console.log(lowerA, lowerA.charCodeAt(0));

const letter1 = 'c';
const letter2 = 'ç';
console.log(`\n${letter1} === ${letter2}? ${letter1 === letter2}`);
console.log(
  `${letter1} === ${letter2}? ${letter1.localeCompare(letter2, 'pt-BR', { sensitivity: 'case' })}`
);
