import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";

import Loader from "../components/Loader";
import Error from "../components/Error";
import { fetchAllProducts } from "../utils/api";
import { AnimatePresence,  motion} from "framer-motion";
export default function Home() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    async function getData() {
      
      try {
        const data = await fetchAllProducts();
        console.log("Fetched data:", data); // Zkontrolujte strukturu dat
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
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col m-auto">
        Home Page
        <div className="text-2xl font-semibold mb-4">Doporučené produkty</div>
        <Link to={"/products"} className="text-blue-500 underline text-sm mb-6">View All</Link>
        <div
  className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-4"

>
          {!isLoading  &&
            products.slice(0, 4).map((item,index) => {
              return (
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
                  key={item.id}
                  title={item.title}
                  price={item.price}
                  category={item.category}
                  image={item.image}
                  rating={item.rating}
                  id={item.id}
                  />
    </motion.div>

              );
            })}
        </div>
      </div>
    </div>
  );
}
