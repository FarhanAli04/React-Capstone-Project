import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ParentComponent from './parentComponent';
import ProductDetail from './home/productSection2/ProductDetail';
import { ProductProvider } from '../Components/context/ProductContext';
import { CheckoutProvider } from '../Components/context/CheckoutContext';
import ErrorBoundary from './ErrorBoundary';

const App = () => {
  return (
    <ProductProvider>
      <CheckoutProvider>
        <Router>
          <ErrorBoundary>
            <Routes>
              <Route path="/checkout" element={<ParentComponent />} />
              <Route path="/product/:id" element={<ProductDetail />} />
            </Routes>
          </ErrorBoundary>
        </Router>
      </CheckoutProvider>
    </ProductProvider>
  );
};

export default App;