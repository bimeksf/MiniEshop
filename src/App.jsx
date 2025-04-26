import './App.css'
import React from "react";
import { BrowserRouter, Route, Link ,Routes} from "react-router-dom";

import Home from "./pages/Home"
import ProductList from "./pages/ProductList"
import ProductDetailPage from "./pages/ProductDetailPage"
import LoginPage from "./pages/LoginPage"
import Cart from "./pages/Cart"
import Checkout from "./pages/CheckoutPage"
import Layout from "./components/Layout"



function App() {

  return (
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Layout />} >
      <Route index  element={<Home />} />
      <Route path="/products" element={<ProductList />} />
      <Route path="/products/:id" element={<ProductDetailPage />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/login" element={<LoginPage />} />
    </Route>
  </Routes>
</BrowserRouter>

  )
}

export default App
