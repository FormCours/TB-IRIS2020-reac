import logo from './logo.svg';
import './App.css';
import DateDuJour1 from './components/date-du-jour/date-du-jour-v1';
import DateDuJour2 from './components/date-du-jour/date-du-jour-v2';

function App() {
  return (
    <div className="App">
     <h1>Exo State</h1>
     <DateDuJour1 />
     <DateDuJour2 />
    </div>
  );
}

export default App;
