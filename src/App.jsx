import './App.css'
import React from "react";
import { BrowserRouter, Route, Link ,Routes} from "react-router-dom";

import Home from "./pages/Home"
import ProductList from "./pages/ProductList"
import ProductDetailPage from "./pages/ProductDetailPage"
import LoginPage from "./pages/LoginPage"
import Cart from "./pages/Cart"
import Checkout from "./pages/CheckoutPage"
import CheckoutPage from "./pages/CheckoutPage"
import NotFoundPage from "./pages/NotFoundPage"
import WhishList from "./pages/WhishListPage"
import Layout from "./components/Layout"
import Auth from "./components/Auth"


function App() {

  return (
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Layout />} >
      <Route index  element={<Home />} />
      <Route path="products" element={<ProductList />} />
      <Route path="products/:id" element={<ProductDetailPage />} />
      <Route path="cart" element={<Cart />} />
      <Route path="checkout" element={<Checkout />} />
      <Route path="login" element={<LoginPage />} />



    <Route element={<Auth/>}>
        <Route path="/payment" element={<CheckoutPage />} />
        <Route path="/wishlist" element={<WhishList />} />
        

    </Route>
    <Route path="*" element={<NotFoundPage/>} />
    </Route>

  </Routes>
</BrowserRouter>

  )
}

export default App
