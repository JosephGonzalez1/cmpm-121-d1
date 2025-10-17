import fireEmoji from "./Fire.jpg";
import "./style.css";

// Initializes counter
let counter: number = 0;

// Create basic HTML structure
document.body.innerHTML = `
  <p>Counter: <span id="counter">0</span></p>
  <button id="increment">Fire: <img src="${fireEmoji}" class="icon" /></button>
`;

// Get references to DOM elements
const button = document.getElementById("increment")!;
const counterElement = document.getElementById("counter")!;

// Function to update the counter display
function updateCounter() {
  counterElement.textContent = counter.toString();
}

// Adds click handler
button.addEventListener("click", () => {
  counter++;
  console.log("Jenalee was here :p"); // Jenalee Nguyen jnguy405@ucsc.edu
  updateCounter();
});

// Adds automatic increment every 1 second
setInterval(() => {
  counter++;
  updateCounter();
}, 1000);
