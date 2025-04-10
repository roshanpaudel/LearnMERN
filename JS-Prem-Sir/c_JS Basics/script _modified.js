// SECTION: Comments and Basic Execution

// console.log("Hellow world!"); // This line would have outputted "Hellow world!" to the console.
// alert("hi there click ok to complete my executioin"); // This line would have displayed an alert box.

/*
Multi-line comment:
This section demonstrates how to use comments to annotate code.
*/

// SECTION: Variables and Data Types

// Variable declaration and assignment using var, let, and const.
// var oldVariableName; // Commented out: Declaring a variable using 'var' (older syntax).
// oldVariableName = "Prem Acharya"; // Commented out: Assigning a value to the 'var' variable.
let changeableVariableName = "Sydney"; // Declaring and initializing a variable using 'let' (block-scoped).

console.log(changeableVariableName); // Output: Sydney

// changeableVariableName = "Sam"; // Commented out: Changing the value of a 'let' variable.

const constantVariableName = 5; // Declaring a constant variable using 'const' (block-scoped, cannot be reassigned).
console.log(constantVariableName); // Output: 5

// Demonstrating case sensitivity in variable names.
let firstVariable = "Prem";
let FirstVariable = "Prem";
let ALLCAPS_VARIABLE = "Prem";
let camelCaseVariable = "Prem";

// SECTION: Arithmetic Operations

let numberA = 5;
const numberB = 2;
const numberC = numberB;

// Arithmetic operations and their results.
const additionResult = numberA + numberB + numberC; // Addition
console.log("Addition:", additionResult); // Output: Addition: 9

const subtractionResult = numberA - numberB; // Subtraction
console.log("Subtraction:", subtractionResult); // Output: Subtraction: 3

const multiplicationResult = numberA * numberB; // Multiplication
console.log("Multiplication:", multiplicationResult); // Output: Multiplication: 10

const exponentiationResult = numberA ** numberB; // Exponentiation (ES2016)
console.log("Exponentiation:", exponentiationResult); // Output: Exponentiation: 25

const divisionResult = numberA / numberB; // Division
console.log("Division:", divisionResult); // Output: Division: 2.5

const modulusResult = numberA % numberB; // Modulus (remainder)
console.log("Modulus:", modulusResult); // Output: Modulus: 1

// Increment and decrement operators.
console.log(++numberA); // Increment 'a' before outputting. Output: 6
console.log(numberA); // Output the incremented value of 'a'. Output: 6

// SECTION: Comparisons

const value1 = 5;
const value2 = "5";

// Comparison operators.
console.log("value1 == value2:", value1 == value2); // Loose equality (type coercion). Output: true
console.log("value1 === value2:", value1 === value2); // Strict equality (no type coercion). Output: false
console.log("value1 >= value2:", value1 >= value2); // Greater than or equal to. Output: true
console.log("value1 <= value2:", value1 <= value2); // Less than or equal to. Output: true

// SECTION: Data Types

// Primitive data types.
const stringValue = "Prem Acharya";
console.log(typeof stringValue, stringValue); // Output: string Prem Acharya

const numberValue = 3456;
console.log(typeof numberValue, numberValue); // Output: number 3456

const booleanValue = false;
console.log(typeof booleanValue, booleanValue); // Output: boolean false

const undefinedValue = undefined;
console.log(typeof undefinedValue, undefinedValue); // Output: undefined undefined

const nullValue = null;
console.log(typeof nullValue, nullValue); // Output: object null

let userString = "prem";
console.log(userString); // Output: prem

const stringCopy = userString;
console.log(stringCopy); // Output: prem

userString = "Sam";
console.log(userString); // Output: Sam
console.log(stringCopy); // Output: prem (strings are passed by value)

// Reference data types (objects).
const userObject = {
  firstName: "Prem",
  numericValue: 34,
};
console.log(userObject); // Output: { firstName: 'Prem', numericValue: 34 }

const objectReference = userObject; // Copying the object reference.
console.log(objectReference); // Output: { firstName: 'Prem', numericValue: 34 }

userObject.firstName = "Sam"; // Modifying the object.
console.log(userObject); // Output: { firstName: 'Sam', numericValue: 34 }
console.log(objectReference); // Output: { firstName: 'Sam', numericValue: 34 } (objects are passed by reference)

// SECTION: Math Object

console.log("Math.PI:", Math.PI); // Output: Math.PI: 3.141592653589793

// Math object methods.
console.log("Math.round(4.7):", Math.round(4.7)); // Output: Math.round(4.7): 5
console.log("Math.round(4.5):", Math.round(4.5)); // Output: Math.round(4.5): 5
console.log("Math.round(4.4):", Math.round(4.4)); // Output: Math.round(4.4): 4
console.log("Math.pow(8, 2):", Math.pow(8, 2)); // Output: Math.pow(8, 2): 64
console.log("Math.pow(3, 3):", Math.pow(3, 3)); // Output: Math.pow(3, 3): 27
console.log("Math.sqrt(64):", Math.sqrt(64)); // Output: Math.sqrt(64): 8
console.log("Math.ceil(4.4):", Math.ceil(4.4)); // Output: Math.ceil(4.4): 5
console.log("Math.ceil(4.1):", Math.ceil(4.1)); // Output: Math.ceil(4.1): 5
console.log("Math.floor(4.7):", Math.floor(4.7)); // Output: Math.floor(4.7): 4
console.log("Math.floor(4.9):", Math.floor(4.9)); // Output: Math.floor(4.9): 4
console.log(
  "Math.min(0, 150, 30, 20, -8, -200):",
  Math.min(0, 150, 30, 20, -8, -200)
); // Output: Math.min(0, 150, 30, 20, -8, -200): -200
console.log(
  "Math.max(0, 150, 30, 20, -8, -200):",
  Math.max(0, 150, 30, 20, -8, -200)
); // Output: Math.max(0, 150, 30, 20, -8, -200): 150
console.log("Math.random() * 100:", Math.round(Math.random() * 100)); // Output: Random number between 0 and 100

// SECTION: Logical Operators and Conditional Statements

// Truthy: true, 2 , -4, " d", {}, [], ()=>{}
// Falsy : false, 0, NaN, "", null, undefined
// Logical operators and conditional statements.
const logicalNot = !"hi there";
console.log(logicalNot); // Output: false

// if (logicalNot) {
//   console.log("you pass through the  if condition");
// }

const ageValue = 0;
const vipStatus = true;

// if (ageValue) {
//   console.log("Welcome");
// }

const orValue = ageValue || "N/A";
console.log(orValue); // Output: N/A

// ageValue < 50 && console.log("Welcome");

if ((ageValue >= 18 && ageValue < 50) || vipStatus === true) {
  console.log("Welcome to the coding party!"); // Output: Welcome to the coding party!
} else {
  console.log("Go home kido!");
}

const petType = "cat";

if (petType === "cat") {
  console.log("Meowww"); // Output: Meowww
} else if (petType === "dog") {
  console.log("Wooff");
} else if (petType === "cow") {
  console.log("Mooowowow");
} else {
  console.log(";kjdfa hakhfkahsdkfhasw aousdfhka sadlflsdk");
}

const petSwitchType = "dogasdf ";

switch (petSwitchType) {
  case "cat":
    console.log("Meowww");
    break;
  case "dog":
    console.log("Wooff");
    break;
  case "cow":
    console.log("Mooowowow");
    break;
  default:
    console.log(";kjdfa hakhfkahsdkfhasw aousdfhka sadlflsdk"); // Output: ;kjdfa hakhfkahsdkfhasw aousdfhka sadlflsdk
}

const ageTernaryValue = 30;
ageTernaryValue < 50 ? console.log("welcom") : console.log("Go home"); // Output: welcom

// SECTION: Numbers and Strings

// Numbers and string manipulation.
const largeNumber = 30580984843456;
console.log("Large Number:", largeNumber); // Output: Large Number: 30580984843456

const stringNumber = "52.442a";
console.log("parseInt:", parseInt(stringNumber)); // Output: parseInt: 52
console.log("parseFloat:", parseFloat(stringNumber)); // Output: parseFloat: 52.442
console.log("isNaN:", isNaN(parseFloat(stringNumber))); // Output: isNaN: false

const exampleString = 'Hi there this is "Prem Acharya", and I live in Sydne!';
console.log("Original String:", exampleString); // Output: Original String: Hi there this is "Prem Acharya", and I live in Sydne!
console.log("Length:", exampleString.length); // Output: Length: 52
console.log("toLowerCase:", exampleString.toLowerCase()); // Output: toLowerCase: hi there this is "prem acharya", and i live in sydne!
console.log("toUpperCase:", exampleString.toUpperCase()); // Output: toUpperCase: HI THERE THIS IS "PREM ACHARYA", AND I LIVE IN SYDNE!
console.log("charAt[20]:", exampleString[20]); // Output: charAt[20]: A
console.log("charAt(20):", exampleString.charAt(20)); // Output: charAt(20): A
console.log("indexOf('e'):", exampleString.indexOf("e")); // Output: indexOf('e'): 4
console.log("lastIndexOf('there'):", exampleString.lastIndexOf("there")); // Output: lastIndexOf('there'): 3
console.log("replace:", exampleString.replace("Prem", "Sam")); // Output: replace: Hi there this is "Sam Acharya", and I live in Sydne!
console.log("replaceAll:", exampleString.replaceAll("i", "u")); // Output: replaceAll: Hu there thus us "Prem Acharya", and U luve un Sydne!
console.log("slice(3, 5):", exampleString.slice(3, 5)); // Output: slice(3, 5): th
console.log("slice(3):", exampleString.slice(3)); // Output: slice(3): there this is "Prem Acharya", and I live in Sydne!
console.log("slice(-3, -2):", exampleString.slice(-3, -2)); // Output: slice(-3, -2): d
console.log("substring(3, 5):", exampleString.substring(3, 5)); // Output: substring(3, 5): th
console.log("includes('Prem'):", exampleString.includes("Prem")); // Output: includes('Prem'): true
console.log("search('Prsdem'):", exampleString.search("Prsdem")); // Output: search('Prsdem'): -1

// Array manipulation and iteration in JavaScript

// 1. Array Creation and Basic Operations
const mixedArray = [
  "apple",
  42,
  true,
  null,
  undefined,
  [1, 2, 3],
  { key: "value" },
  function () {
    return "hello";
  },
];
console.log(mixedArray); // Logs the array with mixed data types
// Output: [ 'apple', 42, true, null, undefined, [ 1, 2, 3 ], { key: 'value' }, [Function (anonymous)] ]

// Accessing array elements
console.log(mixedArray.length); // Logs the length of the array
// Output: 8
console.log(mixedArray[0]); // Logs the first element ("apple")
// Output: apple

// Modifying arrays
mixedArray.push("new element"); // Adds "new element" to the end
mixedArray.unshift("first element"); // Adds "first element" to the beginning
mixedArray.splice(2, 0, "inserted element"); // Inserts "inserted element" at index 2

// Removing elements
const popped = mixedArray.pop(); // Removes and returns the last element
const shifted = mixedArray.shift(); // Removes and returns the first element
const spliced = mixedArray.splice(3, 2); // Removes 2 elements starting from index 3
console.log("popped:", popped, "shifted:", shifted, "spliced:", spliced);
// Output: popped: new element shifted: first element spliced: [ 42, true ]

// Array transformations
const stringified = mixedArray.toString(); // Converts array to comma-separated string
const joined = mixedArray.join(" - "); // Joins array elements with " - "
console.log("stringified:", stringified, "joined:", joined);
// Output: stringified: apple,inserted element,null,undefined,[1,2,3],{key:value},function (){ return "hello"; } joined: apple - inserted element - null - undefined - [1,2,3] - [object Object] - function (){ return "hello"; }

// Searching arrays
const index = mixedArray.indexOf(42); // Returns the index of 42
const includes = mixedArray.includes(true); // Returns true if the array includes true
console.log("index:", index, "includes:", includes);
// Output: index: -1 includes: false

// Sorting and reversing arrays (demonstrated with a numbers array)
const numbers = [5, 2, 9, 1, 5, 6];
numbers.sort((a, b) => a - b); // Sorts in ascending order
console.log("sorted:", numbers);
// Output: sorted: [ 1, 2, 5, 5, 6, 9 ]
numbers.reverse(); // Reverses the sorted array
console.log("reversed:", numbers);
// Output: reversed: [ 9, 6, 5, 5, 2, 1 ]

// 2. Loops

// For loop
for (let i = 0; i < 5; i++) {
  console.log("for loop:", i); // Logs numbers from 0 to 4
}
// Output:
// for loop: 0
// for loop: 1
// for loop: 2
// for loop: 3
// for loop: 4

// While loop
let j = 0;
while (j < 3) {
  console.log("while loop:", j); // Logs numbers from 0 to 2
  j++;
}
// Output:
// while loop: 0
// while loop: 1
// while loop: 2

// Do-while loop
let k = 0;
do {
  console.log("do-while loop:", k); // Logs numbers from 0 to 2
  k++;
} while (k < 3);
// Output:
// do-while loop: 0
// do-while loop: 1
// do-while loop: 2

// Break and continue
for (let l = 0; l < 5; l++) {
  if (l === 2) {
    continue; // Skips the iteration when l is 2
  }
  if (l === 4) {
    break; // Exits the loop when l is 4
  }
  console.log("break/continue:", l); // Logs 0, 1, 3
}
// Output:
// break/continue: 0
// break/continue: 1
// break/continue: 3

// 3. Array-Specific Loops

const fruits = ["apple", "banana", "orange"];

// For...of loop
for (const fruit of fruits) {
  console.log("for...of:", fruit.toUpperCase()); // Logs uppercase fruits
}
// Output:
// for...of: APPLE
// for...of: BANANA
// for...of: ORANGE

// ForEach loop
fruits.forEach((fruit, index) => {
  console.log("forEach:", index, fruit); // Logs index and fruit
});
// Output:
// forEach: 0 apple
// forEach: 1 banana
// forEach: 2 orange

// Map loop (creates a new array with transformed elements)
const mappedFruits = fruits.map((fruit) => {
  return "SKU-" + fruit; // Adds "SKU-" to each fruit
});
console.log("mapped fruits:", mappedFruits);
// Output: mapped fruits: [ 'SKU-apple', 'SKU-banana', 'SKU-orange' ]

// Filter loop (creates a new array with filtered elements)
const filteredFruits = fruits.filter((fruit) => {
  return fruit.includes("a"); // Filters fruits containing "a"
});
console.log("filtered fruits:", filteredFruits);
// Output: filtered fruits: [ 'apple', 'banana' ]

// Reduce loop (reduces array to a single value)
const numbersToSum = [10, 20, 30];
const sum = numbersToSum.reduce((accumulator, currentValue) => {
  return accumulator + currentValue; // Sums all numbers
}, 0); // initial accumulator value is 0
console.log("sum:", sum);
// Output: sum: 60

// Every loop (checks if every element satisfies a condition)
const allLongEnough = fruits.every((fruit) => {
  return fruit.length > 3; // Checks if all fruits have length > 3
});
console.log("all long enough:", allLongEnough);
// Output: all long enough: true

// Find loop (returns the first element that satisfies a condition)
const foundFruit = fruits.find((fruit) => {
  return fruit.startsWith("b"); // Finds the first fruit starting with "b"
});
console.log("found fruit:", foundFruit);
// Output: found fruit: banana

// Fill loop.
const filledArray = new Array(5).fill("filled");
console.log("filled array:", filledArray);
// Output: filled array: [ 'filled', 'filled', 'filled', 'filled', 'filled' ]

// Challenge: Array of unique random numbers

function generateUniqueRandomNumbers(count, max) {
  const randomNumbers = [];
  while (randomNumbers.length < count) {
    const randomNumber = Math.floor(Math.random() * max);
    if (!randomNumbers.includes(randomNumber)) {
      randomNumbers.push(randomNumber);
    }
  }
  return randomNumbers;
}

const uniqueRandoms = generateUniqueRandomNumbers(10, 50);
console.log("unique randoms:", uniqueRandoms);
// Output: (Example, will vary due to randomness) unique randoms: [ 12, 34, 1, 45, 23, 8, 39, 17, 28, 41 ]

// Challange #2 create unique array 50 numbers rang between 1 and 100 programmatically

const uniqueArg = [];
for (let i = 0; uniqueArg.length < 50; i++) {
  //only unique data
  const num = Math.floor(Math.random() * 100) + 1; // Generate random number between 1 and 100
  if (!uniqueArg.includes(num)) {
    // Check if the number is already in the array
    uniqueArg.push(num); // Add the number if it's unique
  }
  //console.log(i); // Optional: Log the iteration number (commented out)
}
console.log(uniqueArg); // Log the final unique array
// Output (example): [ 78, 23, 56, 12, 90, 34, 67, 1, 88, 45, 2, 79, 13, 57, 91, 35, 68, 3, 89, 46, 4, 80, 14, 58, 92, 36, 69, 5, 81, 47, 6, 82, 15, 59, 93, 37, 70, 7, 83, 48, 8, 84, 16, 60, 94, 38, 71, 9, 85, 49 ]

//Good LUCK

//// JS- Data manipulation

const person = {
  name: "Sam smith",
  phone: 87634567,
  isMarried: true,
  hasPet: undefined,
  gender: null,
  skills: ["Html", "css", "Javascript", ["flexbox", "grid system"]],
  parents: {
    f: "Harry",
    m: "Merry",
  },
  bio: () => {
    return "hi there";
  },
};

//Read data
const data1 = person.name; // Accessing the 'name' property
const data2 = person["parents"]; // Accessing the 'parents' property using bracket notation
const data3 = person.skills[3][1]; // Accessing the nested array element 'grid system'
const data4 = person.parents.m; // Accessing 'm' property of the 'parents' object
const data5 = person.bio(); // Calling the 'bio' function

//update data
person.name = "Premo"; // Updating the 'name' property
person.address = "1 George St Sydney"; // Adding a new 'address' property
person.parents.md = "2020"; // Adding a new 'md' property to the 'parents' object

person.skills.push("hehehe"); // Adding "hehehe" to the skills array
person.skills[3].push("hehehe"); // Adding "hehehe" to the nested array within skills

// Delete data
person.phone = undefined; // Setting 'phone' to undefined (not recommended for deletion)
delete person.phone; // Deleting the 'phone' property
person.skills.pop(); // Removing the last element from the 'skills' array
delete person.parents.f; // Deleting the 'f' property from the 'parents' object

console.log(person); // Log the modified person object
// Output: { name: 'Premo', isMarried: true, hasPet: undefined, gender: null, skills: [ 'Html', 'css', 'Javascript', [ 'flexbox', 'grid system', 'hehehe' ] ], parents: { m: 'Merry', md: '2020' }, bio: [Function: bio], address: '1 George St Sydney' }
console.log(data1, data2, data3, data4, data5); // Log the accessed data
// Output: Sam smith { f: 'Harry', m: 'Merry' } grid system Merry hi there

//Destructuring: const {name}= obj
person.room = undefined;

///Default
const { name, phone, parents, room = "N/A" } = person; // Destructuring with a default value for 'room'

console.log(name, phone, room); // Log destructured values
// Output: Premo undefined N/A

///Rest
const {
  name: personName,
  phone: personPhone,
  parents: personParents,
  ...rest
} = person; // Destructuring with aliases and rest operator

console.log(rest); // Log the rest of the properties
// Output: { isMarried: true, hasPet: undefined, gender: null, skills: [ 'Html', 'css', 'Javascript', [ 'flexbox', 'grid system', 'hehehe' ] ], parents: { m: 'Merry', md: '2020' }, bio: [Function: bio], address: '1 George St Sydney', room: undefined }

/// Spread

const career = {
  title: "sof. eng.",
  salary: "150K",
};

const combo = { ...career, ...person }; // Spreading objects to create a new combined object
console.log(combo); // Log the combined object
// Output: { title: 'sof. eng.', salary: '150K', name: 'Premo', isMarried: true, hasPet: undefined, gender: null, skills: [ 'Html', 'css', 'Javascript', [ 'flexbox', 'grid system', 'hehehe' ] ], parents: { m: 'Merry', md: '2020' }, bio: [Function: bio], address: '1 George St Sydney', room: undefined }

// Copying object: shallow vs Deep copy
const person2 = {
  name: "Sam smith",
  phone: 87634567,
  isMarried: true,
  hasPet: undefined,
  gender: null,
  skills: ["Html", "css", "Javascript", ["flexbox", "grid system"]],
  parents: {
    f: "Harry",
    m: "Merry",
  },
  bio: () => {
    return "hi there";
  },
};

// const p1 = person2; // Shallow copy (references the same object)
// const p1 = Object.assign({}, person2); // Shallow copy (creates a new object, but nested objects are still references)
const p1 = { ...person2 }; // Shallow copy (similar to Object.assign)

person2.parents.f = "Prem"; // Modifying the nested object in the original object

console.log(person2); // Log the modified original object
// Output: { name: 'Sam smith', phone: 87634567, isMarried: true, hasPet: undefined, gender: null, skills: [ 'Html', 'css', 'Javascript', [ 'flexbox', 'grid system' ] ], parents: { f: 'Prem', m: 'Merry' }, bio: [Function: bio] }
console.log(p1); // Log the copied object (nested object is also modified)
// Output: { name: 'Sam smith', phone: 87634567, isMarried: true, hasPet: undefined, gender: null, skills: [ 'Html', 'css', 'Javascript', [ 'flexbox', 'grid system' ] ], parents: { f: 'Prem', m: 'Merry' }, bio: [Function: bio] }

const p2 = JSON.parse(JSON.stringify(person2)); // Deep copy (creates a completely independent copy)

person2.parents.f = "Harry"; // Modifying the nested object in the original object

console.log(person2); // Log the modified original object
// Output: { name: 'Sam smith', phone: 87634567, isMarried: true, hasPet: undefined, gender: null, skills: [ 'Html', 'css', 'Javascript', [ 'flexbox', 'grid system' ] ], parents: { f: 'Harry', m: 'Merry' }, bio: [Function: bio] }
console.log(p2); // Log the deep copied object (nested object is not modified)
// Output: { name: 'Sam smith', phone: 87634567, isMarried: true, hasPet: undefined, gender: null, skills: [ 'Html', 'css', 'Javascript', [ 'flexbox', 'grid system' ] ], parents: { f: 'Prem', m: 'Merry' }, bio: [Function: bio] }

for (let key in person2) {
  // Iterating through the object's properties
  console.log(key, person2[key]); // Log the key and value
}
// Output:
// name Sam smith
// phone 87634567
// isMarried true
// hasPet undefined
// gender null
// skills [ 'Html', 'css', 'Javascript', [ 'flexbox', 'grid system' ] ]
// parents { f: 'Harry', m: 'Merry' }
// bio [Function: bio]

const personArg = Object.entries(person2); // Getting an array of key-value pairs
// const personArg = Object.keys(person2); // Getting an array of keys
// const personArg = Object.values(person2); // Getting an array of values

console.log(personArg); // Log the array of key-value pairs
// Output: [ [ 'name', 'Sam smith' ], [ 'phone', 87634567 ], [ 'isMarried', true ], [ 'hasPet', undefined ], [ 'gender', null ], [ 'skills', [ 'Html', 'css', 'Javascript', [ 'flexbox', 'grid system' ] ] ], [ 'parents', { f: 'Harry', m: 'Merry' } ], [ 'bio', [Function: bio] ] ]

///JS- Function
function sayHi(name, add = "na") {
  // Function with a default parameter
  const str = `
    Hello there, this is ${name} , nice to meet you. I live in  ${add}
    `;
  console.log(str); // Log the greeting
}

// ES6 function , =>

const sayHiArrow = (name, add = "na") => {
  // Arrow function with a default parameter
  const str = `
        Hello there, this is ${name} , nice to meet you. I live in  ${add}
    `;
  console.log(str); // Log the greeting
};

sayHi("Sam", "sydney"); // Call the function
// Output: Hello there, this is Sam , nice to meet you. I live in  sydney
sayHi("Prem"); // Call the function with default parameter
//Output: Hello there, this is Prem , nice to meet you. I live in  na
sayHiArrow("John");
//Output: Hello there, this is John , nice to meet you. I live in  na
sayHiArrow("Merry");
//Output: Hello there, this is Merry , nice to meet you. I live in  na
sayHiArrow("Harry");
//Output: Hello there, this is Harry , nice to meet you. I live in  na

const premBio =
  "Prem is from Sydney, and  likes to code. He is founder of DC and he loves coding and teaching others";

const samBio = "Sam is from US, and likes to sing.";

const willBio = "William is from UK, and likes to act.";

const userList = [
  {
    name: "prem",
    location: "Sydeny",
    career: "founder of DC",
    interest: "loves coding and teaching others",
  },
  {
    name: "Sam",
    location: "US",
  },
  { name: "William" },
];

const careerInfo = ({ career, interest }) => {
  // Destructuring parameters
  return `He is ${career} and he ${interest}`;
};

const personBio = ({ name, location = "na", ...rest }) => {
  // Rest parameters and destructuring
  let str = `${name} is from ${location}, and  likes to code.`;

  if (rest.career) {
    str += careerInfo(rest); // Calling the careerInfo function
  }

  return str;
};

userList.forEach((item, i) => {
  // Iterating through the userList array
  const data = personBio(item); // Calling the personBio function
  console.log(data); // Log the result
});
//Output:
// prem is from Sydeny, and  likes to code.He is founder of DC and he loves coding and teaching others
// Sam is from US, and  likes to code.
// William is from na, and  likes to code.

const today = new Date(); // Creating a Date object
const dataDate = today.getDate(); // Getting the day of the month
const dataDay = today.getDay(); // Getting the day of the week
const dataFullYear = today.getFullYear(); // Getting the year
const dataMonth = today.getMonth(); // Getting the month (0-indexed)
const dataMinutes = today.getMinutes(); // Getting the minutes
const dataTimeString = today.toLocaleTimeString(); // Getting the time string
const dataDateString = today.toLocaleDateString(); // Getting the date string
const dataISO = today.toISOString(); // Getting the ISO string

today.setDate(today.getDate() + 10); // Adding 10 days to the date

console.log(today.getTime()); // Log the timestamp
// Output: (example) 1712423714524

// Date challange #1: Create a function that takes a food and the expire data and retuns one of the followings:
//1. if expired: AB is expred 4 days ago
//2. if not expired: you have 10 days to use this product.

const milliSecPerDay = 24 * 60 * 60 * 1000;
const checkExp = ({ name, exp }) => {
  const today = Date.now();
  const expTs = new Date(exp).getTime();

  const diffDay = Math.floor((expTs - today) / milliSecPerDay);

  if (diffDay < 1) {
    return `${name} is expred ${Math.abs(diffDay)} days ago`;
  } else {
    return `You have  ${diffDay} days to use this ${name}.`;
  }
};

const foods = [
  {
    name: "Tuna",
    exp: "2024-3-25",
  },
  {
    name: "Milk",
    exp: "2024-4-5",
  },
];

foods.map((food) => {
  const result = checkExp(food);
  console.log(result);
});
// Output:
// Tuna is expred 12 days ago
// You have  21 days to use this Milk.

//// JS- Error Handling
try {
  if ("condition true") {
    throw new Error("hacked"); // Throwing a custom error
  }

  console.log("first"); // This line will not be executed if an error is thrown
} catch (error) {
  console.log(error); // Log the error
  if (error.message === "hacked") {
    console.log("emergency alert text to eng."); // Handling a specific error message
  }
} finally {
  console.log("this block will always run"); // This block always executes
}
// Output:
// Error: hacked
//     at <anonymous>:4:11
// emergency alert text to eng.
// this block will always run

console.log("this works"); // This line will execute after the try-catch-finally block
// Output: this works

///JS- Scheduling

// 1. setTimeout
//  -- clearTimeout
console.log("I am before setTimeOut");
//Output: I am before setTimeOut

const counter = setTimeout(() => {
  // Setting a timeout
  console.log("I am from inside the setTimeOut"); // This will execute after 3 seconds
}, 3000);

clearTimeout(counter); // Clearing the timeout (it will not execute)

// 2.setInterval
// -- clearInterval

let counterInt = 100;
const countDown = setInterval(() => {
  // Setting an interval
  console.log("Special event in ", --counterInt);

  if (counterInt === 0) {
    clearInterval(countDown); // Clearing the interval
    console.log("Happy Birthday!!!");
  }
}, 100);
// Output:
// Special event in  99
// Special event in  98
// ...
// Special event in  1
// Happy Birthday!!!

//// Fun challange
const yoyo = () => console.log("0. " + (5 + 6));

console.log("1. log");

setTimeout(() => {
  console.log("2. inside frist set timeout");
}, 5000);

console.log("3. after first setTime out");

const sayHey = () => {
  console.log("4. inside sayhey");
  yoyo();
};

setTimeout(() => {
  console.log("5. inside second set timeout");
}, 0);

sayHey();

console.log("6. last clg");

// Output:
// uniqueArg: (example) [ 12, 56, 89, 23, 45, ..., 98 ]
// ... (rest of the outputs will vary depending on the data)
// 1. log
// 3. after first setTime out
// 4. inside sayhey
// 0. 11
// 6. last clg
// (after 5 seconds) 2. inside frist set timeout
