import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return<div className="flex flex-col justify-center items-center">
  
  
  <div className="flex flex-col m-auto">Home Page



  <Link to={"/products"}>View All</Link>
  </div>
  </div>

}