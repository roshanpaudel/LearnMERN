// ================================
// Array vs NodeList in JavaScript
// ================================

// 1. ARRAY
// --------
// An Array is a standard JavaScript object used to store ordered collections of ANY data types.

const fruits = ["apple", "banana", "cherry"]; // This is a real array

// Arrays have full access to built-in methods like forEach, map, filter, etc.
fruits.forEach((fruit) => {
  console.log("Array item:", fruit);
});
// Output:
// Array item: apple
// Array item: banana
// Array item: cherry

// You can also use map, filter, push, pop, etc.
const upperFruits = fruits.map((fruit) => fruit.toUpperCase());
console.log("Mapped Array:", upperFruits);
// Output: Mapped Array: [ 'APPLE', 'BANANA', 'CHERRY' ]

// 2. NODELIST
// -----------
// A NodeList is a collection of DOM nodes returned by methods like querySelectorAll.
// It's not a true array but is "array-like".

// Assume this HTML structure exists:
/*
<ul>
  <li>First</li>
  <li>Second</li>
  <li>Third</li>
</ul>
*/

const listItems = document.querySelectorAll("li"); // Returns a NodeList

// NodeLists do support forEach in modern browsers
listItems.forEach((item) => {
  console.log("NodeList item:", item.textContent);
});
// Output:
// NodeList item: First
// NodeList item: Second
// NodeList item: Third

// But NodeLists DO NOT support array methods like map, filter, etc. directly:
// listItems.map(...) will throw an error

// To use full array methods, convert NodeList to an Array:
const itemsArray = Array.from(listItems);
// OR using spread syntax:
// const itemsArray = [...listItems];

const texts = itemsArray.map((item) => item.textContent.toUpperCase());
console.log("Mapped NodeList as Array:", texts);
// Output: Mapped NodeList as Array: [ 'FIRST', 'SECOND', 'THIRD' ]

// 3. KEY DIFFERENCES
// ------------------
// - Arrays can hold any data types; NodeLists hold DOM nodes only.
// - Arrays support all array methods; NodeLists only support forEach.
// - NodeLists are static (they don’t auto-update if the DOM changes).
// - NodeLists come from the DOM; Arrays are created manually or by conversion.

// In summary:
// Use Arrays when dealing with general data.
// Use NodeLists for working with DOM elements, and convert them if needed.
