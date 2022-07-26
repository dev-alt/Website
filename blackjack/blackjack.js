let player = {
  name: "Andrew",
  chips: 300,
  sayHello: function () {
    console.log("Hello");
  },
};
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el");

player.sayHello();
playerEl.textContent = player.name + ": $" + player.chips;
// // let sumEl = document.querySelector("#sum-el");

function getRandomCard() {
  let randomCard = Math.floor(Math.random() * 13) + 1;
  if (randomCard > 10) {
    return 10;
  } else if (randomCard === 1) {
    return 11;
  } else {
    return randomCard;
  }
}

function startGame() {
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  isAlive = true;
  hasBlackJack = false;
  renderGame();
  console.log(cards);
}

function renderGame() {
  cardsEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }
  sumEl.textContent = "Sum: " + sum;
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "Congratulations you have won";
    hasBlackJack = true;
    player.chips += 100;
    renderChips();
  } else {
    message = "You have lost";
    isAlive = false;
    player.chips -= 50;
    renderChips();
  }
  messageEl.innerText = message;
  console.log(cards);
}

function renderChips() {
  playerEl.textContent = player.name + ": $" + player.chips;
}
function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    renderGame();
  } else if (isAlive === false) {
    alert("No more lives left");
  } else {
    alert("has blackjack");
  }
  console.log(cards);
}

function restart() {
  sum = 0;
  cards = [];
  player.chips = 300;
  renderChips();
  hasBlackJack = false;
  isAlive = false;
  cardsEl.innerText = "Cards: ";
  sumEl.innerText = "Sum: ";
  messageEl.innerText = "Want to play a round?";
  console.log(cards);
}
