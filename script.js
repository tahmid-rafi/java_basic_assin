// 1. Question  assinment


// 1
let carName = "Volvo";

 // 2
let firstName = "John";  // Variable name: firstName
let lname = "Doe";    // Variable values: "Doe"
let age = 35;            // Variable name and values: age = 35

//3
x = 10;
y = 5;
x *= y; // The value of x will now be 50

//4
      let length = 16; // data type: Number
     let lastName = "Johnson"; // data type: String

     const Hello = {
     firstName: "John",  
     lastName: "Doe"
 }; // data type: Object

//5
function myFunction() {
     alert("Hello World!");
}
// Call the function
     myFunction();

//6
// Create the object
const person = {
     name: "John",
     age: 50
};

// Access the object and show the alert
     alert(person.name + " is " + person.age);

//7
// go to HTML page or file

//8
//01
const cars = ["Volvo", "Jeep", "Mercedes"];
alert(cars.length); // This will alert the number of items in the 'cars' array

//02
const Brand = ["Volvo", "Jeep", "Mercedes"];
Brand[0] = "Ford"; // Change the first item
alert(Brand); // This will alert the updated array


//9
//01
let randomNumber = Math.random(); // Generates a random number between 0 (inclusive) and 1 (exclusive)
alert(randomNumber);

//02
let largestNumber = Math.max(10, 20);
alert(largestNumber); // This will alert 20

//03
let squareRoot = Math.sqrt(9);
alert(squareRoot); // This will alert 3


//10
//01
let x = 10;
let y = 5;

alert(x > y); // This will alert true because x is greater than y


//02
let aga = 16; // You can change this value to test

alert(aga < 18 ? "Too young" : "Old enough");


// 2. Question explanation and answer

//1
     function celsiusToFahrenheit(celsius) {
          return (celsius * 9/5) + 32;//+
}
     console.log(celsiusToFahrenheit(0)); // 32
     console.log(celsiusToFahrenheit(25)); // 77

//2
function isEven(num) {
     return num % 2 === 0; // Returns true if num is even, otherwise false
   }
   
   console.log(isEven(4)); // true
   console.log(isEven(7)); // false

//3
function sumTwoNumbers(a, b) {
     return a + b; // Return the sum of the two numbers
}

   console.log(sumTwoNumbers(3, 5)); // 8
   console.log(sumTwoNumbers(-1, 5)); // 4

//4
function findSmallestNum(arr) {
     return Math.min(...arr); // Find and return the smallest number in the array
}

   console.log(findSmallestNum([3, 5, 1, 9])); // 1
   console.log(findSmallestNum([-1, -5, 0, 10])); // -5


//5
function countVowels(str) {
let vowels = 'aeiouAEIOU'; // List of vowels (both lowercase and uppercase)
let count = 0; // Initialize counter for vowels

for (let char of str) {
     if (vowels.includes(char)) { // Check if character is a vowel
     count++; // Increment the counter if it's a vowel
     }
}

return count; // Return the final count of vowels
}

console.log(countVowels("hello world")); // 3
console.log(countVowels("Javascript")); // 3


//6
function getFirstElement(arr) {
     return arr[0]; // Return the first element of the array
}

   console.log(getFirstElement([1, 2, 3])); // 1
   console.log(getFirstElement(["a", "b", "c"])); // "a"

//7
function isArrayEmpty(arr) {
     return arr.length === 0; // Return true if the array is empty, otherwise false
}

   console.log(isArrayEmpty([])); // true
   console.log(isArrayEmpty([1, 2, 3])); // false


//8
function factorialize(num) {
     if (num === 0 || num === 1) return 1; // Base case: 0! and 1! are both 1
     return num * factorialize(num - 1); // Recursive case: n! = n * (n-1)!
}

   console.log(factorialize(5)); // 120
   console.log(factorialize(7)); // 5040


//9
function reverseString(str) {
     return str.split('').reverse().join(''); // Split the string, reverse it, and join it back
}

   console.log(reverseString("hello")); // "olleh"
   console.log(reverseString("world")); // "dlrow"


//10
function toLowerCase(str) {
     return str.toLowerCase(); // Convert the string to lowercase
}

   console.log(toLowerCase("HELLO WORLD")); // "hello world"
   console.log(toLowerCase("JavaScript")); // "javascript"


//11
function stringLength(str) {
     return str.length; // Return the length of the string
}

   console.log(stringLength("hello")); // 5
   console.log(stringLength("world")); // 5


//12
function mergeArrays(arr1, arr2) {
     return [...arr1, ...arr2]; // Merge the two arrays using the spread operator
}

   console.log(mergeArrays([1, 2, 3], [4, 5, 6])); // [1, 2, 3, 4, 5, 6]
   console.log(mergeArrays(["a", "b"], ["c", "d"])); // ["a", "b", "c", "d"]


//13
     function getLastElement(arr) {
     return arr[arr.length - 1]; // Access the last element of the array
}

   console.log(getLastElement([1, 2, 3])); // 3
   console.log(getLastElement(["a", "b", "c"])); // "c"


//14
function getFirstCharacter(str) {
     return str[0]; // Return the character at index 0
}

   console.log(getFirstCharacter("hello")); // "h"
   console.log(getFirstCharacter("world")); // "w"

//15
function sumArray(arr) {
     return arr.reduce((acc, current) => acc + current, 0); // Use reduce to sum up the array elements
}

   console.log(sumArray([1, 2, 3, 4])); // 10
   console.log(sumArray([-1, -2, -3, -4])); // -10
   console.log(sumArray([1.5, 2.5, 3.5])); // 7.5
