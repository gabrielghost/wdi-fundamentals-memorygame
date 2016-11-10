console.log("JS file is connected to HTML! Woo!");
var cards = ["Queen", "Queen", "King", "King"];
cardsInPlay = [];

// create cards and board

var createBoard = function() {
var gameBoard = document.getElementById('game-board');
for (var x = 0 ; x < cards.length; x++){
var cardElement = document.createElement('div');
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
	if (cardsInPlay[0] === "King") {
		this.innerHTML = '<img src="king.png" alt="king" />'
	}
	if (cardsInPlay[0] === "Queen") {
		this.innerHTML = '<img src="queen.png" alt="queen" />'
	}
	if (cardsInPlay[1] === "King") {
		this.innerHTML = '<img src="king.png" alt="king" />'
	}
	if (cardsInPlay[1] === "Queen") {
		this.innerHTML = '<img src="queen.png" alt="queen" />'
	}
	if (cardsInPlay.length === 2) {
		isMatch(cardsInPlay);
		cardsInPlay = [];
	}
}




//To test if two cards in play are a match

var isMatch = function(){
if (cardsInPlay[0] === cardsInPlay[1]){
alert("You found a match!")
}else if (cardsInPlay[0] !== cardsInPlay[1]){
	alert("Sorry, try again.")
}
}

// create board

createBoard();
