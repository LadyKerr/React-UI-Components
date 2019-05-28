import React from 'react';
import './App.css';

import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';


const App = () => {
  return (
    <div className="calc-container">
      <div className="calc-top-black">
        <CalculatorDisplay text="0" />
      </div>

      <div className="calc-main">
        <ActionButton text="clear" />
        <div className="calc-nine">
          <div className="row-one">
            <NumberButton text="7" />
            <NumberButton text="8" />
            <NumberButton text="9" />
          </div>
          <div className="row-two">
            <NumberButton text="4" />
            <NumberButton text="5" />
            <NumberButton text="6" />
          </div>
          <div className="row-three">
            <NumberButton text="1" />
            <NumberButton text="2" />
            <NumberButton text="3" />
          </div>
        </div>
      </div>

        <ActionButton />
    </div>
  );
};

export default App;
