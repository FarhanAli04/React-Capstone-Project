import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Components/layout/layout";
import Home from "./Components/home/Home";
import SignUp from "./Components/auth/sign-up/SignUp";
import SignIn from "./Components/auth/sign-in/SignIn";
import MyAccount from "./Components/my-account/MyAccount";
import UpdateProfile from "./Components/my-account/update-profile/UpdateProfile";
import ProtectedRoute from "./Components/protected/ProtectedRouted";
import ProductSection from "./Components/home/productSection2/ProductSection";
import ProductDetail from "./Components/home/productSection2/ProductDetail";
import EarbudGallery from "./Components/home/earbud-gallery/EarbudGallery";
import EarbudDetail from "./Components/home/earbud-gallery/EarbudDetail";
import CheckoutForm from "./Components/checkout/CheckoutForm";
import OrderComplete from "./Components/order/OrderComplete";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="account" element={<ProtectedRoute><MyAccount /></ProtectedRoute>} />
        <Route path="profile" element={<ProtectedRoute><UpdateProfile /></ProtectedRoute>} />
        <Route path="products" element={<ProductSection />} />
        <Route path="product/:id" element={<ProductDetail />} />
        <Route path="earbuds" element={<EarbudGallery />} />
        <Route path="earbud/:id" element={<EarbudDetail />} />
        <Route path="checkout" element={<ProtectedRoute><CheckoutForm /></ProtectedRoute>} />
        <Route path="order-complete" element={<ProtectedRoute><OrderComplete /></ProtectedRoute>} />
      </Route>
    </Routes>
  );
}

export default App;