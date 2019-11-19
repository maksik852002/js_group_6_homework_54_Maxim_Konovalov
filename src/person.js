import React from 'react';

const Person = (props) => {
  return (
      <div className="person">
        <h1 onClick={props.remove}>{props.name}</h1>
        <p onClick={props.click}>Age: {props.age}</p>
        <p>{props.children}</p>
        <input onChange={props.change} value={props.name}/>
      </div>
  );
};

export default Person