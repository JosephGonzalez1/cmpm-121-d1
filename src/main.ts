import fireEmoji from "./Fire.jpg";
import "./style.css";

// --- Game state ---
let counter = 0;
let growthRate = 0; // units per second (starts at 0)
let lastTime = performance.now();

// --- Create UI ---
document.body.innerHTML = `
  <p>Counter: <span id="counter">0</span></p>
  <button id="increment">Fire: <img src="${fireEmoji}" class="icon" /></button>
  <button id="upgrade" disabled>🔥 Purchase Upgrade (Cost: 10)</button>
`;

// --- DOM elements ---
const counterElement = document.getElementById("counter")!;
const incrementButton = document.getElementById("increment")!;
const upgradeButton = document.getElementById("upgrade")!;

// --- Helper to update the counter display ---
function updateCounter() {
  counterElement.textContent = counter.toFixed(2);

  // Enable the upgrade button only if the player can afford it
  upgradeButton.disabled = counter < 10;
}

// --- Manual increment on click ---
incrementButton.addEventListener("click", () => {
  counter++;
  console.log("Jenalee was here :p"); // Jenalee Nguyen jnguy405@ucsc.edu
  updateCounter();
});

// --- Purchase upgrade button ---
upgradeButton.addEventListener("click", () => {
  if (counter >= 10) {
    counter -= 10;     // Deduct cost
    growthRate += 1;   // Increase growth rate (1 unit/second)
    updateCounter();
  }
});

// --- Animation loop for automatic growth ---
function animate(time: number) {
  const delta = time - lastTime; // milliseconds since last frame
  lastTime = time;

  // Increase counter by growthRate * elapsedSeconds
  counter += growthRate * (delta / 1000);

  updateCounter();
  requestAnimationFrame(animate);
}

requestAnimationFrame(animate);
