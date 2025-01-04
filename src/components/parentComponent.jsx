import React from 'react';
import CheckoutForm from '../Components/checkout/CheckoutForm';
import { ProductProvider } from '../Components/context/ProductContext';
import { CheckoutProvider } from '../Components/context/CheckoutContext';

const ParentComponent = () => {
  return (
    <ProductProvider>
      <CheckoutProvider>
        <div>
          <CheckoutForm />
        </div>
      </CheckoutProvider>
    </ProductProvider>
  );
};

export default ParentComponent;