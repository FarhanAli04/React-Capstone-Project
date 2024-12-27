// filepath: /E:/React Capstone/my-capstone/src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Components/layout/layout.jsx';
import SignUp from './Components/auth/sign-in/SignIn.jsx';
import SignIn from './Components/auth/sign-up/SignUp.jsx';
import MyAccount from './Components/my-account/MyAccount.jsx';
import UpdateProfile from './Components/my-account/update-profile/UpdateProfile.jsx';
import ProtectedRoute from './Components/protected/ProtectedRouted.jsx';
import ProductSection from './Components/home/productSection2/ProductSection.jsx';
import ProductDetail from './Components/home/productSection2/ProductDetail.jsx';
import CheckoutForm from './Components/checkout/CheckoutForm';
import OrderComplete from './Components/order/OrderComplete';
import { ProductProvider } from './Components/context/ProductContext.js';
import { CheckoutProvider } from './Components/context/CheckoutContext.js';
import ErrorBoundary from './Components/ErrorBoundary.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <App />,
      },
      {
        path: "sign-up",
        element: <SignUp />,
      },
      {
        path: "sign-in",
        element: <SignIn />,
      },
      {
        path: "account",
        element: (
          <ProtectedRoute>
            <MyAccount />
          </ProtectedRoute>
        ),
      },
      {
        path: "profile",
        element: (
          <ProtectedRoute>
            <UpdateProfile />
          </ProtectedRoute>
        ),
      },
      {
        path: "products",
        element: <ProductSection />,
      },
      {
        path: "product/:id", 
        element: <ProductDetail />,
      },
      {
        path: "checkout",
        element: (
          <ProtectedRoute>
            <CheckoutForm />
          </ProtectedRoute>
        ),
      },
      {
        path: "order-complete",
        element: (
          <ProtectedRoute>
            <OrderComplete />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <ProductProvider>
        <CheckoutProvider>
          <RouterProvider router={router} />
        </CheckoutProvider>
      </ProductProvider>
    </ErrorBoundary>
  </React.StrictMode>
);