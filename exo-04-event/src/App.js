import logo from './logo.svg';
import './App.css';
import Counter from './components/counter/counter';

function App() {
  return (
    <div className="App">
      <h1>Exo Compteur</h1>
      <Counter />
      <Counter step={5} />
    </div>
  );
}

export default App;
