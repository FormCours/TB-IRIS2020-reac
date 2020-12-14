import logo from './logo.svg';
import './App.css';
import Horloge from './components/horloge/horloge';
import { useState } from 'react';

function App() {

  const [visible, setVisible] = useState(true);


  return (
    <div className="App">
      
      {visible ? (<>
        <button onClick={() => setVisible(false)}>Masquer</button>
        <Horloge />
      </>) : (<>
        <button onClick={() => setVisible(true)}>Afficher</button>
        <p>Element caché !</p>
      </>)}
    </div>
  );
}

export default App;
