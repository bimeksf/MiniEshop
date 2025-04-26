import { Link } from "react-router-dom";
import { useCartStore } from '../contex/cartStore';


export default function ProductCard ({id,title,price,category,image	,rating		}){
  const addToCart = useCartStore((state) => state.addToCart);
   return <div className="bg-slate-100 border-rose-50 border-2 text-left p-4 hover:cursor-pointer hover:scale-105" id={id}>
    <Link to={`/products/${id}`}><img className="h-60 inline" src={image} alt="" /></Link>
<div>
    <h2 className="text-lg font-bold ">{title}</h2>
    <p className="text-sm text-gray-500">{category}</p>
  </div>      
  <div className="flex gap-4">
   <p>******</p>
      <span className="font-bold text-md">{rating.rate}</span>
  </div>

  <div className="flex  flex-wrap  flex-col mb-3 ">
      <h2 className="text-red-500 font-bold text-lg">{price}</h2>
      <div>

        <span className="line-through mr-2 text-gray-500">
        {price}
        </span>
        <span className="font-bold text-lg ">
        -15%
        </span>
      </div>

  </div>

<button className="p-4 bg-gray-400 rounded-lg" onClick={()=>{addToCart({id,title,price,category,image	,rating		})}}>Buy</button>
</div>
}