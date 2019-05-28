import React from 'react';
import './Button.css';

const MathSymbols = props => {
  return (
    <div className="operators">
      {props.text}
    </div>
  );
};

export default MathSymbols;

//home for the math operators