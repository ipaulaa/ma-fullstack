const point = { x: 1, y: 2, z: 3 };

console.log('point (dot notation):');
for (const key in point) {
  console.log(key, point.key);
}

point.w = 4;

console.log('\npoint (bracket notation):');
for (const key in point) {
  console.log(key, point[key]);
}

const weirdObject = {
  b: 2,
  c: 3,
  a: 1,
  7: 'seven',
  3: 'three',
  '-1': 'i ** 2',
  d: 4
};

console.log('\nweirdObject:');
for (const key in weirdObject) {
  console.log(key, weirdObject[key]);
}
