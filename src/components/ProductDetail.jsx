export default function ProductDetail({id,title,price,category,image	,rating		,description	 	}){
    return  <div className="bg-slate-100 border-rose-50 border-2 text-left p-4" id={id}>
    <img src={image}  alt="" />
    <div>
    <img src="" alt="" />
    </div>
<div>
    <h2 className="text-lg font-bold ">{title}</h2>
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
    
  <div className="mb-4">

    <div className="flex gap-4 items-center">
    <p className="text-sm text-gray-500">Brand</p> <span>	Glamour Beauty</span>

    </div>
    <div className="flex gap-4 items-center">
    <p className="text-sm text-gray-500">Category</p> <span>{category	}</span>

    </div>
    <div className="flex gap-4 items-center">
    <p className="text-sm text-gray-500">Stock</p> <span>{rating.count}</span>
    </div>
    </div>


  <div className="mb-4">

    <h2>About the product</h2>
  <p>
{description	}
 </p>
  </div>





<button className="p-4 bg-gray-400 rounded-lg">Buy</button>
<button className="p-4 bg-gray-400 rounded-lg">Favourite</button>

<div>
<h2>Reviews</h2>
<div>
<h3>rshawe2</h3>
<div className="flex gap-4">
   <p>******</p>
      <span className="font-bold text-md">4.57</span>
  </div>
  <p>I found the product not long lasting. The quality also seemed a bit downgraded. I don't think its value for money.</p>
</div>


</div>

</div>
}