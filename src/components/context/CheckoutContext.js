import React, { createContext, useContext, useState } from "react";

const CheckoutContext = createContext();

export const useCheckoutContext = () => useContext(CheckoutContext);

export const CheckoutProvider = ({ children }) => {
  const [checkoutData, setCheckoutData] = useState({});
  const [completedOrders, setCompletedOrders] = useState([]);

  const addCompletedOrder = (order) => {
    setCompletedOrders((prevOrders) => [...prevOrders, order]);
  };

  return (
    <CheckoutContext.Provider
      value={{ checkoutData, setCheckoutData, completedOrders, addCompletedOrder }}
    >
      {children}
    </CheckoutContext.Provider>
  );
};