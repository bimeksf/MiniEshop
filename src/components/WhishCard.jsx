import { motion } from "framer-motion"; 
import { useCartStore } from "../contex/cartStore";
import ProductCard from "./ProductCard"; 
import toast from "react-hot-toast";

export default function WishlistCard() {
  const wishItems = useCartStore(state => state.wishItems);
  const addToCart = useCartStore(state => state.addToCart);

  const handleBuy = (item) => {
    addToCart(item);
    toast.success(`${item.title} added to Cart`);
  };

  if (wishItems.length === 0) {
    return <p className="text-center mt-16 text-gray-500">Your wishlist is empty.</p>;
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-16 bg-slate-400">
      {wishItems.map((item, index) => {
        const isFirstRow = index < 4;

        return (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: isFirstRow ? index * 0.2 : 0,
              duration: 0.4,
              ease: 'easeOut',
            }}
          >
            <ProductCard
              id={item.id}
              title={item.title}
              price={item.price}
              category={item.category}
              image={item.image}
              rating={item.rating}
              onBuy={() => handleBuy(item)}
            />
          </motion.div>
        );
      })}
    </div>
  );
}
