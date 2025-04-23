// src/pages/ProductDetail.jsx
import React from "react";
import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const { id } = useParams();
  return <div>Product Detail for ID: {id}</div>;
}