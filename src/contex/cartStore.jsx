import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useCartStore = create(
  persist(
    (set) => ({
      cartItems: [],

      addToCart: (product) => {
        set((state) => {
          const existingProduct = state.cartItems.find(item => item.id === product.id);

          if (existingProduct) {
            return {
              cartItems: state.cartItems.map(item =>
                item.id === product.id
                  ? { ...item, quantity: item.quantity + 1 }
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
            ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
            : item
        )
      })),
    }),
    {
      name: 'cart-storage',
    }
  )
);
