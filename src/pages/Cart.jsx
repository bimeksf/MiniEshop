import { useCartStore } from '../contex/cartStore';

export default function Cart() {
  const cartItems = useCartStore((state) => state.cartItems);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const clearCart = useCartStore((state) => state.clearCart);

  return (
    <div className="cart-page">
      <h1>Cart</h1>
      {cartItems.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} className="font-bold">
            <img className='w-40 h-40' src={item.image} alt={item.title} />
            <div>
              <h3>{item.title}</h3>
              <p>{item.price} Kč</p>
            </div>
            <button className='p-4 bg-red-400 rounded-md' onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        ))
      )}
      {cartItems.length > 0 && (
        <button onClick={clearCart} className="font-bold">
          Clear Cart
        </button>
      )}
    </div>
  );
}



