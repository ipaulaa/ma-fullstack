const text = 'JavaScript is a fun programming language!';
const word1 = 'fun';
const word2 = 'boring';

console.log(text.includes(word1));
console.log(text.includes(word2));

const space = ' ';
console.log(text.indexOf(word1));
console.log(text.indexOf(word2));
console.log(text.indexOf(space));
console.log(text.indexOf(space, 11));

console.log(text.lastIndexOf(space));

const language = 'JavaScript';
const symbol = '!';
console.log(text.startsWith(language));
console.log(text.startsWith(symbol));
console.log(text.endsWith(language));
console.log(text.endsWith(symbol));
