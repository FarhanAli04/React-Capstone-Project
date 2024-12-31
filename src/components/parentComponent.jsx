import React from 'react';
import CheckoutForm from '../Components/checkout/CheckoutForm';
import { ProductProvider } from '../Components/context/ProductContext';

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

