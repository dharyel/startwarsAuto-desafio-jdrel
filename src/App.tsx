import React from 'react';
import Home from './pages/Home';
import Checkout from './pages/Checkout';
import CheckoutResult from './pages/CheckoutResult';
import {BrowserRouter, Routes, Route} from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
    
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/checkout-result" element={<CheckoutResult />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;
