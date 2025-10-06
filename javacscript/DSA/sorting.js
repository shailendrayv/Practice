/*
sorting algorithms in javascript-Sorting = arranging elements of a list/array in a particular order (usually ascending or descending).
.Helps in searching, data analysis, and efficient algorithms.
Examples: [5, 2, 9, 1] → [1, 2, 5, 9] (ascending order)


*/

// Sort an array
const arr = [-2, -7, 1000, 5];
console.log(arr.sort((a, b) => a - b)); //[-7, -2, 5, 1000]
console.log(arr.sort((a, b) => b - a)); //[1000, 5, -2, -7]

const strArr = ["apple", "orange", "banana", "grape"];
console.log(strArr.sort()); //['apple', 'banana', 'grape', 'orange']
console.log(strArr.sort().reverse()); //['orange', 'grape', 'banana', 'apple']

// Sort a sorting
const str = "javascript";
const sortedStr = str.split("").sort().join("");
console.log(sortedStr); // 'aacijprstv'

//bubble sort

const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    let swapped;
    do {
      for (let j = 0; j < arr.length - i - 1; j++) {
        if (arr[i] > arr[i + 1]) {
          // let temp = arr[i];
          // arr[i]=arr[i+1];
          // arr[i+1]=temp;
          [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        }
      }
    } while (swapped);
  }
  return arr;
};
console.log(bubbleSort(arr)); 

//selection sort
function selectionSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        // swap
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
    return arr;
}

console.log(selectionSort([5, 3, 8, 4, 2])); // [2, 3, 4, 5, 8]



//insertion sort
function insertionSort(arr) {
    let n = arr.length;
    for (let i = 1; i < n; i++) {
        let key = arr[i];
        let j = i - 1;
        // Shift larger elements to the right
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key; // place key in correct spot
    }
    return arr;
}

console.log(insertionSort([5, 3, 8, 4, 2])); // [2, 3, 4, 5, 8]
