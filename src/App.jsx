import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { DataProdiver } from './components/context/context';
import Header from './components/Header';
import Products from './components/pages/Products'
import Details from './components/pages/Details';
import Cart from './components/pages/Cart';

function App() {
  return (
    <DataProdiver>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/products' element={<Products />} />
          <Route path='/products/:id' element={<Details />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </DataProdiver>
  );
}

export default App;
