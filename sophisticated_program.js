/*
Filename: sophisticated_program.js
Description: A sophisticated program demonstrating various advanced JavaScript concepts and techniques.
*/

// Class representing a Person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Method to greet the person
  greet() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
  }

  // Method to check if the person is an adult
  isAdult() {
    return this.age >= 18;
  }
}

// Class representing a Student, inherits from Person
class Student extends Person {
  constructor(name, age, grade) {
    super(name, age);
    this.grade = grade;
  }

  // Method to get the student's grade
  getGrade() {
    console.log(`I am in grade ${this.grade}.`);
  }
}

// Function to calculate the factorial of a number recursively
function factorial(n) {
  if (n <= 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

// Array of colors
const colors = ['red', 'green', 'blue'];

// Function to shuffle an array using Fisher-Yates algorithm
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Object representing a car
const car = {
  brand: 'Tesla',
  model: 'Model S',
  year: 2022,
  isElectric: true,
  startEngine() {
    console.log('Engine started.');
  }
};

// Asynchronous function to fetch data from an API
async function fetchData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

// Event listener for button click
document.getElementById('myButton').addEventListener('click', () => {
  console.log('Button clicked!');
});

// Main function
function main() {
  const person = new Person('John Doe', 25);
  person.greet();

  const student = new Student('Jane Smith', 17, 11);
  student.greet();
  student.getGrade();

  console.log(`Factorial of 5 is ${factorial(5)}`);

  const shuffledColors = shuffleArray(colors);
  console.log('Shuffled colors:', shuffledColors);

  car.startEngine();

  const apiUrl = 'https://api.example.com/data';
  fetchData(apiUrl)
    .then(data => console.log('Fetched data:', data))
    .catch(error => console.error('Error:', error));
}

main();