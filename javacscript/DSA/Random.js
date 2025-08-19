// write  a program that generates a random number
const prompt = require("prompt-sync")();

const num = prompt("Enter the number ");
function Random(){
    return Math.floor((Math.random()*num)+1)
}
console.log(Random(num));


