import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import FilterBar from "../components/FilterBar";
import { fetchAllProducts } from "../utils/api";
import Loader from "../components/Loader";
import Error from "../components/Error";
import { useSearchParams } from "react-router-dom"; 
import { AnimatePresence, motion } from "framer-motion";
import toast from "react-hot-toast";
import { useCartStore } from "../contex/cartStore";



export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("all");
  const [maxPrice, setMaxPrice] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [checked, setChecked] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  
  const [searchParams, setSearchParams] = useSearchParams(); 

  const { addToCart } = useCartStore();
  


// url params
  useEffect(() => {
    const page = searchParams.get("page");
    const category = searchParams.get("category");
    const search = searchParams.get("search");
    const sort = searchParams.get("sort");
    const minPriceParam = searchParams.get("minPrice");
    const maxPriceParam = searchParams.get("maxPrice");
  
    if (page) setCurrentPage(Number(page));
    if (category) setSelectedCategory(category);
    if (search) setSearchQuery(search);
    if (sort) setSortOrder(sort);
    if (minPriceParam) setMinPrice(minPriceParam);
    if (maxPriceParam) setMaxPrice(maxPriceParam);
  }, [searchParams]);

  useEffect(() => {
    const params = new URLSearchParams();
  
    if (currentPage && currentPage !== 1)
      params.set("page", currentPage.toString());
    if (selectedCategory && selectedCategory !== "all")
      params.set("category", selectedCategory);
    if (searchQuery) params.set("search", searchQuery);
    if (sortOrder && sortOrder !== "all") params.set("sort", sortOrder);
    if (minPrice !== null && minPrice !== "")
      params.set("minPrice", minPrice.toString());
    if (maxPrice !== null && maxPrice !== "")
      params.set("maxPrice", maxPrice.toString());
  
    setSearchParams(params); 
  }, [
    currentPage,
    selectedCategory,
    searchQuery,
    sortOrder,
    minPrice,
    maxPrice,
  ]);
  
  // pages setting
  const [productsPerPage] = useState(12);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  const filteredProducts = React.useMemo(() => {
    if (!products.length) return [];

    let filtered = products;

    if (selectedCategory !== "all") {
      filtered = filtered.filter((p) => p.category === selectedCategory);
    }

    if (searchQuery) {
      filtered = filtered.filter(
        (p) =>
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (minPrice !== null && minPrice !== "") {
      filtered = filtered.filter((p) => p.price >= parseFloat(minPrice));
    }
    if (maxPrice !== null && maxPrice !== "") {
      filtered = filtered.filter((p) => p.price <= parseFloat(maxPrice));
    }

    if (sortOrder === "price-asc") {
      filtered = [...filtered].sort((a, b) => a.price - b.price);
    } else if (sortOrder === "price-desc") {
      filtered = [...filtered].sort((a, b) => b.price - a.price);
    } else if (sortOrder === "az") {
      filtered = [...filtered].sort((a, b) => a.title.localeCompare(b.title));
    }

    if (checked) {
      filtered = filtered.filter((r) => r.rating.rate >= 4);
    }

    return filtered;
  }, [
    products,
    selectedCategory,
    searchQuery,
    sortOrder,
    minPrice,
    maxPrice,
    checked,
  ]);
  
  const totalPages = filteredProducts.length
    ? Math.ceil(filteredProducts.length / productsPerPage)
    : 1;

  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  useEffect(() => {
    setIsLoading(true);
    async function getData() {
      try {
        const data = await fetchAllProducts();
        setProducts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    getData();
  }, []);



  if (isLoading) {
    return (
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-4 ">
        {Array.from({ length: productsPerPage }).map((_, index) => (
          <Loader key={index} />
        ))}
      </div>
    );
  }
  if (error) return <Error />;
  if (!isLoading && products.length === 0) return <div>No Products found</div>;


  const handleBuy = (product) => {
    addToCart(product);
    toast.success(`${product.title} added to Cart`);
  };

  return (
    <div className="flex bg-gradient-to-br from-[rgba(36, 30, 30, 1)] to-[rgba(49, 30, 25, 1) ">
      <div className="fixed top-20 left-0 w-64 h-screen bg-white shadow-lg overflow-y-auto ">
        <FilterBar
          products={products}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          setCurrentPage={setCurrentPage}
          setSortOrder={setSortOrder}
          sortOrder={sortOrder}
          setSearchQuery={setSearchQuery}
          searchQuery={searchQuery}
          setMinPrice={setMinPrice}
          setMaxPrice={setMaxPrice}
          minPrice={minPrice}
          maxPrice={maxPrice}
          setChecked={setChecked}
          checked={checked}
        />
      </div>

      {/* Main Content - Product cards and pagination */}
      <div className="ml-64 w-full p-4">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-16 ">
          {currentProducts.map((item, index) => {
            const isFirstRow = index < 4; // delay for first 4 items

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
                  key={item.id}
                  title={item.title}
                  price={item.price}
                  category={item.category}
                  image={item.image}
                  rating={item.rating}
                  id={item.id}
                  onBuy={() => handleBuy(item)}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Pagination */}
        <div className="flex gap-2 justify-center items-center mt-6 text-white">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="disabled:opacity-50 text-xl hover:scale-150"
          >
            ‹
          </button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              className={`p-2 text-xl hover:underline ${
                currentPage === i + 1 && 'font-medium underline decoration-2 rounded-md'
              }`}
              key={i}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="disabled:opacity-50 text-xl hover:scale-150"
          >
            ›
          </button>
        </div>
      </div>
    </div>
  );
}
