// cartStore.js
import { create } from 'zustand';


export const useCartStore = create((set) => (
  

  
  {



  cartItems: JSON.parse(localStorage.getItem("cartItems")) || [], 
  addToCart: (product) => {
    set((state) => {
      const existingProduct = state.cartItems.find(item => item.id === product.id);
      
      if (existingProduct) {
        // exist then +1 
        return {
          cartItems: state.cartItems.map(item => 
            item.id === product.id 
              ? { ...item, quantity: item.quantity +1
              
               } 
              : item
          )
        };
      } else {
        
        return {
          cartItems: [...state.cartItems, { ...product, quantity: 1 }]
        };
      }
    });
  },
  removeFromCart: (id) => set((state) => ({
    cartItems: state.cartItems.filter(item => item.id !== id),
  })),
  clearCart: () => set({ cartItems: [] }),
  increaseQuantity: (id) => set((state) => ({
    cartItems: state.cartItems.map(item =>
      item.id === id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    )
  })),
  decreaseQuantity: (id) => set((state) => ({
    cartItems: state.cartItems.map(item =>
      item.id === id
        ? { ...item, quantity:  item.quantity > 1 ?  item.quantity - 1 : 1 }
        : item
    )
  })),
}));

