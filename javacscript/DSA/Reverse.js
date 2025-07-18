// Reverse  Strings in JavaScript
function reverse(str) {
    return String(str).split('').reverse().join('');
}

console.log(reverse("Shailendra"));  // Output: "ardneliahS"
console.log(reverse(12334445));      // Output: "54443321"


// factorial of a number
let a=prompt("Enter fact ");
function cal(a){
      if(a<0){
            throw new Error("not less than Zero");
        }
    let fact=1;
    for(let i=1;i<=a;i++){
      
        fact=fact*i;
    }
    return fact;
}
console.log(cal(a));