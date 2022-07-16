let saveEl = document.getElementById("saveEl");
let countEl = document.getElementById("count-el");

let count = 0;
function increment() {
  count += 1;
  countEl.innerText = count;
}

function save() {
  let countString = count + " - ";
  saveEl.textContent += countString;
}
function reset() {
  count = 0;
  saveEl.textContent = "";
  countEl.textContent = "";
}
