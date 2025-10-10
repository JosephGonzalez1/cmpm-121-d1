import fireEmoji from "./Fire.jpg";
import "./style.css";

// Initializes counter
let counter: number = 0;

// Creation of basic html structure
document.body.innerHTML = `
  <p>Counter: <span id="counter">0</span></p>
  <button id =  increment> Fire: <img src="${fireEmoji}" class="icon" /></button>
`;

// Adds click handler
const button = document.getElementById("increment")!;
const counterElement = document.getElementById("counter")!;

button.addEventListener("click", () => {
  // Increments counter by 1
  counter++;
  console.log("Jenalee was here :p"); // Jenalee Nguyen jnguy405@ucsc.edu
  // Updates counter text
  counterElement.textContent = counter.toString();
});
