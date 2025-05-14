import { Link } from 'react-router-dom';
import { useCartStore } from '../contex/cartStore';
import { ShoppingCart, Menu,House,CircleUserRound,BookOpenText ,Heart} from "lucide-react";
export default function Header() {
  const cartItems = useCartStore((state) => state.cartItems);
  
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
      <header className=" p-4 fixed bottom-0 w-full z-40 md:top-0 md:bottom-auto md:bg-slate-900">
      {/* Desktop Menu */}
      <div className=" hidden md:flex md:max-w-screen-xl md:mx-auto justify-between items-center">
        <div className="text-white text-2xl font-bold  ">
          <Link to="/">Logo</Link>
        </div>

        <nav className="flex gap-4 text-white justify-between">
            <Link to="/products" className="hover:text-gray-400">Products</Link>


          <Link to="/login" className="hover:text-gray-400"><CircleUserRound /></Link>
          <Link to="/wishlist" className="hover:text-gray-400"><Heart /></Link>
          <Link to="/cart" className="flex items-center gap-1 hover:text-gray-400">
            <ShoppingCart />
            {cartItems.length > 0 && <span>{totalQuantity}</span>}
          </Link>
        </nav>

      </div>

{/* Mobile Menu */}
<nav className="md:hidden bg-gray-800 transition-all duration-300">
  <ul className="flex justify-between items-center text-white p-4">
    <li>
      <Link
        to="/"
        className="hover:text-gray-400 flex flex-col items-center justify-center gap-1"
      >
        <House />
        <span>Home</span>
      </Link>
    </li>
    <li>
      <Link
        to="/products"
        className="hover:text-gray-400 flex flex-col items-center justify-center gap-1"
      >
        <BookOpenText />
        <span>Products</span>
      </Link>
    </li>
    <li>
      <Link
        to="/cart"
        className="hover:text-gray-400 flex flex-col items-center justify-center gap-1"
      >
        <div className="relative">
          <ShoppingCart />
          {cartItems.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-xs rounded-full px-1">
              {cartItems.length}
            </span>
          )}
        </div>
        <span>Cart</span>
      </Link>
    </li>
    <li>
      <Link
        to="/wishlist"
        className="hover:text-gray-400 flex flex-col items-center justify-center gap-1"
      >
        <Heart />
        <span>Wishlist</span>
      </Link>
    </li>



    <li>
      <Link
        to="/login"
        className="hover:text-gray-400 flex flex-col items-center justify-center gap-1"
      >
        <CircleUserRound />
        <span>Login</span>
      </Link>
    </li>
  </ul>
</nav>
    </header>
  );
}
