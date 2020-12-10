import './App.css';
import {nanoid} from 'nanoid';
import ProductTable from './components/product-table/product-table';

function App() {

  const products = [
    {id: nanoid(), name: 'Pomme', price: 0.5, inPromo: true},
    {id: nanoid(), name: 'Poire', price: 0.9, inPromo: false},
    {id: nanoid(), name: 'Cerise', price: 0.6, inPromo: true},
    {id: nanoid(), name: 'Coca 33cl', price: 3, inPromo: false}
  ]

  return (
    <div className="App">
        <ProductTable products={products} className='elements' />
    </div>
  );
}

export default App;
