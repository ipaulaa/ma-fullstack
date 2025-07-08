// My cash
let cash = 18;

// Price of a Cookie
const cookiePrice = 7;

// Price of a Chocolate
const chocolatePrice = 8;

// My cash after buying a cookie
cash -= cookiePrice;

// Can I buy a chocolate with the cash I have left?
if (cash >= chocolatePrice) {
  document.write('I can buy a chocolate'); // Executes if the expression is truth
} else {
  document.write('I cannot buy a chocolate');
}

/*
 This is a block comment.

 You cannot have a block comment
 inside another block comment.
 */
