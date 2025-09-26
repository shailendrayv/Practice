/*
Searching = finding the location of an element in a data structure (array, string, tree, graph, etc.).

There are mainly two categories:
1.Linear Search (sequential search)
2.Binary Search (divide & conquer)

*/
/*
1.Linear Search (sequential search)->Linear Search (aka Sequential Search) is the simplest searching algorithm.
.We check each element one by one until we find the target.
.Works on unsorted arrays.
.Time Complexity: O(n) in worst and average case, O(1) in best case.
.Space Complexity: O(1) (in-place).
.

🔹 How it Works

Start from the first element.
Compare it with the target.
If it matches → return the index.
If it doesn’t → move to the next element.
Repeat until the end of the array.
If not found → return -1.

*/

// write a function to perform linear search
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; // Return the index if found
        }
    }
    return -1; // Return -1 if not found
}
const array = [3, 5, 2, 4, -6 ];
const target = 4;
console.log(linearSearch(array, target));// Output: 3 
console.log(linearSearch(array, 10));// Output: -1 
console.log(array.includes(3))
console.log(array.indexOf(4))
console.log(array.find((num)=> num > 0));
console.log(array.findIndex((num) => num < 0));

/*
2.Binary Search (divide & conquer) ->Binary Search is an efficient algorithm for finding an item from a sorted array.
.It works by repeatedly dividing the search interval in half.
.Time Complexity: O(log n) in worst and average case, O(1) in best case.
.Space Complexity: O(1) (in-place).
.

🔹 How Binary Search Works

Find the middle element of the array.
If the middle element is the target → return its index.
If the target is smaller, search the left half.
If the target is larger, search the right half.
Repeat until found or search range becomes empty.
*/

// write a function to perform binary search
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid; // Return the index if found
        } else if (arr[mid] < target) {
            left = mid + 1; // Search in the right half
        } else {
            right = mid - 1; // Search in the left half
        }
    }
    return -1; // Return -1 if not found
}
const sortedArray = [-6, 2, 3, 4, 5 ];

console.log(binarySearch(sortedArray, 4));
