import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import Pricing from './pages/Pricing';
import Product_pricing from './pages/Product_pricing';
import './styles/index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/pricing' element={<Pricing />} />
          <Route path='/pricing/:id' element={<Product_pricing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
