import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/navbar/Navbar.jsx';

import Shop from './pages/Shop';
import Shopcategory from './pages/Shopcategory';
import Product from './pages/Product';
import Cart from './pages/Cart';
import LoginSignUp from './pages/LoginSignUp';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop />} />

        <Route path="/mens" element={<Shopcategory category="mens" />} />

        <Route path="/womens" element={<Shopcategory category="womens" />} />

        <Route path="/kids" element={<Shopcategory category="kids" />} />

        <Route path="/product" element={<Product />}>
          <Route path=":productId" element={<Product />} />
        </Route>

        <Route path="/cart" element={<Cart />} />

        <Route path="/login" element={<LoginSignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
