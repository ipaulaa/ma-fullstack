const message = 'Hello, World!';

console.log(message);

for (let i = 0; i < message.length; i++) {
  const utfCode = message.charCodeAt(i);
  console.log(message[i], utfCode, String.fromCharCode(utfCode));
}
