import './App.css';
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import ProductDetailPage from "./pages/ProductDetailPage";
import LoginPage from "./pages/LoginPage";
import Cart from "./pages/Cart";
import Checkout from "./pages/CheckoutPage";
import NotFoundPage from "./pages/NotFoundPage";
import WhishList from "./pages/WhishListPage";
import Layout from "./components/Layout";
import Auth from "./components/Auth";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "products", element: <ProductList /> },
      { path: "products/:id", element: <ProductDetailPage /> },
      { path: "cart", element: <Cart /> },
      { path: "checkout", element: <Checkout /> },
      { path: "login", element: <LoginPage /> },


      {
        element: <Auth />,
        children: [
          { path: "payment", element: <Checkout /> }, 
          { path: "wishlist", element: <WhishList /> },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
