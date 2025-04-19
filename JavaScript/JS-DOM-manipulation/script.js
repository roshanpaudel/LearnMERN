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

// textContent gets all text, including hidden content, ignoring styles
let textContentExample = div.querySelector("#para1").textContent;
// Output: "This is a test."

// Append text node
const newTextNode = document.createTextNode("This is a text node");
container.appendChild(newTextNode);
// Result: Adds plain text at the end of the container

/***************************
 * 3. CSS STYLING MANIPULATION
 ***************************/
// 1. element.style.property
const box = document.getElementById("box");
box.style.backgroundColor = "blue"; // Directly sets the background color
// Output: The background color of #box becomes blue

// 2. element.classList.add()
box.classList.add("active");
// Output: Adds the 'active' class to #box

// 3. element.classList.remove()
box.classList.remove("active");
// Output: Removes the 'active' class from #box

// 4. element.classList.toggle()
box.classList.toggle("hidden");
// Output: Adds 'hidden' class if not present, removes it if already present

// 5. element.classList.contains()
const has_Class = box.classList.contains("highlight");
console.log(has_Class);
// Output: true or false depending on whether #box has 'highlight' class

// 6. window.getComputedStyle(element)
const styles = window.getComputedStyle(box);
console.log(styles.width);
// Output: e.g., "200px" — Returns the computed width of the #box element

// 7. element.setAttribute('style', ...)
box.setAttribute("style", "color: white; background-color: black;");
// Output: Applies multiple CSS properties at once via inline style attribute

// 8. element.style.setProperty()
box.style.setProperty("font-size", "18px");
// Output: Sets the font size of #box to 18px

// 9. element.style.removeProperty()
box.style.removeProperty("background-color");
// Output: Removes the background color inline style from #box

// 10. element.style.cssText
box.style.cssText = "color: red; border: 1px solid black;";
// Output: Replaces all inline styles with the new styles

// 11. document.querySelectorAll(selector)
document.querySelectorAll(".items").forEach((el) => {
  el.style.margin = "10px";
});
// Output: Sets margin to 10px for all elements with class 'items'

// 12. element.className
console.log(box.className);
// Output: Returns all class names as a single string, e.g., "box active"

// 13. element.className = 'new-class'
box.className = "new-box";
// Output: Replaces all existing classes with 'new-box'

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

// ==== EVENT LISTENER SETUP ====

/** 1. element.addEventListener(event, handler)
 * Attaches a function to run when a specific event occurs (modern & flexible)
 */
const button_b = document.getElementById("myButton");
button_b.addEventListener("click", () => {
  console.log("Button clicked!");
});

/** 2. element.onclick = function
 * Sets an inline click handler (only one handler allowed this way)
 */
button.onclick = () => {
  console.log("Inline click handler!");
};

/** 3. element.addEventListener(..., { once: true })
 * Adds an event listener that runs only once
 */
button.addEventListener(
  "click",
  () => {
    console.log("This will run only once");
  },
  { once: true }
);

/** 4. element.removeEventListener(event, handler)
 * Removes a previously attached event listener
 */
function handleClick() {
  console.log("Clicked!");
}
button.addEventListener("click", handleClick);
button.removeEventListener("click", handleClick);

// ==== MOUSE EVENTS ====

/** 5. element.addEventListener('mouseover', handler)
 * Triggered when mouse enters the element area
 */
button.addEventListener("mouseover", () => {
  console.log("Mouse entered the button area");
});

/** 6. element.addEventListener('mouseout', handler)
 * Triggered when mouse leaves the element area
 */
button.addEventListener("mouseout", () => {
  console.log("Mouse left the button area");
});

// ==== EVENT OBJECT HANDLING ====

/** 7. event.preventDefault()
 * Prevents default browser behavior (e.g., link navigation)
 */
const link = document.getElementById("myLink");
link.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("Default link behavior prevented.");
});

/** 8. event.stopPropagation()
 * Stops the event from bubbling up to parent elements
 */
document.getElementById("outer").addEventListener("click", () => {
  console.log("Outer clicked");
});
document.getElementById("inner").addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("Inner clicked");
});

/** 9. event.stopImmediatePropagation()
 * Prevents other listeners on the same element from firing
 */
button.addEventListener("click", (e) => {
  e.stopImmediatePropagation();
  console.log("First listener");
});
button.addEventListener("click", () => {
  console.log("Second listener"); // Won't run
});

/** 10. event.target
 * Refers to the actual element that triggered the event
 */
button.addEventListener("click", (e) => {
  console.log("Clicked target ID:", e.target.id);
});

/** 11. event.currentTarget
 * Refers to the element the listener is attached to
 */
button.addEventListener("click", (e) => {
  console.log("Listener bound to:", e.currentTarget.id);
});

// ==== CUSTOM EVENTS AND PAGE EVENTS ====

/** 12. element.dispatchEvent(new Event(...))
 * Triggers a custom or built-in event manually
 */
const customEvent = new Event("myCustomEvent");
button.addEventListener("myCustomEvent", () => {
  console.log("Custom event triggered!");
});
button.dispatchEvent(customEvent);

/** 13. window.addEventListener('unload', handler)
 * Modern way to run code when the page is unloading
 */
window.addEventListener("unload", () => {
  console.log("Page is unloading (modern method)");
});
