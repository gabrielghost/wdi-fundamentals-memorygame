//Javascript test
console.log("JS file is connected to HTML! Woo!");
// card string
var cards = ["Queen", "Queen", "King", "King"];

// shuffle card string
function shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
}

// cards in play string
var cardsInPlay = [];
// grabs the vaiable from browser input (when active)
var pairsInGame = (document.getElementById("numberofpairs")||2)
// deduces the total number of cards in game
var cardsInGame = pairsInGame*2
// tallies the amount of attempts it took to complete the game
var tries = 0;

// dynamically creates a 'dead' board for aesthetic reasons
var createDead = function() {
// define function 'gameBoard' which gets elements with the ID of game-board so that 'append child' below can work
var gameBoard = document.getElementById('game-board');
// loop set up for generation of cards
for (var x = 0 ; x < cards.length; x++){
//define variable which creates div
var cardElement = document.createElement('div');
//give new div class name
cardElement.className = 'deadCard';
//append child to parent
gameBoard.appendChild(cardElement);
}
}

// function which clears the aesthetic cards to make way for the game cards
var clearDead = function() {
	var gameBoard = document.getElementById("game-board");
while (gameBoard.hasChildNodes()) {   
    gameBoard.removeChild(gameBoard.firstChild);
}
}

// create cards and board whilst clearing out any old games
var createBoard = function() {
// clear out placeholders
clearDead();
// reset attempts to zero
tries = 0;
// reset cardsInPkay to zero
cardsInPlay = [];
// resets pair tally to zero
var pairTally = 0;
// uses above function to shuffle array
shuffle(cards);
// accesses gameboard parent element
var gameBoard = document.getElementById('game-board');
// loop set up for generation of cards
for (var x = 0 ; x < cards.length; x++){
//define variable which creates div
var cardElement = document.createElement('div');
//give new div class name
cardElement.className = 'card';
//give card data attribute
cardElement.setAttribute('data-card', cards[x]);
//add event listener
cardElement.addEventListener('click', isTwoCards);
//append new elements to parent
gameBoard.appendChild(cardElement);
}
}

// the function which assigns inner html to the clicked card and runs another function if two cards are clicked
var isTwoCards = function(){
  if (this.getAttribute('data-flipped') != 'flipped') {
  //if clicked stop here
  // if not clicked make it clicked
  // continue
  cardsInPlay.push(this);
    this.setAttribute('data-flipped', 'flipped');
	if (this.getAttribute('data-card') === "King") {
		this.innerHTML = '<img src="king.png" alt="king" height="200" width="150"/>';
	}
	if (this.getAttribute('data-card') === "Queen") {
		this.innerHTML = '<img src="queen.png" alt="queen" height="200" width="150"/>';
	}
//if two cards have been clicked - run match or not match function
	if (cardsInPlay.length%2 === 0) {
		isMatch();
	}
}
}



//To test if two cards in play are a pair
var isMatch = function(){
//tally the amount of attempts
tries++;
//if total active cards equals total initial array then output occurs
if (cardsInPlay.length === cardsInGame){
setTimeout(function() {
      alert("well done, you completed the game with " + tries + " tries!");
      }, 100);
}
else if (cardsInPlay[0].getAttribute('data-card') === cardsInPlay[1].getAttribute('data-card')){
// then show the following alert:
setTimeout(function() {
      alert("You found a match!");
      }, 100);
// otherwise,
}else{
	setTimeout(function() {
      alert("sorry, try again");
      }, 300);
	setTimeout(function() {
      cardsInPlay[0].setAttribute('data-flipped', '');
      cardsInPlay[1].setAttribute('data-flipped', '');
      clearHTML();
      cardsInPlay = [];
      }, 500);
}
}

//reset board function
var clearHTML = function(){
var allCards = document.getElementsByClassName("card");
for (x=0;x<cards.length; x++){
	allCards[x].innerHTML = "";
}
}

// create board
var startButton = document.getElementById('start');
startButton.addEventListener('click', createBoard);

createDead();
