//Write a program that buids a number guess game

const prompt = require("prompt-sync")();

const randomNo = Math.floor(Math.random() * 100) + 1;

let userInput = prompt("Please guess the number ,its betwwen 1 and 100 ");
userInput = parseInt(userInput);

while (userInput != randomNo) {
  if (userInput > randomNo) {
    if (userInput - randomNo > 5) {
      console.log("Your number is  too high ");
    } else {
      console.log("Your number is high but you are close!");
    }
  } else {
    if (randomNo - userInput > 5) {
      console.log("Your number is  too low ");
    } else {
      console.log("Your number is low but you are close!");
    }
  }
  userInput = prompt("Please guess again ");
}
console.log(randomNo);
