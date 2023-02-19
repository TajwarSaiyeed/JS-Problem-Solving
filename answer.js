// problem 1: Write a function that takes two numbers as arguments and returns their sum.

// es5 version
function add(num1, num2) {
  return num1 + num2;
}

// es6 version
const add = (num1, num2) => num1 + num2;

// problem 2: Write a function that takes an array of numbers as an argument and returns the largest number in the array.

// es5 version
function findLargest(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

// es6 version
const findLargest = (arr) => Math.max(...arr);

// problem 3: Write a function that takes a string as an argument and returns the string in reverse order

// es5 version
function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

// es6 version
const reverseString = (str) => str.split("").reverse().join("");

// problem 4: Write a function that takes a number as an argument and returns the factorial of that number.

// es5 version
function factorial(num) {
  let result = 1;
  for (let i = 2; i <= num; i++) {
    result *= i;
  }
  return result;
}

// es6 version
const factorial = (num) => {
  let result = 1;
  for (let i = 2; i <= num; i++) {
    result *= i;
  }
  return result;
};

// problem 5: Write a function that takes an array of strings as an argument and returns the longest string in the array.

// es5 version
function findLongestString(arr) {
  var longestString = "";
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].length > longestString.length) {
      longestString = arr[i];
    }
  }
  return longestString;
}

// es6 version 1 (reduce)
const findLongestString = (arr) =>
  arr.reduce((a, b) => (a.length > b.length ? a : b));

// es6 version 2 (forEach)
const findLongestString2 = (arr) => {
  let longestString = "";
  arr.forEach((str) => {
    if (str.length > longestString.length) {
      longestString = str;
    }
  });
  return longestString;
};

// problem 6: Write a function that takes an array of numbers as an argument and returns the array in reverse order.

// es5 version
function reverseArray(arr) {
  var reversed = [];
  for (var i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  return reversed;
}

// es6 version 1
const reverseArray = (arr) => arr.reverse();

// es6 version 2
const reverseArray = (arr) => {
  const copy = [...arr];
  const reversed = [];
  while (copy.length) {
    reversed.push(copy.pop());
  }
  return reversed;
};

// Example usage:
console.log(reverseArray([1, 2, 3, 4, 5])); // Output: [5, 4, 3, 2, 1]

// problem 7: Write a function that takes an array of numbers as an argument and returns the array in sorted order.

// es5 version
function sortArray(arr) {
  return arr.sort(function (a, b) {
    return a - b;
  });
}

// es6 version
const sortArray = (arr) => arr.sort((a, b) => a - b);

// Example usage:
console.log(sortArray([5, 2, 8, 3, 1])); // Output: [1, 2, 3, 5, 8]

// es6 es5
function sortArray(arr) {
  return arr.sort(function (a, b) {
    return a.number - b.number;
  });
}

// Example usage:
console.log(
  sortArray([
    { number: 5 },
    { number: 2 },
    { number: 8 },
    { number: 3 },
    { number: 1 },
  ])
); // Output: [{number: 1}, {number: 2}, {number: 3}, {number: 5}, {number: 8}]

// problem 8: Write a function that takes an array of strings as an argument and returns the array in sorted order.

// es5 version
function sortArray(arr) {
  return arr.sort(function (a, b) {
    return a.localeCompare(b);
  });
}

// es6 version
const sortArray = (arr) => arr.sort((a, b) => a.localeCompare(b));

// Example usage:
console.log(sortArray(["cat", "dog", "apple", "zebra", "banana"])); // Output: ['apple', 'banana', 'cat', 'dog', 'zebra']
