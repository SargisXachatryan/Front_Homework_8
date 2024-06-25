import { useReducer } from 'react';
import './App.css';
import { ProductList } from './components/ProductList';
import { Basket } from './components/Basket';
import { reducer, initialState, BasketContext } from './BasketContext';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <BasketContext.Provider value={{ state, dispatch }}>
      <div className='row'>
        <ProductList />
        <Basket />
      </div>
    </BasketContext.Provider>
  );
}

export default App;