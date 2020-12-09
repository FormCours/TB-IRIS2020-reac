import './App.css';
import Welcome from './components/welcome/welcome';
import NumberOdd from './components/number-odd/number-odd';


function App() {
  return (
    <div className="App">
      <h1>Demo de React =)</h1>
      <Welcome name="Riri" />
      <NumberOdd nb={13} />
      <NumberOdd nb="AB" />
      <NumberOdd />
    </div>
  );
}

export default App;
