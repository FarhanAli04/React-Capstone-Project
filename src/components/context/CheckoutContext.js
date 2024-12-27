// filepath: /E:/React Capstone/my-capstone/src/Components/context/CheckoutContext.js
import React, { createContext, useContext, useState } from "react";

const CheckoutContext = createContext();

export const useCheckoutContext = () => useContext(CheckoutContext);

export const CheckoutProvider = ({ children }) => {
  const [checkoutData, setCheckoutData] = useState({});

  return (
    <CheckoutContext.Provider value={{ checkoutData, setCheckoutData }}>
      {children}
    </CheckoutContext.Provider>
  );
};