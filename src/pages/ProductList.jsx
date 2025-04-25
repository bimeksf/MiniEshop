import React from "react";
import ProductCard from "../components/ProductCard";
import { useEffect, useState } from "react";
import FilterBar from "../components/FilterBar";
import { fetchAllProducts } from "../utils/api";

import Loader from "../components/Loader";
import Error from "../components/Error";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("all");
  const [maxPrice, setMaxPrice] = useState(null);
  const [minPrice, setMinPrice] = useState(null)

  useEffect(() => {
    setIsLoading(true);

    async function getData() {
      try {
        const data = await fetchAllProducts();
        setProducts(data);
        setFilteredProducts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    getData();
  }, []);

  useEffect(() => {
    let filtered = products;
    {
      /*  Sorting by price and az */
    }
    if (selectedCategory !== "all")
      filtered = filtered.filter((p) => p.category === selectedCategory);

    if (searchQuery) {
      filtered = filtered.filter((p) =>
        p.title.toLowerCase().includes(searchQuery.toLowerCase())
      )}
      
      const prices = products.map(p => p.price);
      const min = Math.min(...prices);
      const max = Math.max(...prices);
      

      if (minPrice === null || maxPrice === null) {
        setMinPrice(min);
        setMaxPrice(max);
      }


      if (minPrice !== null && minPrice !== "") {
        filtered = filtered.filter((p) => p.price >= parseFloat(minPrice));
      }
      if (maxPrice !== null && maxPrice !== "") {
        filtered = filtered.filter((p) => p.price <= parseFloat(maxPrice));
      }


    
    {
      /*  Sorting by price and az */
    }
    if (sortOrder === "price-asc") {
      filtered = [...filtered].sort((a, b) => a.price - b.price);
    } else if (sortOrder === "price-desc") {
      filtered = [...filtered].sort((a, b) => b.price - a.price);
    } else if (sortOrder === "az") {
      filtered = [...filtered].sort((a, b) => a.title.localeCompare(b.title));
    }

    setFilteredProducts(filtered);
  }, [selectedCategory, searchQuery, sortOrder, products, minPrice, maxPrice]);

  if (isLoading) return <Loader />;
  if (error) return <Error />;
  if (!isLoading && products.length === 0) return <div>No Products found</div>;

  return (
    <div>
      <FilterBar
        products={products}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        setSortOrder={setSortOrder}
        sortOrder={sortOrder}
        setSearchQuery={setSearchQuery}
        searchQuery={searchQuery}
        setMinPrice={setMinPrice}
        setMaxPrice={setMaxPrice}
        minPrice={minPrice}
        maxPrice={maxPrice}
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-4 ">
        {filteredProducts.map((item) => {
          return (
            <ProductCard
              key={item.id}
              title={item.title}
              price={item.price}
              category={item.category}
              image={item.image}
              rating={item.rating}
              id={item.id}
            />
          );
        })}
      </div>
    </div>
  );
}
