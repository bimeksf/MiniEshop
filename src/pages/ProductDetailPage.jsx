import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductDetail from "../components/ProductDetail";
import { fetchOneProduct } from "../utils/api";
import Loader from "../components/Loader";
import Error from "../components/Error";

export default function ProductDetailPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);



  useEffect(() => {
    setIsLoading(true);

    if (!id) return;

    async function getData(id) {
      try {
        const data = await fetchOneProduct(id);
        setProduct(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    getData(id);
  }, [id]);

  if (isLoading) return <Loader />;
  if (error) return <Error />;
  if (!product) return <div>Produkt nenalezen.</div>;

  return (
    <div className="min-h-screen w-full bg-[#414141]">
      <ProductDetail
        key={product.id}
        title={product.title}
        price={product.price}
        category={product.category}
        image={product.image}
        rating={product.rating}
        id={product.id}
        description={product.description}
  brand={product.brand}
      />
    </div>
  );
}
