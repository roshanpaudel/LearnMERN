// console.log("Hellow world!");
// alert("hi there click ok to complete my executioin");
/* multi
line
comment 
*/

//========= Variable (only char, num, $ _)

// var, let, const
// var name; // creating a variable
// name = "Prem Acharya"; // assing value
// let add = "Sydney";

// console.log(name, add);

// name = "Sam";

// const age;

// age = 5;

// console.log(age);

// let firstName = "Prem"
// let FirstName = "Prem"
// let FIRSTNAME = "Prem"
// let firstname = "Prem"

//========= Arithmetic
// let a = 5;
// const b = 2;
// const c = b;

// i. + Addition
// const result = a + b + c;

// - Subtraction
// const result = a - b;

// ii.  * Multiplication
// const result = a * b;

// iii.  ** Exponentiation (ES2016)
// const result = a ** b;

// iv.  / Division
// const result = a / b;

// v.  % Modulus (Division Remainder)
// const result = a % b;

// vi. ++ Increment
// a++; //6
// a--; //4
// ++a; //6
// vii.  -- Decrement

// console.log(++a); //
// console.log(a); //

// ===== Comparisons
// ==
// ===
// >, >=
// <, <=

// const v1 = 5;
// const v2 = "5";

// const result = v1 == v2;
// const result = v1 === v2;
// const result = v1 >= v2;
// const result = v1 <= v2;

// console.log(result);

// ===== JS- Data Types
// Primitives
// String // “prem acharya”
// const value = "Prem Acharya"; // '', ``

// Number //123
// const value = 3456;

// Boolen // true or false
// const value = false;

// Undefined // not defined in system memory
// const value = undefined;
// Null // defined in system memory but no value assigned
// const value = null;

// console.log(typeof value, value);

// let user = "prem";
// console.log(user);

// const u1 = user;
// console.log(u1);

// user = "Sam";
// console.log(user);
// console.log(u1);

// Reference Types
// Object
// const user = {
//   fName: "Prem",
//   num: 34,
// };
// console.log(user);

// const u1 = user;
// console.log(u1);

// user.fName = "Sam";
// console.log(user);
// console.log(u1);

// ===== Math Object
// const answer = Math.PI;

// 1. Math.round(4.7);
// const answer = Math.round(4.5);
// const answer = Math.round(4.4);

// 2. Math.pow(8, 2);
// const answer = Math.pow(3, 3);

// 3. Math.sqrt(64);
// const answer = Math.sqrt(64);

// 4. Math.ceil(4.4);
// const answer = Math.ceil(4.1);

// 5. Math.floor(4.7);
// const answer = Math.floor(4.9);

// 6. Math.min(0, 150, 30, 20,  -8,  -200);
// const answer = Math.min(0, 150, 30, 20, -8, -200);
// 7. Math.max(0, 150, 30, 20,  -8,  -200);
// const answer = Math.max(0, 150, 30, 20, -8, -200);

// 8. Math.random();

// const answer = Math.random() * 100; // 0 - 0.99999999...

// const val = Math.round(answer);
// console.log(val);

//// Logical Operators
// &&,  ||,  !, Ternary

//// JS- Conditional statements
// 1. If else

// Truthy: true, 2 , -4, " d", {}, [], ()=>{}
// Falsy : false, 0, NaN, "", null, undefined
// const val = !"hi there";
// console.log(val);
// if (val) {
//   // statement 1
//   console.log("you pass through the  if condition");
// }

// const age = 0;
// const vip = true;

// if (age) {
//   console.log("Welcome");
// }

// const val = age || "N/A";
// console.log(val);

// age < 50 && console.log("Welcome");

// if ((age >= 18 && age < 50) || vip === true) {
//   console.log("Welcome to the coding party!");
// }
// if ((age >= 18 && age < 50) || vip === true) {
//   console.log("Welcome to the coding party!");
// } else {
//   console.log("Go home kido!");
// }

// 2. Else if

// if (condition1) {
//   //statement1
// } else if (c2) {
//   //code
//   //s2
// } else if (c3) {
//   //s3
// } else {
//   //run default code
// }

// const pet = "cat";

// if (pet === "cat") {
//   console.log("Meowww");
// } else if (pet === "dog") {
//   console.log("Wooff");
// } else if (pet === "cow") {
//   console.log("Mooowowow");
// } else {
//   console.log(";kjdfa hakhfkahsdkfhasw aousdfhka sadlflsdk");
// }

// 3. Switch
// const pet = "dogasdf ";
// switch (pet) {
//   case "cat":
//     console.log("Meowww");
//     //
//     break;

//   case "dog":
//     console.log("Wooff");
//     break;

//   case "cow":
//     console.log("Mooowowow");
//     break;

//   default:
//     console.log(";kjdfa hakhfkahsdkfhasw aousdfhka sadlflsdk");
// }

// Ternary
// condition1 ? //run when codition is  :  //run this code
// const age = 30;
// age < 50 ? console.log("welcom") : console.log("Go home");

//Number / 0-9

// safe number range  -2^53-1 to 2^53-1
// const num = 30_580_984_843_456;
// console.log(num);

// const num = "52.442a";
// const val = +num;
// const val = parseInt(num);
// const val = parseFloat(num);
// isNaN(val);

//
// console.log(typeof val, val, isNaN(val));

/// STRING
// Escape character
// Length
// indexOf, lastIndexOf, search
// Slice, substring, substr
// Replace, contact, trim
// toUpperCase, toLowerCase
// charAt, [], split

// const str = 'Hi there this is "Prem Acharya", and I live in Sydne!'; //'', ``
// console.log(str);
// const val = str.length;
// const val = str.toLowerCase();
// const val = str.toUpperCase();
// const val = str[20];
// const val = str.charAt(20);

// const val = str.indexOf("e");
// const val = str.lastIndexOf("there");

// const val = str.replace("Prem", "Sam");
// const val = str.replaceAll("i", "u");

// const val = str.slice(3, 5);
// const val = str.slice(3);
// const val = str.slice(-3, -2);
// const val = str.substring(3, 5);

// const val = str.includes("Prem");
// const val = str.search("Prsdem");

// const val = str.trim();
// const val = str.split("i").join("i");
// const val = str.concat(" new text in str", " more content");
// const val = str + " new text in str" + " more content";

// console.log(val);

//// 3. Array[]

// const val = ["prem", 345, "Ach", null, undefined, [34, 456], {}, () => {}];

// console.log(val);
// Length, push , pop, shift, unshift, toString, join,[], splice, slice, indexOf
// Sort, reverse
// forEach, map
// Filter, reduce, every, find

// const fruits = ["apple", "banana", "orange", "mango"];

// const value = fruits.length;
// const value = fruits[1];

//adding data in the array
// fruits.push("watermelon");
// fruits.push("grapes");

// fruits.unshift("watermelon");
// fruits.unshift("grapes");

// fruits.splice(2, 0, "Watermelon");

//Deleting item from array
// const val = fruits.pop();
// const val = fruits.shift();
// const val = fruits.splice(2, 2);
// const val = fruits.slice(2, 4);
// delete fruits[2];

// const val = fruits.toString();
// const val = fruits.toString().split(",");

// const val = fruits.indexOf("mango");
// const val = fruits.includes("mango");
// const val = fruits.join("-");

// console.log(fruits.sort((a, b) => b - a));
// fruits.sort().reverse();
// fruits.reverse();
// console.log(fruits);

//// JS- Loops
//0,  1, 2 ... 9, 10
// for (let i = 10; i > 0; i--) {
//   console.log(i);
//   ////
// }

// while (condition)

// let i = 0;
// while (i < 10) {
//   //code block
//   console.log(i);
//   i++;
// }

// do/while | do{}while()
// let i = 10;
// do {
//   console.log(i);
//   i++;
// } while (i < 10);

// for (let i = 0; i <= 100; i++) {
//   if (i === 10) {
//     // break;
//     continue;
//   }

//   if (i % 2 === 1) {
//     continue;
//   }

//   console.log(i);
///50
//
// }

////===== JS specific Array Loops

///=== for /of for (x of cars) → for array
// const fruits = ["apple", "banana", "orange", "mango"];
// console.log(fruits);

// const upperFruits = [];

// for (let item of fruits) {
//   upperFruits.push("sku-" + item.toUpperCase());
// }
// console.log(upperFruits);

///=== For

// for (let i = 0; i < fruits.length; i++) {
//   console.log(i, fruits[i]);
// }

/// == forEach

// const newData = fruits.forEach((fruit, index) => {
//   console.log(index, fruit);
// });

/// == map
// const newData = fruits.map((item, i) => {
//   //   console.log(item, i);
//   //   return "SKU-" + item.toUpperCase();
//   if (item.includes("n")) {
//     return item;
//   }
// });

/// == filter
// const newData = fruits.filter((item, i) => {
//   return item.includes("n");

//   //   if (item.includes("n")) {
//   //     return true;
//   //   } else {
//   //     return false;
//   //   }
// });
// const newData = fruits.filter((item, i) => item.includes("n"));
// console.log(newData);

//=== reduce
// 355 + 56
// const money = [10, 345, 56, 3245, 5467, 3456, 435673];

// const toatl = money.reduce((acc, item) => {
//   return acc + item;
// }, 1000);

// console.log(toatl);

/// === every

// const result = fruits.every((item) => {
//   console.log(item);
//   return item.includes("a"); //test condition
// });
// const result = money.every((num) => {
//   return num >= 10;
// });

// console.log(result);

// const money = [10, 345, 56, 3245, 5467, 56, 3456, 435673];

// const result = money.includes(10); // boolean true/false
// const result = money.find((item) => item === 56);
// const result = money.indexOf(586);

// console.log(result);

// const loveArg = new Array(10).fill("💗");
// console.log(loveArg);

// Challange #1
// 1. create an array of 50 random numbers range between 1 and 100 programmatically

// const arg = [];

// for (let i = 0; i < 50; i++) {
//   const num = Math.floor(Math.random() * 100) + 1; // 1 - 100
//   arg.push(num);
//   arg[i] = num;
// }

//2. sort the array in descending order
// arg.sort((a, b) => b - a);
// console.log(arg);

//3. get total of the array

// const total = arg.reduce((acc, num) => acc + num, 0);
// console.log(total);

//4.Divide original array in to 2 new arrays that contains even or odd numbers only each.
// const evenArg = arg.filter((item) => item % 2 === 0);
// const oddArg = arg.filter((item) => item % 2 !== 0);
// console.log(evenArg, oddArg);

// 5. remove duplicate number for the original array
// const uniqueArg = [...new Set(arg)];

// const uniqueArg = [];
// for (let i = 0; i < arg.length; i++) {
//   //only unique data
//   if (!uniqueArg.includes(arg[i])) {
//     uniqueArg.push(arg[i]);
//   }
// }
// console.log(uniqueArg);

// Challange #2 create unique array 50 numbers rang between 1 and 100 programmatically

// const uniqueArg = [];
// for (let i = 0; uniqueArg.length < 50; i++) {
//   //only unique data
//   const num = Math.floor(Math.random() * 100) + 1;
//   if (!uniqueArg.includes(num)) {
//     uniqueArg.push(num);
//   }
//   console.log(i);
// }
// console.log(uniqueArg);

//Good LUCK

//// JS- Data manipulation

// const person = {
//   name: "Sam smith",
//   phone: 87634567,
//   isMarried: true,
//   hasPet: undefined,
//   gender: null,
//   skills: ["Html", "css", "Javascript", ["flexbox", "grid system"]],
//   parents: {
//     f: "Harry",
//     m: "Merry",
//   },
//   bio: () => {
//     return "hi there";
//   },
// };

//Read data
// const data = person.name;
// const data = person["parents"];
// const data = person.skills[3][1];
// const data = person.parents.m;
// const data = person.bio();

//update data
// person.name = "Premo";
// person.address = "1 George St Sydney";
// person.parents.md = "2020";

// person.skills.push("hehehe");
// person.skills[3].push("hehehe");

// Delete data
// person.phone = undefined;
// delete person.phone;
// person.skills.pop();
// delete person.parents.f;

// console.log(person);
// console.log(data);

//Destructuring: const {name}= obj
// person.room = undefined;

///Default
// const { name, phone, parents, room = "N/A" } = person;

// console.log(name, phone, room);
// console.log(f, m);

///Rest
// const { name, phone, parents, ...rest } = person;

// console.log(rest);

/// Spread

// const career = {
//   title: "sof. eng.",
//   salary: "150K",
// };

// const combo = { ...career, ...person };
// console.log(combo);

// Copying object: shallow vs Deep copy
// const person = {
//   name: "Sam smith",
//   phone: 87634567,
//   isMarried: true,
//   hasPet: undefined,
//   gender: null,
//   skills: ["Html", "css", "Javascript", ["flexbox", "grid system"]],
//   parents: {
//     f: "Harry",
//     m: "Merry",
//   },
//   bio: () => {
//     return "hi there";
//   },
// };

// const p1 = person;
// const p1 = Object.assign({}, person);
// const p1 = { ...person };

// person.parents.f = "Prem";

// console.log(person);
// console.log(p1);

// const p1 = JSON.parse(JSON.stringify(person));

// person.parents.f = "Prem";

// console.log(person);
// console.log(p1);

// for (let key in person) {
//   console.log(key, person[key]);
// }

// const personArg = Object.entries(person);
// const personArg = Object.keys(person);
// const personArg = Object.values(person);
// person.map();
// console.log(personArg);

///JS- Function
// function sayHi(name, add = "na") {
//   const str = `
//   Hello there, this is ${name} , nice to meet you. I live in  ${add}
//   `;

//   // "Hellow there, this is " + name + ", nice to meet you. I live in  " + add;
//   console.log(str);
// }

// ES6 function , =>

// const sayHi = (name, add = "na") => {
//   const str = `
//       Hello there, this is ${name} , nice to meet you. I live in  ${add}
//     //   `;

//   console.log(str);
// };

// sayHi("Sam", "sydney");
// sayHi("Prem");
// sayHi("John");
// sayHi("Merry");
// sayHi("Harry");
// console.log();

// const premBio =
//   "Prem is from Sydney, and  likes to code. He is founder of DC and he loves coding and teaching others";

// const samBio = "Sam is from US, and likes to sing.";

// const willBio = "William is from UK, and likes to act.";

// const userList = [
//   {
//     name: "prem",
//     location: "Sydeny",
//     career: "founder of DC",
//     interest: "loves coding and teaching others",
//   },
//   {
//     name: "Sam",
//     location: "US",
//   },
//   { name: "William" },
// ];

// console.log(userList);

// const career = ({ career, interest }) => {
//   return `He is ${career} and he ${interest}`;
// };

// function perosnBio(){
// const perosnBio = ({ name, location = "na", ...rest }) => {
//   console.log(rest);
//   //   const { name, location } = person;
//   let str = `${name} is from ${location}, and  likes to code.`;

//   if (rest.career) {
//     str += career(rest);
//   }

//   return str;
//   //   console.log("check check");
// };

// const data = perosnBio();
// console.log(userList[2]);
// console.log(premBio, samBio, willBio);

// userList.forEach((item, i) => {
//   const data = perosnBio(item);
//   console.log(data);
// });

// const today =  Date();
// const today = new Date("2020-8-29");
// const today = Date.now();
// const today = new Date("2020-8-29");

// const data = today.getDate();
// const data = today.getDay();
// const data = today.getFullYear();
// const data = today.getMonth();
// const data = today.getMinutes();

// const data = today.toLocaleTimeString();
// const data = today.toLocaleDateString();
// const data = today.toISOString();

// today.setDate(today.getDate() + 10);

// console.log(today.getTime());

// Date challange #1: Create a function that takes a food and the expire data and retuns one of the followings:
//1. if expired: AB is expred 4 days ago
//2. if not expired: you have 10 days to use this product.

// const milliSecPerDay = 24 * 60 * 60 * 1000;
// const checkExp = ({ name, exp }) => {
//   const today = Date.now();
//   const expTs = new Date(exp).getTime();

//   const diffDay = Math.floor((expTs - today) / milliSecPerDay);

//   if (diffDay < 1) {
//     return `${name} is expred ${Math.abs(diffDay)} days ago`;
//   } else {
//     return `You have  ${diffDay} days to use this ${name}.`;
//   }
// };

// const foods = [
//   {
//     name: "Tuna",
//     exp: "2024-3-25",
//   },
//   {
//     name: "Milk",
//     exp: "2024-4-5",
//   },
// ];

// foods.map((food) => {
//   const result = checkExp(food);
//   console.log(result);
// });

//// JS- Error Handling
// console.log(first);
// try {
//   //your code
//   //

//   if ("condition true") {
//     throw new Error("hacked");
//   }

//   console.log("first");
// } catch (error) {
//   console.log(error);
//   //send notification to eng. team

//   if (error.message === "hacked") {
//     console.log("emergency alert text to eng.");
//   }
// } finally {
//   console.log("this block will always run");
// }

// console.log("this works");

///JS- Scheduling

// 1. setTimeout
//  -- clearTimeout
// console.log("I am befor setTimeOut");
// const counter = setTimeout(() => {
//   console.log("I am from inside the setTimeOut");
// }, 3000); //1s
// //
// //
// clearTimeout(counter);

// 2.setInterval
// -- clearInterval

// let counter = 100;
// const countDown = setInterval(() => {
//   console.log("Special event in ", --counter);

//   if (counter === 0) {
//     clearInterval(countDown);
//     console.log("Happy Birthday!!!");
//   }
// }, 100); //1s

//// Fun challange
// const yoyo = () => console.log("0. " + (5 + 6));

// console.log("1. log");

// setTimeout(() => {
//   console.log("2. inside frist set timeout");
// }, 5000);

// console.log("3. after first setTime out");

// const sayHey = () => {
//   console.log("4. inside sayhey");
//   yoyo();
// };

// setTimeout(() => {
//   console.log("5. inside second set timeout");
// }, 0);

// sayHey();

// console.log("6. last clg");

//0 1 2 3 4 5 6
