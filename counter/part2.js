// intialize the count as 0
// listen for clicsk on the increment GamepadButtonincrement the count variable when the button is clicked
// change the count-el in the html to reflect new count
let saveEl = document.getElementById("saveEl");
let countEl = document.getElementById("count-el");
let totalEl = document.getElementById("total-el");
let count = 0;
let total = 0;

function increment() {
  console.log("The increase button was clicked, the total is now: " + count);
  count = count + 1;
  updateCounter();
}
function decrement() {
  console.log("The decrease button was clicked, the total is now: " + count);
  count = count - 1;
  updateCounter();
}

function save() {
  total += count;
  totalEl.textContent = "Total: " + total;
  let countString = count + " - ";
  saveEl.textContent += countString;
  count = 0;
  countEl.innerText = count;
}

function updateCounter() {
  document.getElementById("count-el").innerHTML = count;
}
function reset() {
  count = 0;
  saveEl.textContent = "Previous entries: ";
  countEl.textContent = "";
  totalEl.textContent = "Total: ";
}
