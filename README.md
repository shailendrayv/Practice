### Question 1: write  a  js program to Ascending order and Descending order of an array

```javascript
let arr6 = [5, 3, 8, 1, 2];
arr6.sort()
arr6.reverse();
console.log(arr6);
arr6.sort((a,b)=>b-a);
console.log(arr6);
```
### Ques2; Write a program to fibonaccis number
```javascript
function  fibonacci(n) {
    let a = 0, b = 1, nextTerm;
    console.log('Fibonacci Series:');
    for (let i = 1; i <= n; i++) {
        console.log(a);
        nextTerm = a + b;
        a = b;
        b = nextTerm;
    }
}
fibonacci(10);

//Second Method

var fib = function (n) {
  var a = 0,
    b = 1,
    temp;
  if (n < 2) {
    return n;
  }
  for (var i = 2; i <= n; i++) {
    temp = a + b;
    a = b;
    b = temp;
  }
  return temp;
};
console.log(fib(5));

```
