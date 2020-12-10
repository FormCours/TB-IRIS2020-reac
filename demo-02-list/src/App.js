import './App.css';
import DuckList from './components/duck-list/duck-list';

function App() {

  const ducks = [
    {id: 1, firstname: 'Zaza', lastname: 'Vanderquack'},
    {id: 2, firstname: 'Balthazar', lastname: 'Picsou'},
    {id: 3, firstname: 'Archibald', lastname: 'Gripsou'},
    {id: 4, firstname: 'Donald', lastname: 'Duck'},
    {id: 5, firstname: 'Daisy', lastname: 'Duck'}
  ]

  return (
    <div className="App">
      <h1>Demo Liste</h1>
      <DuckList ducks={ducks} />
    </div>
  );
}

export default App;
