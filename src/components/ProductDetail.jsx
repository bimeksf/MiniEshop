import { motion } from "framer-motion"; 
import { useCartStore } from '../contex/cartStore';
import { Star,Heart } from "lucide-react";
import toast from "react-hot-toast";

import WishlistButton from "./WishlistButton"

export default function ProductDetail({
  id,
  title,
  price,
  category,
  image,
  rating,
  description,
  brand,
}) {
  const addToCart = useCartStore((state) => state.addToCart);


  const handleBuy = () => {
    const product = { id, title, price, category, image, rating, description, brand };
    addToCart(product);
    toast.success(`${product.title} added to Cart`);
  };




  return (
    <motion.div
      className="p-4 text-left flex flex-col md:flex-row min-h-screen w-full gap-4 overflow-x-auto"
      id={id}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }} 
    >
      <motion.img
        src={image}
        alt={title}
        className="w-full md:w-[600px] h-[650px] object-contain bg-white p-4 rounded-3xl shadow-md transition-transform duration-300 hover:scale-105"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      />

      <motion.div
        className="p-4 bg-slate-200 rounded-3xl flex-1 h-4/6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <div className="flex flex-wrap flex-col mb-3">
          <h2 className="text-3xl font-bold py-4">{title}</h2>

          <div className="flex gap-4">
            <div className="flex justify-center items-center">
              {[...Array(5)].map((_, index) => (
                <Star
                  key={index}
                  className={
                    index < Math.floor(rating.rate)
                      ? "text-yellow-400 fill-yellow-400"
                      : "text-gray-300"
                  }
                />
              ))}
            </div>
            <motion.span
              className="font-bold text-3xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              {rating.rate}
            </motion.span>
          </div>

          <motion.p
            className="font-bold text-sm py-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <span className="text-gray-500">Category |</span> {category}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <motion.div
            className="gap-2 flex-1 flex-col bg-slate-300 rounded-xl p-4 text-gray-500 min-h-24"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <p className="text-sm font-bold text-black">Price</p>
            <p className="text-3xl font-bold text-black my-2">${price}</p>
          </motion.div>

          <motion.div
            className="flex flex-col gap-2 flex-1 bg-slate-300 rounded-xl p-4 text-gray-700 min-h-24"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <p className="text-sm font-bold text-black">Brand</p>
            <p>{brand}</p>
          </motion.div>

          <motion.div
            className="flex flex-col gap-2 flex-1 bg-slate-300 rounded-xl p-4 text-gray-700 min-h-24"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.7 }}
          >
            <p className="text-sm font-bold text-black">Stock</p>
            <p>{rating.count}</p>
          </motion.div>
        </div>

        <div className="my-4">
          <h2 className="text-3xl font-bold my-4">Description</h2>
          <p className="tracking-wide leading-relaxed">{description}</p>
        </div>

        <div className="flex gap-4">
          <motion.button
            className="p-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            onClick={handleBuy}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            Buy
          </motion.button>





          <WishlistButton     product={{ id, title, price, category, image, rating, description, brand }}/>

        </div>

        <div>
          <h2 className="text-2xl font-bold mt-6">Reviews</h2>
          <div className="mt-2 p-4 bg-slate-100 rounded-xl">
            <h3 className="font-semibold">rshawe2</h3>
            <div className="flex items-center gap-2 mb-2">
              <p className="text-yellow-400">{"★".repeat(Math.round(rating.rate))}</p>
              <span className="text-gray-600 text-sm font-bold">4.57</span>
            </div>
            <p className="text-gray-600">
              I found the product not long lasting. The quality also seemed a bit
              downgraded. I don't think it's value for money.
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
