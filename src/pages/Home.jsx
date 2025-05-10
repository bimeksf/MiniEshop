import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";


import Loader from "../components/Loader";
import Error from "../components/Error";
import { fetchAllProducts } from "../utils/api";
import { AnimatePresence,  motion} from "framer-motion";

import { useCartStore } from '../contex/cartStore';
import toast from 'react-hot-toast';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const addToCart = useCartStore((state) => state.addToCart);
  
  
  const handleBuy = (product) => {
    addToCart(product);
    toast.success(`${product.title} added to Cart`);
  }

  useEffect(() => {
    setIsLoading(true);
    async function getData() {
      
      try {
        const data = await fetchAllProducts();
        console.log("Fetched data:", data); 
        setProducts(data);
      } catch (error) {
        setError(error.message);
      } finally{

        setIsLoading(false);
      }

    }
    getData();
  }, []);


  if (isLoading ) {
    return <Loader />;
  }

  if (error ) {
    return <Error />;
  }



  
  return (
    <div className="flex flex-col w-full">
      
      {/* Hero  */}
      <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-br from-[rgba(36, 30, 30, 1)] to-[rgba(49, 30, 25, 1) ] text-white">
        <motion.h1 
        
        initial={{opacity:0 , y:20}}
        animate={{opacity:1 , y:0}}
        transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
        
        className=" text-xl  md:text-5xl font-bold mb-4">Welcome to our Eshop</motion.h1>
        <motion.p 
          initial={{opacity:0 , y:20}}
        animate={{opacity:1 , y:0}}
        transition={{ delay: 1, duration: 0.6, ease: "easeOut" }}
        className="md:text-xl  text-base  mb-8 text-center max-w-xl">
        Your one-stop destination for everything you need. From gadgets to fashion, find quality products at unbeatable prices!         </motion.p>
        
        <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 1.2, duration: 0.5 }}
>


        <Link
          to="products"
          className="bg-white text-indigo-600 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-gray-200 transition"
          >
            Shop Now  
        </Link>
          </motion.div>
      </section>

      {/* Product section*/}
      <section id="products" className="min-h-screen px-4 py-16 bg-slate-400 text-black">
        <div className="text-3xl font-bold text-center  flex flex-col md:justify-between md:flex-row items-center mb-8">


        <h2>Our Products </h2>

        <Link
          to="products"
          className=" text-indigo-600 font-semibold px-6 py-3   hover:underline transition"
        >
          View all Products
        </Link>



            </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 auto-rows-fr">
          {!isLoading && products.slice(0, 4).map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.2,
                duration: 0.4,
                ease: "easeOut",
              }}
            >
              <ProductCard
                title={item.title}
                price={item.price}
                category={item.category}
                image={item.image}
                rating={item.rating}
                id={item.id}
                onBuy={() => handleBuy(item)}
              />
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
}