const deck = [`2♣︎`,`2♦︎`,`2♥︎`,`2♠︎`,`3♣︎`,`3♦︎`,`3♥︎`,`3♠︎`,`4♣︎`,`4♦︎`,`4♥︎`,`4♠︎`, `5♣︎`, `5♦︎`, `5♥︎`,`5♠︎`,`6♣︎`, `6♦︎`, `6♥︎`,`6♠︎`,`7♣︎`, `7♦︎`,`7♥︎`,`7♠︎`,`8♣︎`,`8♦︎`,`8♥︎`,`8♠︎`, `9♣︎`, `9♦︎`, `9♥︎`,`9♠︎`,`T♣︎`,`T♦︎`,`T♥︎`,`T♠︎`,`J♣︎`,`J♦︎`,`J♥︎`,`J♠︎`,`Q♣︎`,`Q♦︎`, `Q♥︎`,`Q♠︎`,`K♣︎`,`K♦︎`,`K♥︎`,`K♠︎`,`A♣︎`,`A♦︎`,`A♥︎`,`A♠︎`];
let deckToShufffle = deck;
let shuffledDeck = deckToShufffle.sort(() => 0.5 - Math.random());
const hand1 = shuffledDeck.splice(0, 5);
const hand2 = shuffledDeck.splice(0, 5);
const hand3 = shuffledDeck.splice(0, 5);;

//Function showing "values" of each card in hand

const getCardsValue = (hand) => {
  let cardsAmount = [];
  let valuesOfHand = [];
  let CardValue = 0;
  function sortCards(a, b) {
    return a - b;
  }
  for (let i = 0; i < hand.length; i++) {
    let singleCard = hand[i];
    if (singleCard.includes("T")) {
      CardValue = 10;
    } else if (singleCard.includes("J")) {
      CardValue = 11;
    } else if (singleCard.includes("Q")) {
      CardValue = 12;
    } else if (singleCard.includes("K")) {
      CardValue = 13;
    } else if (singleCard.includes("A")) {
      CardValue = 14;
    } else {
      CardValue = parseFloat(singleCard);
    }
    cardsAmount += valuesOfHand.push(CardValue);
  }
  return valuesOfHand.sort(sortCards);
};

// Function returning wich poker set we have
function showPokerSet(hand) {
  const isSpade = (hand) => hand.includes("♥︎");
  const isHeart = (hand) => hand.includes("♠︎");
  const isClub = (hand) => hand.includes("♣︎");
  const isDiamond = (hand) => hand.includes("♦︎");
  if (
    hand.includes("T") &&
    hand.includes("J") &&
    hand.includes("Q") &&
    hand.includes("K") &&
    hand.includes("A") &&
    (hand.every(isHeart) ||
      hand.every(isClub) ||
      hand.every(isDiamond) ||
      hand.every(isSpade))
  ) {
    set = `royal flush`;
  } else if (
    getCardsValue(hand)[4] === getCardsValue(hand)[3] + 1 &&
    getCardsValue(hand)[3] === getCardsValue(hand)[2] + 1 &&
    getCardsValue(hand)[2] === getCardsValue(hand)[1] + 1 &&
    getCardsValue(hand)[1] === getCardsValue(hand)[0] + 1 &&
    (hand.every(isHeart) ||
      hand.every(isClub) ||
      hand.every(isDiamond) ||
      hand.every(isSpade))
  ) {
    set = `streight flush`;
  } else if (
    (getCardsValue(hand)[0] === getCardsValue(hand)[1] &&
      getCardsValue(hand)[1] === getCardsValue(hand)[2] &&
      getCardsValue(hand)[2] === getCardsValue(hand)[3]) ||
    (getCardsValue(hand)[1] === getCardsValue(hand)[2] &&
      getCardsValue(hand)[2] === getCardsValue(hand)[3] &&
      getCardsValue(hand)[3] === getCardsValue(hand)[4])
  ) {
    set = `four of a kind`;
  } else if (
    (getCardsValue(hand)[0] === getCardsValue(hand)[1] &&
      getCardsValue(hand)[1] === getCardsValue(hand)[2] &&
      getCardsValue(hand)[3] === getCardsValue(hand)[4]) ||
    (getCardsValue(hand)[0] === getCardsValue(hand)[1] &&
      getCardsValue(hand)[2] === getCardsValue(hand)[3] &&
      getCardsValue(hand)[3] === getCardsValue(hand)[4])
  ) {
    set = `full house`;
  } else if (
    hand.every(isHeart) ||
    hand.every(isClub) ||
    hand.every(isDiamond) ||
    hand.every(isSpade)
  ) {
    set = `flush`;
  } else if (
    getCardsValue(hand)[4] === getCardsValue(hand)[3] + 1 &&
    getCardsValue(hand)[3] === getCardsValue(hand)[2] + 1 &&
    getCardsValue(hand)[2] === getCardsValue(hand)[1] + 1 &&
    getCardsValue(hand)[1] === getCardsValue(hand)[0] + 1
  ) {
    set = `streight`;
  } else if (
    (getCardsValue(hand)[0] === getCardsValue(hand)[1] &&
      getCardsValue(hand)[1] === getCardsValue(hand)[2]) ||
    (getCardsValue(hand)[1] === getCardsValue(hand)[2] &&
      getCardsValue(hand)[2] === getCardsValue(hand)[3]) ||
    (getCardsValue(hand)[2] === getCardsValue(hand)[3] &&
      getCardsValue(hand)[3] === getCardsValue(hand)[4])
  ) {
    set = "three of a kind";
  } else if (
    (getCardsValue(hand)[0] === getCardsValue(hand)[1] &&
      getCardsValue(hand)[2] === getCardsValue(hand)[3]) ||
    (getCardsValue(hand)[0] === getCardsValue(hand)[1] &&
      getCardsValue(hand)[3] === getCardsValue(hand)[4]) ||
    (getCardsValue(hand)[1] === getCardsValue(hand)[2] &&
      getCardsValue(hand)[3] === getCardsValue(hand)[4])
  ) {
    set = "two pairs";
  } else if (
    getCardsValue(hand)[0] === getCardsValue(hand)[1] ||
    getCardsValue(hand)[1] === getCardsValue(hand)[2] ||
    getCardsValue(hand)[2] === getCardsValue(hand)[3] ||
    getCardsValue(hand)[3] === getCardsValue(hand)[4]
  ) {
    set = "one pair";
  } else {
    set = `high card`;
  }
  return set;
}

console.log(`Player 1 cards are: ${hand1} and this is a ${showPokerSet(hand1)}`);
console.log(`Player 2 cards are: ${hand2} and this is a ${showPokerSet(hand2)}`);
console.log(`Player 3 cards are: ${hand3} and this is a ${showPokerSet(hand3)}`);
