const creditCard = '1234 5678 9012 3456';
const lastDigits = creditCard.slice(-4);
const firstDigits = creditCard.slice(0, 4);
const hiddenCreditCard1 = lastDigits.padStart(creditCard.length, '**** ');
const hiddenCreditCard2 = firstDigits.padEnd(creditCard.length, ' ****');

console.log(creditCard);
console.log(lastDigits);
console.log(firstDigits);
console.log(hiddenCreditCard1);
console.log(hiddenCreditCard2);
