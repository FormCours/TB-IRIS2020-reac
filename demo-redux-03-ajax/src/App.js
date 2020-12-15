import logo from './logo.svg';
import './App.css';
import Country from './containers/country/country';
import SearchCountry from './containers/country-search/country-search';

function App() {
  return (
    <div className="App">
      <h1>Demo Ajax avec Redux</h1>
      <SearchCountry />
      <Country />
    </div>
  );
}

export default App;
