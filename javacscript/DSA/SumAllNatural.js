/*
Q.1. Sum of all natural numbers from 1 to n
sum of 1 to 5:15;
 */ 
//const prompt = require("prompt-sync")();

//let n=prompt("Enter a number:");
function sum(num){
    let sum=0;
    for(let i=1;i<=num;i++){
        sum=sum+i;
    }
    return sum;
}
console.log(sum(5));
