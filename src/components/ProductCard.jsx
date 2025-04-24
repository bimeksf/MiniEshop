export default function ProductCard (){
   return <div className="bg-slate-100 border-rose-50 border-2 text-left p-4">
    <img src="" alt="" />
<div>
    <h2 className="text-lg font-bold ">Product</h2>
    <p className="text-sm text-gray-500">Category</p>
  </div>      
  <div className="flex gap-4">
   <p>******</p>
      <span className="font-bold text-md">4.57</span>
  </div>

  <div className="flex  flex-wrap  flex-col mb-3 ">
      <h2 className="text-red-500 font-bold text-lg">$1521</h2>
      <div>

        <span className="line-through mr-2 text-gray-500">
        $1521
        </span>
        <span className="font-bold text-lg ">
        -15%
        </span>
      </div>

  </div>

<button className="p-4 bg-gray-400 rounded-lg">Buy</button>
</div>
}