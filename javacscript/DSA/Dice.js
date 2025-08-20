// write a program that simulates rolling a dice

const prompt = require("prompt-sync")();

let dice =prompt("Enter the number of  the dice: ");
let side=prompt("Enter the number of side ");


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
console.log(multDice(side, dice));
