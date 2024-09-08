import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./assets/sass/main.scss";
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Header from './components/header/index';
import Footer from './components/Footer';
const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <div className='section'>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
      <Footer />

    </div>
  );
};

export default App;
