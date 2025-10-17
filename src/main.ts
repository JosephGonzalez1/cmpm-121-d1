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
  counterElement.textContent = counter.toFixed(2);
}

// Handle clicks
button.addEventListener("click", () => {
  counter++;
  console.log("Jenalee was here :p"); // Jenalee Nguyen jnguy405@ucsc.edu
  updateCounter();
});

// --- Animation-based auto increment ---
let lastTime = performance.now();

function animate(time: number) {
  const delta = time - lastTime; // Time since last frame (in ms)
  lastTime = time;

  // Increase counter by (elapsed seconds * 1 unit per second)
  counter += delta / 1000; // delta is in ms, so divide by 1000 for seconds
  updateCounter();

  requestAnimationFrame(animate);
}

// Start animation loop
requestAnimationFrame(animate);
