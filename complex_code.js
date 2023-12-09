// filename: complex_code.js

/**
 * This code demonstrates a complex implementation of a recursive function to generate the Fibonacci sequence
 * It includes error handling, memoization, and various helper functions
 * The Fibonacci sequence starts with 0 and 1, and each subsequent number is the sum of the two previous numbers
 */

// Function to calculate the Fibonacci sequence recursively
function fib(num) {
  // Check if num is a valid number greater than 0
  if (typeof num !== 'number' || num <= 0) {
    throw new Error("Invalid input! Number should be a positive integer.");
  }

  // Create memoization cache to store previously calculated Fibonacci numbers
  const fibCache = {};

  // Recursive helper function to calculate Fibonacci number for a given index
  function calculateFib(index) {
    // Base cases
    if (index === 0) return 0;
    if (index === 1) return 1;

    // Check cache for previously calculated value
    if (fibCache[index]) {
      return fibCache[index];
    }

    // Recursive calls to calculate Fibonacci numbers
    const result = calculateFib(index - 1) + calculateFib(index - 2);

    // Store the calculated value in cache for future use
    fibCache[index] = result;

    return result;
  }

  // Array to store the Fibonacci sequence
  const sequence = [];

  // Calculate each Fibonacci number up to num
  for (let i = 0; i < num; i++) {
    sequence.push(calculateFib(i));
  }

  return sequence;
}

// Define the number of elements to generate in the Fibonacci sequence
const numElements = 10;

// Call the Fibonacci generation function
const fibonacciSequence = fib(numElements);

// Print the generated Fibonacci sequence
console.log("Fibonacci Sequence:");
console.log(fibonacciSequence);

// Output:
// Fibonacci Sequence:
// [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]