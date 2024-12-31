import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store/store'; 
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ProductProvider } from './Components/context/ProductContext';
import { CheckoutProvider } from './Components/context/CheckoutContext';
import ErrorBoundary from './Components/ErrorBoundary';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorBoundary>
        <ProductProvider>
          <CheckoutProvider>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </CheckoutProvider>
        </ProductProvider>
      </ErrorBoundary>
    </Provider>
  </React.StrictMode>
);