import React from 'react';
import './Button.css';

const ActionButton = props => {
  return (
      <button className="wide-action-button">{props.text}</button>
  );
};

export default ActionButton;

//to be used for '0' and 'clear' characters
//larger white buttons - wide ones
