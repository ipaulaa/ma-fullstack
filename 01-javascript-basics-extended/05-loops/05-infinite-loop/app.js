function rollDie(sides) {
  return Math.floor(Math.random() * sides) + 1;
}

const DICE_SIDES = 6;

const goal1 = rollDie(DICE_SIDES);
console.log(`Target is: ${goal1}`);

let die1 = rollDie(DICE_SIDES);

while (die1 !== goal1) {
  console.log(`You rolled a ${die1}!`);
  die1 = rollDie(DICE_SIDES);
}
console.log('Congratulations! You matched the target!');

const goal2 = rollDie(DICE_SIDES);
console.log(`Target is: ${goal2}`);

let die2;
do {
  die2 = rollDie(DICE_SIDES);
  if (die2 === goal2) {
    console.log('Congratulations! You matched the target!');
  } else {
    console.log(`You rolled a ${die2}!`);
  }
} while (die2 !== goal2);

const goal3 = rollDie(DICE_SIDES);
console.log(`Target is: ${goal3}`);

while (true) {
  const die3 = rollDie(DICE_SIDES);
  if (die3 === goal3) {
    console.log('Congratulations! You matched the target!');
    break;
  }
  console.log(`You rolled a ${die3}!`);
}
