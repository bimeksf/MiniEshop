// src/pages/ProductDetail.jsx
import React from "react";
import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const { id } = useParams();
  return <div>Product Detail for ID: {id}
  
  <div className="bg-slate-100 border-rose-50 border-2 text-left p-4">
                <img src="" alt="" />
                <div>
                <img src="" alt="" />
                </div>
            <div>
                <h2 className="text-lg font-bold ">Product</h2>
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
                
              <div className="mb-4">

                <div className="flex gap-4 items-center">
                <p className="text-sm text-gray-500">Brand</p> <span>	Glamour Beauty</span>

                </div>
                <div className="flex gap-4 items-center">
                <p className="text-sm text-gray-500">Category</p> <span>Beauty</span>

                </div>
                <div className="flex gap-4 items-center">
                <p className="text-sm text-gray-500">Stock</p> <span>44</span>
                </div>
                </div>


              <div className="mb-4">

                <h2>About the product</h2>
              <p>

The Eyeshadow Palette with Mirror offers a versatile range of eyeshadow shades for creating stunning eye looks. With a built-in mirror, it's convenient for on-the-go makeup application. It is important to take care of the patient, to be followed by the patient, but it will happen at such a time that there is a lot of work and pain. For to come to the smallest detail, no one should practice any kind of work unless he derives some benefit from it. Do not be angry with the pain in the reprimand in the pleasure he wants to be a hair from the pain in the hope that there is no breeding. Unless they are blinded by lust, they do not come forth; they are in fault who abandon their duties and soften their hearts, that is, their labors.</p>
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
      




  </div>
  
  
  
  
  
  
  
  
  
  
  
}