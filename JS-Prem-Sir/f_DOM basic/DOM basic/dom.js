// const elm = document.getElementById("first");
// const elm = document.getElementsByClassName("info");
// const elm = document.getElementsByTagName("div");

// const elm = document.querySelector(".info");
// const elm = document.querySelectorAll(".info");
// const elm = document.querySelector("#first");
// const elm = document.querySelector(".info > div p");

// const value = elm.innerText;
// const value = elm.innerHTML;
// console.log(value);

// document.write("hey just adding more content");
// const elm = document.querySelector(".message");
// const val = elm.innerText;
// elm.innerText = "Hey just got text updated";
// elm.innerHTML = "<h1>Hey just got text updated </h1>";
// console.log(val);

// const elm = document.querySelector("body");

// const textNode = document.createTextNode("HI this is dynamic content");
// elm.appendChild(textNode);

// const paraElm = document.createElement("p");
// paraElm.innerText = "HI this is dynamic content";

// elm.appendChild(paraElm);

// elm.insertBefore(paraElm, document.querySelector(".display"));

// elm.removeChild(document.querySelector("[href='google.com']"));

// elm.replaceChild(paraElm, document.querySelector("[href='google.com']"));

// const googleElm = document.querySelector("[href='google.com']");

// googleElm.style.fontSize = "2rem";
// googleElm.style.color = "red";
// googleElm.style.textDecoration = "none";

///

// const attbr = googleElm.getAttribute("style");
// console.log(attbr);

// document.querySelector(".display").setAttribute("href", "go to google");
//   .setAttribute(
//     "style",
//     "font-size: 2rem; color: green; text-decoration: underline;"
//   );

// document.querySelector("a").removeAttribute("href");

// const elm = document.querySelector(".message");
// elm.className = "someclass";
// elm.classList.add("success");
// elm.classList.remove("message");
// elm.classList.toggle("success");
// elm.classList.toggle("success");

// console.log(elm.classList);

//events

// const changeUI = (e) => {
//   console.log("got event triggred");
//   console.log(e);
// };
// let counter = 0;
// const elm = document.querySelector(".display");
// const func = (e) => {
//   //   console.log("got event triggred");
//   //   console.log(e);
//   elm.classList.toggle("success");
//   console.log(counter++);

//   if (counter === 3) elm.removeEventListener("click", func);
// };
// elm.addEventListener("click", func);
