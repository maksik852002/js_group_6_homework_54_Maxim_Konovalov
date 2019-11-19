import React, {Component} from 'react';
import Card from './components/Card'
import CardDeck from './components/CardDeck';
import PokerHand from './components/PokerHand';
import './cards.css'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

const deck = new CardDeck();
const hand = new PokerHand();

class App extends Component {
  
  state = {
    cards:[],
    combs:'',
    bet:0,
    wins:0,
    cash:100,
  }
  
  
  componentDidMount = () => {
     
     this.refreshState();
     
  }

  changeCard = () => {
    let bet = this.state.bet;
    let cash = this.state.cash;
    const cards = this.state.cards.map(card => {
      if(card.checked) {
        let replace = deck.getCard();
        card = replace;
      }
      return card;
    })
    let result = hand.getOutcome(cards, bet) 
    let combs = result[0].combs;
    let wins= result[1].wins;
    cash += wins
    if (this.state.bet > 0) {
      bet = 0;
    }
    this.setState({cards,combs,bet,wins,cash});
  }

  refreshState = (myBet) => {
    let cash = this.state.cash;
    let check = true;
    let bet = this.state.bet; 
    let combs = this.state.combs;
    let cards = [...this.state.cards];
    if (myBet !== undefined) {
      check = false;
      cash -= myBet
      combs = 'You can replace 1 to 5 cards if you need'
    }
    deck.newDeck(check);
      cards = deck.getCards(5);
      bet = myBet
      this.setState({cards,bet,cash,combs});
  }

  ifChecked = (e, i) => {
    let bet = this.state.bet;
    const cards = [...this.state.cards]
    if (e.target.checked && bet > 0) {
     cards[i].add = 'back'
     cards[i].checked = true;
     e.target.checked = false;
    } else {
     cards[i].add = '';
     cards[i].checked = false;
    }
    this.setState({cards});
  }

  render = () => {
    let btnBetClass = 'btn btn-secondary my-5 mx-2'
    let btnDealClass = 'd-none'
    if (this.state.bet > 0) {
      btnBetClass = 'd-none'
    } 
    this.state.cards.forEach(card => {
      if (this.state.bet > 0) {
        btnDealClass = 'btn btn-secondary'
      }
    })
  
    return (
      <div className="container mt-5">
        <button onClick = {() => this.refreshState(1)} className={btnBetClass}>1$</button>
        <button onClick = {() => this.refreshState(2)} className={btnBetClass}>2$</button>
        <button onClick = {() => this.refreshState(3)} className={btnBetClass}>3$</button>
        <button onClick = {() => this.refreshState(4)} className={btnBetClass}>4$</button>
        <button onClick = {() => this.refreshState(5)} className={btnBetClass}>5$</button>
        <div className="playingCards faceImages">
          {this.state.cards.map((card,i) => (
            <Card 
            key = {i}
            suit={card.suit} 
            rank={card.rank}
            add={card.add} 
            check={card.checked}
            back = {(e) => this.ifChecked(e, i)}/>
          ))}
          <p>Card left: {deck.cards.length}</p> 
          <p>Your bet: {this.state.bet}$</p> 
          <p>{this.state.combs}</p>
          <p>Your wins: {this.state.wins}$</p>
          <p>Your cash: {this.state.cash}$</p>
        </div>
        <button onClick = {this.changeCard} className={btnDealClass}>Deal Draw</button>
      </div>
    )
  }
  
}

export default App;
