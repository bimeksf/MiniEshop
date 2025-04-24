// src/pages/ProductList.jsx
import React from "react";
import ProductCard from "../components/ProductCard"


export default function ProductList() {
  return <div>
    
    
    
    <h1>
      
      Product List
      
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-4 ">

        <ProductCard/>


      

      </div>




  </div>;




}