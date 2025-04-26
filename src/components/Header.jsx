// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useCartStore } from '../contex/cartStore';

export default function Header() {
  const cartItems = useCartStore((state) => state.cartItems);

  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex space-x-4 text-white gap-4">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
        Košík ({cartItems.length})
        </li>
      </ul>
    </nav>
  );
}