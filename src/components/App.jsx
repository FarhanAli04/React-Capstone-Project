import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ParentComponent from './parentComponent';
import ProductDetail from './home/productSection2/ProductDetail';
import { ProductProvider } from '../context/ProductContext';
import { CheckoutProvider } from '../context/CheckoutContext';

const App = () => {
  return (
    <ProductProvider>
      <CheckoutProvider>
        <Router>
          <Routes>
            <Route path="/checkout" element={<ParentComponent />} />
            <Route path="/product/:id" element={<ProductDetail />} />
          </Routes>
        </Router>
      </CheckoutProvider>
    </ProductProvider>
  );
};

export default App;
