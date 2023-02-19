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

// problem 9: Write a function that takes an array of numbers as an argument and returns the sum of all the numbers in the array.

// es5 version

function sumArray(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

// reduce version
function sumArray(arr) {
  return arr.reduce(function (acc, cur) {
    return acc + cur;
  }, 0);
}

// es6 version
const sumArray = (arr) => {
  let sum = 0;
  for (let num of arr) {
    sum += num;
  }
  return sum;
};

// es6 version 2
const sumArray = (arr) => arr.reduce((acc, cur) => acc + cur, 0);

// Example usage:
console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15
console.log(sumArray([-1, 2, -3, 4, -5])); // Output: -3

/**
 * problem 10:
 * Write a function that takes an array of numbers as an argument and returns an object with the following properties:
 * sum: the sum of all the numbers in the array
 * average: the average of all the numbers in the array
 * isEven: true if all the numbers in the array are even, false otherwise
 *  */

// es5 version
function analyzeNumbers(arr) {
  var sum = arr.reduce(function (acc, cur) {
    return acc + cur;
  }, 0);

  var average = sum / arr.length;

  var isEven = arr.every(function (num) {
    return num % 2 === 0;
  });

  return { sum: sum, average: average, isEven: isEven };
}

// es6 version
const analyzeNumbers = (arr) => {
  const sum = arr.reduce((acc, cur) => acc + cur, 0);
  const average = sum / arr.length;
  const isEven = arr.every((num) => num % 2 === 0);
  return { sum, average, isEven };
};

// Example usage:
console.log(analyzeNumbers([2, 4, 6, 8])); // Output: { sum: 20, average: 5, isEven: true }
console.log(analyzeNumbers([1, 2, 3, 4, 5])); // Output: { sum: 15, average: 3, isEven: false }

/** problem 11:
 * Create a class Person that has the following properties:
 * name (string)
 * age (number)
 * gender (string)
 * It should have a method getDetails that returns a string with the person's name, age, and gender.
 */

// es5 version
function Person(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
}

Person.prototype.getDetails = function () {
  return (
    "Name: " + this.name + ", Age: " + this.age + ", Gender: " + this.gender
  );
};

// es6 version
class Person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}, Gender: ${this.gender}`;
  }
}

// Example usage:
const person = new Person("John", 30, "male");
console.log(person.getDetails()); // Output: "Name: John, Age: 30, Gender: male"

// problem 12: Write a function that takes an array of numbers as an argument and returns a new array with only the even numbers

// es5 version
function getEvenNumbers(arr) {
  var evenNumbers = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenNumbers.push(arr[i]);
    }
  }
  return evenNumbers;
}

// es6 version
const getEvenNumbers = (arr) => arr.filter((num) => num % 2 === 0);

// Example usage:
console.log(getEvenNumbers([1, 2, 3, 4, 5, 6])); // Output: [2, 4, 6]
console.log(getEvenNumbers([-2, -1, 0, 1, 2])); // Output: [-2, 0, 2]

/** problem 13: Create a class Student that extends the Person class. It should have the following properties:
name (string)
age (number) */

// es5 version
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.sayHello = function () {
  console.log(
    "Hello, my name is " + this.name + " and I'm " + this.age + " years old."
  );
};

function Student(name, age, studentId, major) {
  Person.call(this, name, age);
  this.studentId = studentId;
  this.major = major;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.showStudentInfo = function () {
  console.log(
    "I'm " +
      this.name +
      ", a " +
      this.major +
      " major student with student ID " +
      this.studentId +
      "."
  );
};

// es6 version
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(
      `Hello, my name is ${this.name} and I'm ${this.age} years old.`
    );
  }
}

class Student extends Person {
  constructor(name, age, studentId, major) {
    super(name, age);
    this.studentId = studentId;
    this.major = major;
  }

  showStudentInfo() {
    console.log(
      `I'm ${this.name}, a ${this.major} major student with student ID ${this.studentId}.`
    );
  }
}

// Example usage:
const john = new Student("John", 20, "1234", "Computer Science");
john.sayHello(); // Output: Hello, my name is John and I'm 20 years old.
john.showStudentInfo(); // Output: I'm John, a Computer Science major student with student ID 1234.
