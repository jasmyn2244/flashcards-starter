const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Turn = require('../src/Turn');

describe('Round', function() {

  let card1;
  let card2;
  let deck;
  let round;

  beforeEach(function() {
    card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    card2 = new Card(2, "What is a comma-separated list of related values?",  ["array", "object", "function"], "array");

    deck = new Deck([card1, card2]);

    round = new Round(deck);
  });

  it('should be a funtion', function() {
    //const round = new Round(deck);
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', function() {
    //const round = new Round(deck);
    expect(round).to.be.an.instanceOf(Round);
  });

  it('should return the current card being played', function() {
    expect(round.returnCurrentCard()).to.deep.equal({
      "id": 1,
      "question": "What allows you to define a set of related information using key-value pairs?",
      "answers": ["object", "array", "function"],
      "correctAnswer": "object"
    });
  });

  it('should be able to take a turn', function() {
    round.takeTurn('object')
    expect(round.currentTurn).to.be.an.instanceOf(Turn);
  });

  it('should increment the turns count', function() {
    round.takeTurn('object');
    expect(round.turns).to.equal(1);
  });

  it('should should change currentCard to the next card in the deck', function() {
    round.takeTurn('object');
    expect(round.currentCard).to.deep.equal({
      "id": 2,
      "question": "What is a comma-separated list of related values?",
      "answers": ["array", "object", "function"],
      "correctAnswer": "array"
    });
  });

  it('should record and evaluate userGuess', function() {
    round.takeTurn('array');
    expect(round.incorrectGuesses.length).to.deep.equal(1);
  });

  it('should give feedback', function() {
    expect(round.takeTurn('array')).to.equal('Incorrect')
  });

  it('should calculate percentage corrent', function() {
    round.takeTurn('object');
    expect(round.calculatePercentCorrect()).to.equal(100);
  });

  it('should be able to end round and give feedback', function() {
    round.takeTurn('object');
    round.calculatePercentCorrect();
    expect(round.endRound()).to.equal('**Round Over!** You answered 100% of the questions correctly!');
  });

});
