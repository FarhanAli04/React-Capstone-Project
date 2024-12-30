import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/home/Home";
import ProductDetail from "./Components/home/productSection2/ProductDetail";
import Checkout from "./Components/checkout/CheckoutForm";
import OrderComplete from "./Components/order/OrderComplete";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order-complete" element={<OrderComplete />} />
      </Routes>
    </Router>
  );
}

export default App;