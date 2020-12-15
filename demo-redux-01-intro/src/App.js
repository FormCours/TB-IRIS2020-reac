import './App.css';
import {Provider} from 'react-redux';


// Demo store Redux
import {createStore} from 'redux';
import Affichage from './containers/affichage/affichage';
import Action from './containers/action/action';

// Création le "reducer" 
// (Fonction qui permet de modifier les données sur base d'une action)
const initialState = {
  count: 0
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCR':
      // Nouvelle état si action INCR
      return {
        count: state.count + action.payload
      };
    case 'DECR':
      // Nouvelle état si action DECR
      return {
        count: state.count - action.payload
      };
    default:
      // Il faut TOUJOURS renvoyer un nouvelle etat!
      return state;
  }
}

// Création du store
const store = createStore(reducer);


// Utilisation de Redux (SEUL)

// - Recup les données du store
console.log(store.getState());

// - Réaction au modification du store via un abonnement
const unsubscribe = store.subscribe(() => {
  console.log('Le reducer a travaillé :o');
})

// - Envoyer une action a réaliser
store.dispatch({type: 'INCR', payload: 1});
console.log(store.getState());

store.dispatch({type: 'TEST'});
console.log(store.getState());

// - Déabonnement 
unsubscribe();

// - Envoyer une action a réaliser
store.dispatch({type: 'DECR', payload: 5});
console.log(store.getState());


// Utilisation de React-redux
// - Diffusion du store via le Provider

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h2>Demo Redux (Basique)</h2>
        <Affichage />
        <Action />
      </div>
    </Provider>
  );
}

export default App;
