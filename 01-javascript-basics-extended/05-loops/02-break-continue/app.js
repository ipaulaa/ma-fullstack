console.log('BREAK');
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    console.log('🛑');
    break;
  }
  console.log(i);
}

console.log('CONTINUE');
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    console.log('⏭️');
    continue;
  }
  console.log(i);
}
