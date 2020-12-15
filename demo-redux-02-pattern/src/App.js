import logo from './logo.svg';
import './App.css';
import CounterDisplay from './containers/counter-display/counter-display';
import CounterInteraction from './containers/counter-interaction/counter-interaction';
import CounterReset from './containers/counter-reset/counter-reset';

function App() {
  return (
    <div className="App">
      <CounterDisplay />
      <CounterInteraction />
      <CounterReset />
    </div>
  );
}

export default App;
