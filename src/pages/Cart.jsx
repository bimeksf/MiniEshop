import { useCartStore } from "../contex/cartStore";
import { Link } from "react-router-dom";
import { Plus, Minus, X } from "lucide-react";

export default function Cart() {
  const cartItems = useCartStore((state) => state.cartItems);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const clearCart = useCartStore((state) => state.clearCart);
  const increaseQuantity = useCartStore((state) => state.increaseQuantity);
  const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="p-4 h-screen">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="flex flex-col md:flex-row gap-4">
          {/* Left half: Cart items */}
          <div className="flex-1 space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col border-b pb-2 gap-4 mb-4 bg-slate-50 rounded-xl p-4"
              >
                <div className="flex gap-4 w-full">
                  <img
                    className="w-20 h-20 object-contain"
                    src={item.image}
                    alt={item.title}
                  />
                  <h2 className="text-sm font-semibold">{item.title}</h2>
                  <div className="flex flex-col flex-1">
                    <button
                      className="self-end"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <X />
                    </button>
                  </div>
                </div>

                {/* Bottom card */}
                <div className="flex justify-between items-center">
                  <div className="flex justify-center items-center gap-2 border-2 border-black rounded-md">
                    <button
                      className="p-1 hover:font-bold rounded-tl-md rounded-bl-md bg-gray-200"
                      onClick={() => decreaseQuantity(item.id)}
                    >
                      <Minus />
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      className="p-1 hover:font-bold bg-gray-200 rounded-tr-md rounded-br-md"
                      onClick={() => increaseQuantity(item.id)}
                    >
                      <Plus />
                    </button>
                  </div>

                  <div className="text-right">
                    <p className="font-bold">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                </div>
              </div>
            ))}
              <button
                onClick={clearCart}
                className="font-bold bg-slate-200 rounded-md p-4 w-full md:w-auto"
              >
                Clear
              </button>
          </div>

          {/* Right half: Clear button and Checkout */}
          <div className="flex-1 flex flex-col items-end">
            <div className="text-right mt-4 flex flex-col gap-4 w-full">
                      <ul className="space-y-2">
            {cartItems.map((item) => (
              <li key={item.id} className="flex justify-between">
                <span>{item.title}</span>
                <span>{item.quantity} x</span>
              </li>
            ))}
          </ul>
              <h2 className="text-xl font-bold">Total: ${totalPrice.toFixed(2)}</h2>
              <Link
                to={"/checkout"}
                className="bg-slate-500 p-4 rounded-md text-center w-full md:w-auto"
              >
                Proceed to Checkout
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}