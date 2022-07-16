// intialize the count as 0
// listen for clicsk on the increment GamepadButtonincrement the count variable when the button is clicked
// change the count-el in the html to reflect new count

let count = 0;

function increment() {
  console.log("The increase button was clicked, the total is now: " + count);
  count = count + 1;
  updateCounter();
}
function decrement() {
  console.log("The decrease button was clicked, the total is now: " + count);
  count = count - 1;
  console.log("The decrease button was clicked" + count);
  updateCounter();
}
function reset() {
  console.log("The reset button was clicked");
  count = 0;
  console.log(count);
  updateCounter();
}
function updateCounter() {
  document.getElementById("count-el").innerHTML = count;
}
