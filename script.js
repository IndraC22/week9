// what do we need for our card game?
//* Deck
//* 52 cards (should each card be its own class or an object with 3 values?)
//*   -Rank
//*   -Suit (heart, spade, diamond, club)
//*   -values
//* a way to shuffle the deck
//* a way to pass the cards to the players(should this be in my deck or game logic?)

//* Players(do i need a player class or put in my game logic?)
//*   -Name?
//*   -Score
//*   -Hand

//* Logic to play the game. Game Class, has a deck, has players, can pass card
//* ways to compare the game - number values on each card

//DECK CLASS
/** should have:
 *     An Array to store the cards
 *     An Array to store all the cards ranks
 *     An Array to store all the cards Suits
 */


class Deck{
 constructor(){
    this.deck = [];
    this.ranks = [
      "Ace", 
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "Jack",
      "Queen",
      "King", 
    ];
    this.suits = [
            "Hearts", "Diamonds", "Spades", "Clubs"]
    }
   //method to create a deck -iterate over out ranks and suits
   //push a new card into our constructors this.deck
  createDeck(){
    for (let i= 0; i < this.suits.length; i++){
      for (let j = 0; j < this.ranks.length; j++){
         let card = {
          name: `${this.ranks[j]} of ${this.suits[i]}` ,
          value: j + 1
        }

        this.deck.push(card)
      }
    }
  }
  
  shuffleDeck(){
    for (var i = this.deck.length - 1; i > 0; i--) { 
      var j = Math.floor(Math.random() * (i + 1));
                 
      var temp = this.deck[i];
      this.deck[i] = this.deck[j];
      this.deck[j] = temp;
    }
  }
}

//Class for a game
/**
 * a deck instantiate a new deck inside of our game class
 * create deck, shuffle deck, and pass deck
 * logic to play game
 *  -turn base, how many turns
 *  -do players have a hand
 *  -control flow statement logic to decide who wins
 * 2 players
 *  -hand
 *  -score
 *  -name
 */

class Game {
  constructor(){
    this.player1 = {
      name: 'Jesus',
      score: 0,
      hand: []
    }
    this.player2 = {
      name: 'Indra',
      score: 0,
      hand: []
    }
  }

  //Method on how to play the game
  /**
   * pass out cards
   * take x amount of turns as long as players have cards or the number of cards they have
   * award based on card value
   * log the winner
   */

  playGame() {
    //instantiate a new deck, create a new deck, then shuffle deck
    const deck = new Deck
    deck.createDeck()
    deck.shuffleDeck()

    while (deck.deck.length !==0){
      this.player1.hand.push(deck.deck.shift())
      this.player2.hand.push(deck.deck.shift())
    }
    //playing the game, how many turns
    for (let i = 0; i < this.player1.hand.length; i++){
     //conditional logic to award points based comparing card values
     if (this.player1.hand[i].value > this.player2.hand[i].value) {
      this.player1.score ++
      console.log(`
        P1 Card: ${this.player1.hand[i].name}
        P2 Card: ${this.player2.hand[i].name}
        Jesus 1 wins a point!
        Current Score: p1: ${this.player1.score}, p2: ${this.player2.score}
        `)
     } else if (this.player2.hand[i].value > this.player1.hand[i].value){
      this.player2.score ++
      console.log(`
        P1 Card: ${this.player1.hand[i].name}
        P2 Card: ${this.player2.hand[i].name}
        Indra 2 wins a point!
        Current Score: p1: ${this.player1.score}, p2: ${this.player2.score}
        `)
     } else {
      console.log(`
        P1 Card: ${this.player1.hand[i].name}
        P2 Card: ${this.player2.hand[i].name}
        Tie: No points awarded 
        Current Score: p1: ${this.player1.score}, p2: ${this.player2.score}
        `)
      }
    
     } 

     if (this.player1.score > this.player2.score) {
      console.log('Jesus wins!')
     } else if (this.player2.score  > this.player1.score) {
      console.log('Indra wins!')
     } else {
      console.log ('Tie')
     }
   
    }
    
  }

  //Instantiates or creates an instance of the Game class
const game = new Game()
// game.playGame()

// const customDeck = new Deck()
//Exports the game so other areas of code can access it
// export {game, customDeck}