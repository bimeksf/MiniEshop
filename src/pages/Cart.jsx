import { useCartStore } from "../contex/cartStore";
import { useEffect } from 'react';
export default function Cart() {
  const cartItems = useCartStore((state) => state.cartItems);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const clearCart = useCartStore((state) => state.clearCart);
  const increaseQuantity = useCartStore((state) => state.increaseQuantity);
  const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  useEffect(()=>{
    localStorage.setItem("cartItems", JSON.stringify(cartItems))


},[cartItems])
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
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <p>Quantity: {item.quantity}</p>
                <button onClick={()=>increaseQuantity(item.id)}>+</button>
                <button onClick={()=>decreaseQuantity(item.id)}>-</button>
              </div>
              <div className="text-right">
                <p className="font-bold">${(item.price * item.quantity).toFixed(2)}</p>
              </div>
              <button onClick={()=>removeFromCart(item.id)}>X</button>
            </div>
          ))}
          <button onClick={clearCart}>Clear</button>
          <div className="text-right mt-4">
            <h2 className="text-xl font-bold">Total: ${totalPrice.toFixed(2)}</h2>
          </div>
        </div>
      )}
    </div>
  );
}
