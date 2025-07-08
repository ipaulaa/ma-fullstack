function sum(a, b) {
  console.log(a, b);
  return a + b;
}

function mul(a = 10, b = a ** 2) {
  console.log(a, b);
  return a * b;
}

const result1 = sum(5, 3);
console.log(result1);

const result2 = sum(5);
console.log(result2);

const result3 = mul(3, 2);
console.log(result3);

const result4 = mul(3);
console.log(result4);

const result5 = mul();
console.log(result5);
