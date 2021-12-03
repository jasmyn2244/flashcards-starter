const Turn = require('./Turn');
const Deck = require('./Deck');

class Round {
 constructor(deck) {
   this.currentCard = deck.cards[0];
   this.turns = 0;
   this.currentTurn
   this.cards = deck.cards;
   this.incorrectGuesses = [];
   this.currentFeedback;
   this.numCorrectGuesses = 0;
   this.percentCorrect;
 };

 returnCurrentCard() {
  return this.currentCard;
 };

 takeTurn(userGuess) {
   this.currentTurn = new Turn(userGuess, this.currentCard);
   let guessEvaluation = this.currentTurn.evaluateGuess();
   if(!guessEvaluation) {
     this.incorrectGuesses.push(this.currentCard.id)
   } else {
     this.numCorrectGuesses++;
     console.log("correct guesses: ", this.numCorrectGuesses);
   }
   this.turns++;
   this.currentCard = this.cards[this.turns];
   return this.currentTurn.giveFeedback();
 };

 calculatePercentCorrect() {
   this.percentCorrect = ((this.numCorrectGuesses/this.turns) * 100);
   return this.percentCorrect;
 };

 endRound() {
   console.log(`**Round Over!** You answered ${this.percentCorrect}% of the questions correctly!`);
   return `**Round Over!** You answered ${this.percentCorrect}% of the questions correctly!`;
 };
};




module.exports = Round;
