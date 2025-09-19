
<p align="center">
     <h1 align="center"> Array </h1> 
</p>


# use of Spilec() method
syntax: array.splice(start, deleteCount, item1, item2, ...)

```javascript
 arr1 = [1,2,3,4,5,6,7,8,9];
arr1.splice(1,3,10,20,30); // removes 3 elements from index 2
console.log(arr1);
```

### Using Map(),filter()andreduce()
```javascript
/*
👉 Creates a new array by applying a function to each element.
👉array.map(callback(element, index, array))
👉 Does not modify the original array
*/
let arr7 = [1, 2, 3, 4, 5];
let arr8 = arr7.map((x) => x * 2);
console.log(arr8);
/*
👉 Creates a new array with elements that pass a condition (true/false).
👉 array.filter(callback(element, index, array));
👉 Does not modify the original array.
*/
let arr9 = arr7.filter((x) => x % 2 == 0);
console.log(arr9);

/*👉 Reduces the array to a single value by applying a function.
👉 array.reduce(callback(accumulator, currentValue)=> {....} ,initialValue);
👉 Does not modify the original array.
*/

let sum = arr7.reduce((acc, curr) => acc + curr, 0);
console.log(sum);

```
### Qustion : write a js program to how do you check  if  an element exists in an array or not
```javascript
let  arr10 = [1, 2, 3, 4, 5];
const finds=(arr10,ele)=>{
    for(let i=0; i<arr10.length; i++){
        if(arr10[i] === ele){
            return true;
        }
    }
    return false;

}
console.log(finds(arr10,3));
console.log(finds(arr10,8));
console.log(arr10.includes(3));
console.log(arr10.includes(8));
```

### Qustion : write a js program to how do you check   Index if  an element exists in an array or not

```javascript
let arr11 = [1, 2, 3, 4, 5];
const findINdex = (arr11, ele) => {
  for (let i = 0; i < arr11.length; i++) {
    if (arr10[i] === ele) {
      return i;
    }
  }
  return -1;
};
console.log(findINdex(arr11, 3));
console.log(findINdex(arr11, 8));
console.log(arr11.indexOf(3));
console.log(arr11.indexOf(8));

```




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

