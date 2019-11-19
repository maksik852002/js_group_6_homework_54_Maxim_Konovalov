const ranks = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
const suits = ["D","S","H","C"]

class CardDeck {
  cards = [];
  max = 51;

  newDeck = (check) => {
    this.cards= [];
    suits.forEach(suit => {
      let val = 1;
      for(var rank of ranks) {
        val ++
        this.cards.push({rank:rank, suit:suit, val:val, checked:check, add:'back'});
      }
    })
  }

  getCard = ()  => {
    let random = Math.floor(Math.random() *(this.max +1));
    let card = this.cards[random];
    this.cards.splice(random, 1);
    this.max --;
    return card;
  }

  getCards = qty => {
    let dealCards = [];
    for(let i=0; i<qty; i++) {
      dealCards.push(this.getCard());
    }
    return dealCards;
  }
}

export default CardDeck;