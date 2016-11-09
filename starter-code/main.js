console.log("JS file is connected to HTML! Woo!");
var cardString = ["Queen", "Queen", "King", "King"];
cardsInPlay = [];
var createBoard=function(){
	for(var i = 0; i < cardString.length; i++){
		cardElement.setAttribute('data-card', cardString[i]);
	}
}

function isTwoCards(){
	cardsInPlay.push(this.getAttribute('data-card'));
	if (cardsInPlay.length === 2) {
		isMatch(cardsInPlay);
		cardsInPlay = [];
	}
}
// var isMatch = function(){
// if ((cardsInPlay[1]) === (cardsInPlay[2])){
// alert("You found a match!")
// }else if (cardsInPlay[1] !== cardsInPlay[2]){
// 	alert("Sorry, try again.")
// }


// var cards=document.getElementById('game-board');
// for(var x= 0 ; x < cards.length; x++){
// cards[x].createElement('div');
// cards[x].className = 'card';
// game-board.appendChild(cards);};
var createCards = function() {
var i = document.getElementById('game-board');
for (var x = 0 ; x < 4; x++){
var cards = document.createElement('div');
cards.className = 'card';
document.getElementById('game-board').appendChild(cards);
}
}

createCards();
