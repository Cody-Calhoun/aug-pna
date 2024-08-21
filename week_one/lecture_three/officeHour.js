let arr = [1, 2, 3, 4, 6, 7, 8, 9, 5];

// function printArray(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i]);
//     }
// }

function findValue(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            return "Found it!";
        }
    }
    return -1;
}

console.log(findValue(arr, 5));

// console.time(printArray);
// printArray(arr);
// console.timeEnd(printArray);


// Big O notation:
// Time and Space complexity is a tool to measure the efficiency of an algorithm.
// Time complexity is a measure of how fast an algorithm runs.
// Space complexity is a measure of how much memory an algorithm uses.

// Time complexity
// O(1) - Constant time complexity
// O(log n) - Logarithmic time complexity
// O(n) - Linear time complexity
// O(n log n) - Linearithmic time complexity
// O(n^2) - Quadratic time complexity
// O(2^n) - Exponential time complexity
// O(n!) - Factorial time complexity

// Space complexity
// O(1) - Constant space complexity
// O(log n) - Logarithmic space complexity
// O(n) - Linear space complexity
// O(n log n) - Linearithmic space complexity
// O(n^2) - Quadratic space complexity
// O(2^n) - Exponential space complexity
// O(n!) - Factorial space complexity

// 1. What is the time complexity of the following code?
function logUpTo(n) {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}


