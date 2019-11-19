class PokerHand {
 
  getOutcome = (cards, bet) => {
    let fcount = 0;
    let rcount = 0;
    let scount = 0;
    let value = [];
    let suits = [];
    let str = []; 
    let tresure;
      cards.forEach(card => {
        value.push(card.val)
        value = value.sort((a,b) => b-a)
        suits.push(card.suit)
      })
      for(var i=0; i<5; i++) {
        if (value[i] - value[i+1] === 1) {
            fcount++;
          } 
        for(var j=0; j<5; j++){
          if (value[i] === value[j] && j!==i) {
            rcount ++;
          }
          if (suits[i] === suits[j] && j!==i) {
            scount ++;
          }
        }
      }
      
      if(value[0] === 14 && fcount === 4 && scount === 20) {
        tresure = bet*250
        str.push({combs:'Royal Flush'}, {wins:tresure}) 
      } else if (fcount === 4 && scount ===20) {
        tresure = bet*50
        str.push({combs:'Straight Flush'}, {wins:tresure}) 
      } else if (fcount === 4 ) {
        tresure = bet*4
        str.push({combs:'Straight'}, {wins:tresure}) 
      } else if (scount === 20) {
        tresure = bet*6
        str.push({combs:'Flush'}, {wins:tresure}) 
      } else if (rcount === 0) {
        tresure = bet*0
        str.push({combs:'High Card'}, {wins:tresure}) 
      } else if (rcount === 2) {
        tresure = bet*1
        str.push({combs:'Pair'}, {wins:tresure}) 
      } else if (rcount === 4) {
        tresure = bet*2
        str.push({combs:'Two Pairs'}, {wins:tresure}) 
      } else if (rcount ===  6) {
        tresure = bet*3
        str.push({combs:'Three of a Kind'}, {wins:tresure}) 
      } else if (rcount ===  8) {
        tresure = bet*9
        str.push({combs:'Full House'}, {wins:tresure}) 
      } else if (rcount === 12) {
        tresure = bet*25
        str.push({combs:'Four of a Kind,'}, {wins:tresure}) 
      } 
    return str
  }

}

export default PokerHand;