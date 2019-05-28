import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import CardContainer from './components/CardComponents/CardContainer';

const App = () => {
  return (
    <div className="app">
      <HeaderContainer />
      <CardContainer />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

export default App;
