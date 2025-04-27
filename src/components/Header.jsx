import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCartStore } from '../contex/cartStore';
import { ShoppingCart, Menu } from "lucide-react";

export default function Header() {
  const cartItems = useCartStore((state) => state.cartItems);
  
  // Stav pro řízení hamburger menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Funkce pro přepnutí menu
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-gray-800 p-4">
      {/* Desktop Menu */}
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          <Link to="/">Logo</Link>
        </div>

        <nav className="hidden md:flex space-x-8 text-white">
          <Link to="/" className="hover:text-gray-400">Home</Link>
          <Link to="/products" className="hover:text-gray-400">Products</Link>
          <Link to="/cart" className="flex items-center gap-1 hover:text-gray-400">
            <ShoppingCart />
            {cartItems.length > 0 && <span>{cartItems.length}</span>}
          </Link>
          <Link to="/login" className="hover:text-gray-400">Login</Link>
        </nav>

        {/* Hamburger Menu Button */}
        <div className="md:hidden text-white" onClick={toggleMenu}>
          <Menu />
        </div>
      </div>

      {/* Mobile Menu */}
      <nav className={`md:hidden bg-gray-800 transition-all duration-300 ${isMenuOpen ? 'block' : 'hidden'}`}>
        <ul className="flex flex-col space-y-4 text-white p-4">
          <li>
            <Link to="/" className="hover:text-gray-400" onClick={toggleMenu}>Home</Link>
          </li>
          <li>
            <Link to="/products" className="hover:text-gray-400" onClick={toggleMenu}>Products</Link>
          </li>
          <li>
            <Link to="/cart" className="flex items-center gap-1 hover:text-gray-400" onClick={toggleMenu}>
              <ShoppingCart />
              {cartItems.length > 0 && <span>{cartItems.length}</span>}
            </Link>
          </li>
          <li>
            <Link to="/login" className="hover:text-gray-400" onClick={toggleMenu}>Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
