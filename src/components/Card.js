import React from 'react';

const suits = {
  'D': 'diams',
  'H': 'hearts',
  'C': 'clubs',
  'S': 'spades'
}

const suitsImg = {
  'D': '♦',
  'H': '♥',
  'C': '♣',
  'S': '♠'
}

const Card = props => {
  let addClass = `rank-${props.rank.toLowerCase()} ${suits[props.suit]}`;
  let suit = 'suit';
  if (props.check) {
    suit = 'd-none';
    addClass = props.add;
  }

  return (
    <label htmlFor={`c-${props.rank}${props.suit}`} className={`card align-top ${addClass}`}>
      <span className="rank">{props.rank}</span>
      <span className={suit}>{suitsImg[props.suit]}</span>
      <input onClick={props.back} type="checkbox" id={`c-${props.rank}${props.suit}`} className="d-none"/>
    </label>
  )
}
export default Card;