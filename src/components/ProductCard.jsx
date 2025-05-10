import { Link } from "react-router-dom";
import { Star } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion"; 

import WishlistButton from "./WishlistButton"


export default function ProductCard({ id, title, price, category, image, rating ,onBuy }) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div 
      className="bg-white border rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col group h-full relative"
      id={id}
    >
      <div className="relative w-full h-64 bg-slate-100 flex items-center justify-center ">
        {isLoading && (
          <div className="absolute inset-0 animate-pulse bg-gray-300" />
        )}
        <Link to={`/products/${id}`}>
          <img 
            src={image} 
            alt={title} 
            className={`h-40 object-contain mx-auto transition-transform duration-300 ${isLoading ? 'opacity-0' : 'opacity-100 group-hover:scale-110'} `}
            onLoad={() => setIsLoading(false)}
            loading="lazy"
          />
        </Link>
        
      </div>
                  <WishlistButton     product={{ id, title, price, category, image, rating}} 
                  
                  
  className="absolute top-2 right-2 z-10"
                  
                  />

      <div className="p-4 flex flex-col flex-grow justify-between">
        <div className="flex flex-col gap-4 flex-grow">
          <div className="min-h-[50px]">
            <h2 className="text-lg font-bold text-gray-800 line-clamp-2 flex-1 pr-4">{title}</h2>
          </div>
          <p className="text-xs text-gray-500 whitespace-nowrap">{category}</p>

          <div className="flex items-center gap-2 min-h-[30px]">
            {[...Array(5)].map((_, index) => (
              <Star
                key={index}
                size={18}
                className={index < Math.round(rating.rate) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
              />
            ))}
            <span className="text-sm font-semibold">{rating.rate}</span>
          </div>

          <div className="min-h-[40px]">
            <h2 className="text-2xl font-extrabold text-red-500">${price}</h2>
          </div>
        </div>

       
        <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={onBuy}
                className="bg-blue-500 text-white px-4 py-2 mt-2 rounded hover:bg-blue-600"
      >
        Buy
      </motion.button>
      </div>
    </div>
  );
}
