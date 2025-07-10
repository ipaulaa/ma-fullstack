function logTable(values, op, fn) {
  console.log(`\n${op} - ${fn.name}`);
  for (const v1 of values) {
    for (const v2 of values) {
      console.log(v1, op, v2, 'is', fn(v1, v2));
    }
  }
}

function opOr(a, b) {
  return a || b;
}

function ifOr(a, b) {
  return a ? a : b;
}

function opAnd(a, b) {
  return a && b;
}

function ifAnd(a, b) {
  return a ? b : a;
}

const booleans = [false, true];
const numbers = [0, 1];
const strings = ['', 'hello'];

logTable(booleans, 'or', opOr);
logTable(booleans, 'or', ifOr);
logTable(numbers, 'or', opOr);
logTable(numbers, 'or', ifOr);
logTable(strings, 'or', opOr);
logTable(strings, 'or', ifOr);

logTable(booleans, 'and', opAnd);
logTable(booleans, 'and', ifAnd);
logTable(numbers, 'and', opAnd);
logTable(numbers, 'and', ifAnd);
logTable(strings, 'and', opAnd);
logTable(strings, 'and', ifAnd);
