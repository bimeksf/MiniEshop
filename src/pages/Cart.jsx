import { useCartStore } from "../contex/cartStore";
import { Link } from "react-router-dom";
export default function Cart() {
  const cartItems = useCartStore((state) => state.cartItems);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const clearCart = useCartStore((state) => state.clearCart);
  const increaseQuantity = useCartStore((state) => state.increaseQuantity);
  const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between items-center border-b pb-2">
              <div>
                <img className="w-20 h-20"  src={item.image} alt={item.title} />
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <div className="flex justify-center items-center gap-2 border-2 border-black rounded-md">
                <button className="p-2 hover:font-bold" onClick={()=>decreaseQuantity(item.id)}>-</button>
                <span>{item.quantity}</span>
                <button  className="p-2 hover:font-bold " onClick={()=>increaseQuantity(item.id)}>+</button>
                </div>

              </div>
              <div className="text-right">
                <p className="font-bold">${(item.price * item.quantity).toFixed(2)}</p>
              </div>
              <button onClick={()=>removeFromCart(item.id)}>X</button>
            </div>
            
          ))}
          <button onClick={clearCart} className="font-bold bg-slate-200 rounded-md p-4" >Clear</button>
          <div className="text-right mt-4">
            <h2 className="text-xl font-bold">Total: ${totalPrice.toFixed(2)}</h2>
          </div>
        </div>
      )}
      <Link to={"/checkout"} className="bg-slate-500 p-4 rounded-md">Proceed to Checkout</Link>
    </div>
  );
}
