import React from "react";
import { useParams } from "react-router-dom";
import ProductDetailCard   from "../components/ProductDetail"


export default function ProductDetailPage() {
  const { id } = useParams();
  return <div>Product Detail for ID: {id}
  

    <ProductDetailCard/>
      




  </div>
  
  
  
  
  
  
  
  
  
  
  
}