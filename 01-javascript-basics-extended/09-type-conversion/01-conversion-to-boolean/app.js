const values = [
  0,
  1,
  NaN,
  0n,
  '',
  '👑',
  null,
  undefined,
  {},
  [],
  function () {}
];
for (const value of values) {
  console.log(value, Boolean(value), !value, !!value);
}
