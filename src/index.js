import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Components/App'; // Ensure the correct path to App component
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Components/layout/layout.jsx';
import SignUp from './Components/auth/sign-up/SignUp.jsx';
import SignIn from './Components/auth/sign-in/SignIn.jsx';
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
import EarbudGallery from './Components/home/earbud-gallery/EarbudGallery.jsx';
import EarbudDetail from './Components/home/earbud-gallery/EarbudDetail.jsx';
import Home from './Components/home/Home.jsx'; // Import the Home component

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />, // Use the Home component here
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
        path: "earbuds",
        element: <EarbudGallery />,
      },
      {
        path: "earbud/:id",
        element: <EarbudDetail />,
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