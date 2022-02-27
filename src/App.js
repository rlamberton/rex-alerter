import AlertList from './components/AlertList';
import './App.css';

function App() {
  const alertList =[];
  alertList.push('one');
  alertList.push('two');
  alertList.push('three');

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Bittrex Alerter
        </h1>
      </header>
      <AlertList items={alertList}/>
    </div>
  );
}

export default App;
