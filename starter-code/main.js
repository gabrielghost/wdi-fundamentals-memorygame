//Javascript test
console.log("JS file is connected to HTML! Woo!");
// card string
var cards = ["Queen", "Queen", "King", "King", "Queen", "King", "Queen", "King"];

// shuffle array
function shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
}
shuffle(cards);
// cards in play string
var cardsInPlay = [];

// create cards and board
// define createBoard function
var createBoard = function() {
// define function 'gameBoard' which gets elements with the ID of game-board so that 'append child' below can work
var gameBoard = document.getElementById('game-board');
// loop set up for generation of cards
for (var x = 0 ; x < cards.length; x++){
//define variable which creates div
var cardElement = document.createElement('div');
//give new div class name
cardElement.className = 'card';
cardElement.setAttribute('data-card', cards[x]);
cardElement.addEventListener('click', isTwoCards);
gameBoard.appendChild(cardElement);
}
}
// flip on click

//To test if two cards are in play
var isTwoCards = function(){
	cardsInPlay.push(this.getAttribute('data-card'));
	for (x=0; x<cards.length; x++){
	if (cardsInPlay[x] === "King") {
		this.innerHTML = '<img src="king.png" alt="king" height="200" width="150"/>'
	}
	if (cardsInPlay[x] === "Queen") {
		this.innerHTML = '<img src="queen.png" alt="queen" height="200" width="150"/>'
	}
	if (cardsInPlay.length === 2) {
		isMatch();
	}
	if (cardsInPlay.length === cards.length) {
		endOfGame();
	}
}
}

var endOfGame = function(){
for (x=0; x<cards.length; x++){
	if (cardsInPlay[x] === "King") {
		document.getElementsByClassName("cards").innerHTML = ""
	}
	if (cardsInPlay[x] === "Queen") {
		document.getElementsByClassName("cards").innerHTML = ""
	}
		// cardsInPlay = [];
}
}
//reset board function
var resetBoard = function() {
// define function 'gameBoard' which gets elements with the ID of game-board so that 'append child' below can work
var gameBoard = document.getElementById('game-board');
var cardElement = document.getElementsByClassName('card');
// loop set up for generation of cards
for (var x = 0 ; x < cardsInPlay.length; x++){
//give new div class name
cardElement.innerHTML = "";
}
}

//To test if two cards in play are a match
//define the function:
var isMatch = function(){
var flipped = document.getElementsByClassName('flipped');
// if the 1st entry to the series, cardsInPlay is equal to the 2nd....
if (cardsInPlay[0] === cardsInPlay[1]){
// then show the following alert:
setTimeout(function() {
      alert("You found a match!");
      }, 100);
// location.reload();
// otherwise,
}else{
	setTimeout(function() {
      alert("sorry, try again");
      }, 100);
// show the following alert:

	// flipped.innerHTML = "";
	// flipped.className = "";
	// location.reload();
}
resetBoard();
}

// create board
createBoard();
