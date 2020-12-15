import logo from './logo.svg';
import './App.css';
import SearchBar from './components/search-bar/search-bar-v2';
import Horloge from './components/horloge/horloge-v2';
import CountryAjax1 from './components/country-ajax/country-ajax-class';
import { useState } from 'react';
import CountryAjax2 from './components/country-ajax/country-ajax-hook';

function App() {

  const [code, setCode] = useState('be');

  return (
    <div className="App">
      <h1>Demo Hook !</h1>
      <SearchBar onSearch={setCode} />
      <Horloge />

      <CountryAjax1 code={code} />
      <CountryAjax2 code={code} />
    </div>
  );
}

export default App;
