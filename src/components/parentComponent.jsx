import React from 'react';
import CheckoutForm from '../checkout/CheckoutForm';
import { ProductProvider } from '../../context/ProductContext';

const ParentComponent = () => {
  return (
    <ProductProvider>
      <div>
        <CheckoutForm />
      </div>
    </ProductProvider>
  );
};

export default ParentComponent;
