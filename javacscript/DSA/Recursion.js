/*
 Recusrion->Recursion is when a function calls itself directly or indirectly to solve a problem.

Every recursive function has two parts:
1.Base case → When to stop recursion (prevents infinite loop).
2.Recursive case → The function calls itself with a smaller subproblem.

*/

function fun(n) {
    if (n === 0) return ;
    console.log("fun",n);
    fun(n - 1);
}
fun(10); // This will cause a stack overflow error due to infinite recursion.


// write  a function to calculate factorial of a number using recursion
function factorial(n) {
    if (n === 0) return 1; // Base case
    return n * factorial(n - 1); // Recursive case
}
console.log(factorial(5)); // Output: 120

// write a function to calculate the nth fibonacci number using recursion
function fibonacci(n) {
    if (n <= 1) return n; // Base case
    return fibonacci(n - 1) + fibonacci(n - 2); // Recursive case
}
console.log(fibonacci(6)); // Output: 8

// write a function to calculate the sum of an array using recursion
function sumArray(arr, n) {
    if (n === 0) return 0; // Base case
    return arr[n - 1] + sumArray(arr, n - 1); // Recursive case
}
const arr = [1, 2, 3, 4, 5,6];
console.log(sumArray(arr, arr.length)); // Output: 15

//write  a  function the product of elements in an array using recursion
function productArray(arr, n) {
    if (n === 0) return 1; // Base case
    return arr[n - 1] * productArray(arr, n - 1); // Recursive case
}
const arr1 = [1, 2, 3, 4];
console.log(productArray(arr1, arr1.length)); // Output: 24


// write a  function  fibbonacci series using recursion
function fibonacci(n) {
    if (n < 2) return n;  // Base case
    return fibonacci(n - 1) + fibonacci(n - 2);  // Recursive case
}
console.log(fibonacci(6)); // 8














