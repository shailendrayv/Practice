// Write  a Program of basic Calculator  that can perform addition , subtraction, multiplication , and division

const prompt = require("prompt-sync")();

let n1 = parseInt(prompt("Enter No1: "));
let n2 = parseInt(prompt("Enter No2: "));

function Cal(n1, n2) {
  let add = n1 + n2;
  let mul = n1 * n2;
  let sub = n1 - n2;
  let div = n1 / n2;

  return { add, mul, sub, div };
}
console.log(Cal(n1, n2));
