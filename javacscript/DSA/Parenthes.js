//write a program that checks if a given string of parentheses is  balanced and well-formed
 

 function isBalanced(str) {
  let stack = [];

  for (let char of str) {
    if (char === "(") {
      stack.push(char); // push opening
    } else if (char === ")") {
      if (stack.length === 0) {
        return false; // closing without opening
      }
      stack.pop(); // pop matching opening
    }
  }
  // if stack is empty, all parentheses matched properly
  return stack.length === 0;
}

// Test cases
console.log(isBalanced("(()())"));   // true ✅
console.log(isBalanced("()()"));     // true ✅
console.log(isBalanced(")("));       // false ❌
console.log(isBalanced("(()"));      // false ❌
console.log(isBalanced("())(()"));   // false ❌
console.log(isBalanced("[]"));   // true

