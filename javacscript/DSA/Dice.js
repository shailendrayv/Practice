// write a program that simulates rolling a dice

const prompt = require("prompt-sync")();

let dice = parseInt(prompt("Enter the number of sides on the dice: "));

function Roll(sides) {
  return Math.floor(Math.random() * sides) + 1;
}

function multDice(numDice, sideDice) {
  let result = [];
  let counter = 0;

  while (counter < numDice) {
    const rollResult = Roll(sideDice);
    result.push(rollResult);
    counter++;
  }

  return result;
}
console.log(multDice(2, dice));
