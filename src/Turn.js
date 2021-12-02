class Turn {
  constructor(userGuess, card) {
    this.userGuess = userGuess;
    this.card = card;
    this.isCorrect;
  };

  returnGuess() {
    return this.userGuess;
  };

  returnCard() {
    return this.card;
  };

  evaluateGuess() {
    if (this.userGuess === this.card.correctAnswer) {
      this.isCorrect = true;
    } else {
      this.isCorrect = false;
    }
    return this.isCorrect;
  }

  giveFeedback() {
    if (this.isCorrect) {
      return 'Correct!'
    } else {
      return 'Incorrect'
    }
  }
}


module.exports = Turn
