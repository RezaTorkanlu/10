import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { DataProdiver } from './components/context/context';
import Header from './components/Header';
import Products from './components/pages/Products'
import Details from './components/pages/Details';
function App() {
  return (
    <DataProdiver>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/products' element={<Products />} />
          <Route path='/products/:id' element={<Details />} />
        </Routes>
      </BrowserRouter>
    </DataProdiver>
  );
}

export default App;
