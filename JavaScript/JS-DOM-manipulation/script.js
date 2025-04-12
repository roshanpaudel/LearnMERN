/**********************
 * 1. ELEMENT SELECTION
 **********************/
// Select by ID
const title = document.getElementById("main-title");

// Select by class name (returns live HTMLCollection)
const items = document.getElementsByClassName("list-item");

// Select by tag name (returns live HTMLCollection)
const paragraphs = document.getElementsByTagName("p");

// Select using querySelector (CSS-style - returns first match)
const button = document.querySelector(".submit-btn");

// Select all matching elements (returns static NodeList)
const allListItems = document.querySelectorAll(".list-item");

// Get the closest ancestor that matches a selector
const closestSection = button.closest("section");

// Access parent node of an element
const parentOfTitle = title.parentNode;

/****************************
 * 2. CONTENT & TEXT CHANGES
 ****************************/
// Change plain text content (ignores HTML)
title.textContent = "Welcome to JavaScript DOM Manipulation";

// Modify HTML content (can include tags)
const container = document.getElementById("content");
container.innerHTML = "<h2>New Heading</h2><p>With new paragraph content</p>";

// innerText: sets or gets **rendered** text (respects CSS like display: none)
const innerTextExample = document.getElementById("text-example");
innerTextExample.innerText = "This is innerText and respects CSS visibility";

// Create and append a text node
const newTextNode = document.createTextNode("This is a text node");
container.appendChild(newTextNode);

/***************************
 * 3. STYLING MANIPULATION
 ***************************/
// Direct style change
items[0].style.color = "blue";

// Apply styles in a loop
allListItems.forEach((item) => {
  item.style.fontWeight = "bold";
});

// Change multiple styles
const header = document.querySelector("header");
header.style.backgroundColor = "lightgray";
header.style.padding = "10px";

/*************************
 * 4. CLASS MANIPULATION
 *************************/
// Add a class
header.classList.add("highlight");

// Remove a class
header.classList.remove("highlight");

// Toggle a class (add if not present, remove if present)
header.classList.toggle("active-header");

// Check if an element has a specific class
const hasClass = header.classList.contains("highlight");

/******************************
 * 5. ATTRIBUTE MANIPULATION
 ******************************/
// Set or change attributes
const link = document.querySelector("a");
link.setAttribute("href", "https://www.example.com");
link.setAttribute("target", "_blank");

// Get attribute value
const linkHref = link.getAttribute("href");
console.log("Link points to:", linkHref);

// Remove an attribute
link.removeAttribute("target");

/****************************
 * 6. CREATING NEW ELEMENTS
 ****************************/
// Create an element
const newDiv = document.createElement("div");
newDiv.setAttribute("id", "new-box");
newDiv.textContent = "This is a dynamically created div";
document.body.appendChild(newDiv);

// Create and append a text node
const anotherText = document.createTextNode("Appended plain text");
newDiv.appendChild(anotherText);

// Clone an element (true = deep clone with children)
const clonedDiv = newDiv.cloneNode(true);
document.body.appendChild(clonedDiv);

/**************************************
 * 7. INSERTING, REMOVING, REPLACING
 **************************************/
// Insert before a reference node
const referenceNode = document.getElementById("reference");
const insertDiv = document.createElement("div");
insertDiv.textContent = "Inserted before reference element";
document.body.insertBefore(insertDiv, referenceNode);

// Remove a child element
const parentElement = document.getElementById("content");
const childToRemove = document.getElementById("remove-me");
if (childToRemove) {
  parentElement.removeChild(childToRemove);
}

// Replace a child element
const toReplace = document.getElementById("replace-me");
const replacement = document.createElement("p");
replacement.textContent = "This paragraph replaces another element";
if (toReplace) {
  parentElement.replaceChild(replacement, toReplace);
}

// Check if one element contains another
const isContained = container.contains(newTextNode);
console.log("Text node is in container:", isContained);

/*******************************
 * 8. EVENT HANDLING (BASICS)
 *******************************/
// Add a click event listener
button.addEventListener("click", function () {
  alert("Button was clicked!");
});

// Remove an event listener
function logClick() {
  console.log("Clicked!");
}
button.addEventListener("click", logClick);
button.removeEventListener("click", logClick);
