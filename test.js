// import chai from "https://jspm.dev/chai"

//Imports and instance of the game for us to play/test
// import {game, customDeck} from "./script.js"

// console.log("Game?", game);

// console.log("Look at my custom deck!!!", customDeck);


// game.playGame()

// console.log("What is this???", chai);



//Test for number of cards in a deck
describe("Card Deck Class", function (){
it("should check that there are 52 cards in the deck", function(){
    const customDeck = new Deck()
    customDeck.createDeck()
console.log("Custom Deck", customDeck.deck.length);




// console.log("New Test Deck:", newTestDeck);

expect(customDeck.deck.length).to.equal(52)

//end of it function
})

//end of describe function
})