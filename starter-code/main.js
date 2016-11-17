//Javascript test
console.log("JS file is connected to HTML! Woo!");
// card string
var cards = ["Queen", "Queen", "King", "King"];

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

// cards in play string
var cardsInPlay = [];
var pairTally = 0;
var tries = 0;
var cardsClicked = [];
var pairsInGame = 2;
var cardsInGame = pairsInGame*2
var createDead = function() {
	// define function 'gameBoard' which gets elements with the ID of game-board so that 'append child' below can work
var gameBoard = document.getElementById('game-board');
// loop set up for generation of cards
for (var x = 0 ; x < cards.length; x++){
//define variable which creates div
var cardElement = document.createElement('div');
//give new div class name
cardElement.className = 'deadCard';
gameBoard.appendChild(cardElement);
}
}

var clearDead = function() {
	var gameBoard = document.getElementById("game-board");
while (gameBoard.hasChildNodes()) {   
    gameBoard.removeChild(gameBoard.firstChild);
}
}

// create cards and board
// define createBoard function
var createBoard = function() {
// define function 'gameBoard' which gets elements with the ID of game-board so that 'append child' below can work
clearDead();
var tries = 0;
cardsInPlay = [];
var pairTally = 0;
var mismatchTally = 0;
shuffle(cards);
var gameBoard = document.getElementById('game-board');
// loop set up for generation of cards
for (var x = 0 ; x < cards.length; x++){
//define variable which creates div
var cardElement = document.createElement('div');
//give new div class name
cardElement.className = 'card';
cardElement.setAttribute('data-card', cards[x]);
cardElement.setAttribute('data-card-number', x);
cardElement.addEventListener('click', isTwoCards);
gameBoard.appendChild(cardElement);
}
}

var clicked = document.getElementById("flipped");
//to 'flip' on click
var isTwoCards = function(){
	cardsInPlay.push(this.getAttribute('data-card'));
	if (this.getAttribute('data-card') === "King") {
		this.innerHTML = '<img src="king.png" alt="king" height="200" width="150"/>';
		this.setAttribute('id','flipped');
	}
	if (this.getAttribute('data-card') === "Queen") {
		this.innerHTML = '<img src="queen.png" alt="queen" height="200" width="150"/>';
		this.setAttribute('id','flipped');
	}
//if two cards have been clicked - run match or not match function
	if (cardsInPlay.length === 2 || cardsInPlay.length === 4) {
		isMatch();
		// cardsInPlay = [];
	}
}



//To test if two cards in play are a match
//define the function:
var isMatch = function(){
// if the 1st entry to the series, cardsInPlay is equal to the 2nd....
tries++;
if (cardsInPlay.length === cardsInGame){
setTimeout(function() {
      alert("well done, you completed the game with " + tries + " tries!");
      pairTally++;
      }, 100);
}
else if (cardsInPlay[0] === cardsInPlay[1]){
// then show the following alert:
setTimeout(function() {
      alert("You found a match!");
      pairTally++;
      }, 100);
		
// var resetEventListener = function(){
// 	var card = document.getElementsByClassName('card');
// 	for (x=0;x<card.length;x++){
// 	card.removeEventListener('click', isTwoCards);
// 	card.addEventListener('click', isTwoCards);
// }
// }

// otherwise,
}else{
	setTimeout(function() {
      alert("sorry, try again");
      }, 300);
	setTimeout(function() {
      clearHTML();
      cardsInPlay = [];
      // resetEventListener();
      }, 500);
}
}

//reset board
var clearHTML = function(){
var allCards = document.getElementsByClassName("card");
for (x=0;x<cards.length; x++){
	allCards[x].innerHTML = "";
	allCards[x].removeAttribute("ID");

}
}

// create board
var startButton = document.getElementById('start');
startButton.addEventListener('click', createBoard);

createDead();
