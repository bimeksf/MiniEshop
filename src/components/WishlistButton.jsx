import { Heart } from "lucide-react";
import { useCartStore } from "../contex/cartStore";
import toast from "react-hot-toast";
import { motion } from "framer-motion"; 


export default function WishlistButton({ product , className = "" }) {


  
  const wishItems = useCartStore((state) => state.wishItems);
  const addToWishList = useCartStore((state) => state.addToWishList);
  const removeFromWishList = useCartStore((state) => state.removeFromWishList);

  const isWished = wishItems.some(item => item.id === product.id);

  const toggleWish = () => {
    if (isWished) {
      removeFromWishList(product.id);
      toast.error(`${product.title} removed from Wish List`);
    } else {
      addToWishList(product);
      toast.success(`${product.title} added to Wish List`);
    }
  };

  return (
    <motion.button
    onClick={toggleWish}
    className={`p-2 rounded-full bg-white shadow-md hover:scale-110 transition ${className}`}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 1, duration: 0.5 }}
  >
      <Heart className={isWished ? "fill-red-600 text-red-500" : ""} />
      </motion.button>
  );
}
