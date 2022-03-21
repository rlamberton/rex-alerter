import React from 'react';
import AlertList from './components/AlertList';
import './App.css';

const app : React.FC = function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Bittrex Alerter
        </h1>
      </header>
      <AlertList/>
    </div>
  );
}

export default app;
