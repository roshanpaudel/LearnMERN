/**********************
 * 1. ELEMENT SELECTION
 **********************/
// Select by ID
const title = document.getElementById("main-title");
// Example Output: <h1 id="main-title">...</h1>

// Select by class name
const items = document.getElementsByClassName("list-item");
// Example Output: HTMLCollection(3) [li.list-item, li.list-item, li.list-item]

// Select by tag name
const paragraphs = document.getElementsByTagName("p");
// Example Output: HTMLCollection(2) [p, p]

// Select using querySelector
const button = document.querySelector(".submit-btn");
// Example Output: <button class="submit-btn">Submit</button>

// Select all matching elements
const allListItems = document.querySelectorAll(".list-item");
// Example Output: NodeList(3) [li.list-item, li.list-item, li.list-item]

// Get the closest matching ancestor
const closestSection = button.closest("section");
// Example Output: <section>...</section>

// Get parent node
const parentOfTitle = title.parentNode;
// Example Output: <div class="container">...</div>
// Select elements with a specific attribute.
const elementsWithAttr = document.querySelectorAll("[data-id]");

/****************************
 * SELCETS ATTRIBUTES
 ****************************/

// Select elements with an attribute equal to a value.
const activeButtons = document.querySelectorAll('button[data-status="active"]');

// Select elements with an attribute containing a substring.
const linksWithExample = document.querySelectorAll('a[href*="example.com"]');

// Select elements with an attribute starting with a string.
const imageThumbnails = document.querySelectorAll('img[src^="/thumbnails/"]');

// Select elements with an attribute ending with a string.
const pdfLinks = document.querySelectorAll('a[href$=".pdf"]');

// Combine attribute selectors with tag/class.
const importantActiveDivs = document.querySelectorAll(
  'div.important[data-status="active"]'
);

/****************************
 * 2. CONTENT & TEXT CHANGES
 ****************************/
// Set plain text
title.textContent = "Welcome to JavaScript DOM Manipulation";
// Result: <h1 id="main-title">Welcome to JavaScript DOM Manipulation</h1>

// Set innerHTML (includes tags)
const container = document.getElementById("content");
container.innerHTML = "<h2>New Heading</h2><p>With new paragraph content</p>";
// Result: container will now have a new <h2> and <p> inside

// innerText (respects CSS visibility)
const innerTextExample = document.getElementById("text-example");
innerTextExample.innerText = "This is innerText and respects CSS visibility";
// Result: If the element is hidden with display:none, this won't be visible or accessible

// Append text node
const newTextNode = document.createTextNode("This is a text node");
container.appendChild(newTextNode);
// Result: Adds plain text at the end of the container

/***************************
 * 3. STYLING MANIPULATION
 ***************************/
// Change text color
items[0].style.color = "blue";
// Result: First list item becomes blue

// Apply bold to all list items
allListItems.forEach((item) => {
  item.style.fontWeight = "bold";
});
// Result: All list items become bold

// Style header
header.style.backgroundColor = "lightgray";
header.style.padding = "10px";
// Result: Header has light gray background and padding

/*************************
 * 4. CLASS MANIPULATION
 *************************/
// Add class
header.classList.add("highlight");
// Result: header has class 'highlight'

// Remove class
header.classList.remove("highlight");
// Result: header no longer has class 'highlight'

// Toggle class
header.classList.toggle("active-header");
// Result: Adds or removes 'active-header'

// Check for class
const hasClass = header.classList.contains("highlight");
console.log(hasClass);
// Output: false (since we just removed it)

/******************************
 * 5. ATTRIBUTE MANIPULATION
 ******************************/
// Set attributes
link.setAttribute("href", "https://www.example.com");
link.setAttribute("target", "_blank");
// Result: <a href="https://www.example.com" target="_blank"></a>

// Get attribute
const linkHref = link.getAttribute("href");
console.log("Link points to:", linkHref);
// Output: "Link points to: https://www.example.com"

// Remove attribute
link.removeAttribute("target");
// Result: <a href="https://www.example.com"></a>

/****************************
 * 6. CREATING NEW ELEMENTS
 ****************************/
// Create and add element
const newDiv = document.createElement("div");
newDiv.setAttribute("id", "new-box");
newDiv.textContent = "This is a dynamically created div";
document.body.appendChild(newDiv);
// Result: <div id="new-box">This is a dynamically created div</div> appears at end of body

// Add a text node
const anotherText = document.createTextNode("Appended plain text");
newDiv.appendChild(anotherText);
// Result: Appends plain text to the newDiv

// Clone an element
const clonedDiv = newDiv.cloneNode(true);
document.body.appendChild(clonedDiv);
// Result: Duplicate of newDiv appears in body

/**************************************
 * 7. INSERTING, REMOVING, REPLACING
 **************************************/
// Insert before another element
const referenceNode = document.getElementById("reference");
const insertDiv = document.createElement("div");
insertDiv.textContent = "Inserted before reference element";
document.body.insertBefore(insertDiv, referenceNode);
// Result: <div>Inserted before reference element</div> appears before #reference

// Remove a child
const parentElement = document.getElementById("content");
const childToRemove = document.getElementById("remove-me");
if (childToRemove) {
  parentElement.removeChild(childToRemove);
}
// Result: Element with ID 'remove-me' is deleted from DOM

// Replace a child
const toReplace = document.getElementById("replace-me");
const replacement = document.createElement("p");
replacement.textContent = "This paragraph replaces another element";
if (toReplace) {
  parentElement.replaceChild(replacement, toReplace);
}
// Result: Replaces #replace-me with the new paragraph

// Check if container has the text node
const isContained = container.contains(newTextNode);
console.log("Text node is in container:", isContained);
// Output: true

/*******************************
 * 8. EVENT HANDLING (BASICS)
 *******************************/
// Click event
button.addEventListener("click", function () {
  alert("Button was clicked!");
});
// Result: Shows alert when button is clicked

// Add and remove event
function logClick() {
  console.log("Clicked!");
}
button.addEventListener("click", logClick);
button.removeEventListener("click", logClick);
// Result: Second event is attached and then removed; no log will appear
