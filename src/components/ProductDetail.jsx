import { Star } from "lucide-react";
import { useCartStore } from "../contex/cartStore";
export default function ProductDetail({
  id,
  title,
  price,
  category,
  image,
  rating,
  description,
  brand,
}) {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <div
      className=" p-4 text-left  flex flex-col  md:flex-row   min-h-screen w-full gap-4 overflow-x-auto"
      id={id}
    >
      <img
        src={image}
        alt={title}
        className="w-full md:w-[600px] h-[650px] object-contain bg-white p-4 rounded-3xl shadow-md  transition-transform duration-300 hover:scale-105"
      />

      <div className="p-4 bg-slate-200 rounded-3xl  flex-1 h-4/6">
        <div className="flex  flex-wrap  flex-col mb-3 ">
          <h2 className="text-3xl font-bold py-4">{title}</h2>
          <div className="flex gap-4">
            <div className="flex justify-center items-center">
              {[...Array(5)].map((_, index) => (
                <Star
                  key={index}
                  className={
                    index < Math.floor(rating.rate)
                      ? "text-yellow-400 fill-yellow-400"
                      : "text-gray-300"
                  }
                />
              ))}
            </div>
            <span className="font-bold text-3xl">{rating.rate}</span>
          </div>

          <p className=" font-bold text-sm py-4">
            <span className=" text-gray-500">Category |</span> {category}{" "}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className=" gap-2 flex-1 flex-col bg-slate-300 rounded-xl p-4 text-gray-500 min-h-24">
            <p className="text-sm font-bold text-black">Price</p>
            <p className="text-3xl font-bold text-black my-2">${price}</p>
          </div>
          <div className="flex flex-col gap-2  flex-1 bg-slate-300 rounded-xl p-4 text-gray-700 min-h-24">
            <p className="text-sm font-bold text-black">Brand</p>
            <p>{brand}</p>
          </div>
          <div className="flex flex-col gap-2 flex-1 bg-slate-300 rounded-xl p-4 text-gray-700 min-h-24">
            <p className="text-sm font-bold text-black">Stock</p>
            <p>{rating.count}</p>
          </div>
        </div>

        <div className="my-4">
          <h2 className="text-3xl font-bold my-4">Description</h2>
          <p className="tracking-wide leading-relaxed">{description}</p>
        </div>

        <div className="flex gap-4">
          <button
            className="p-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            onClick={() =>
              addToCart({
                id,
                title,
                price,
                category,
                image,
                rating,
                description,
                brand,
              })
            }
          >
            Buy
          </button>
          <button className="p-4 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition">
            Favourite
          </button>
        </div>

        <div>
          <h2 className="text-2xl font-bold mt-6">Reviews</h2>
          <div className="mt-2 p-4 bg-slate-100 rounded-xl">
            <h3 className="font-semibold">rshawe2</h3>
            <div className="flex items-center gap-2 mb-2">
              <p className="text-yellow-400">{"★".repeat(Math.round(rating.rate))}</p>
              <span className="text-gray-600 text-sm font-bold">4.57</span>
            </div>
            <p className="text-gray-600">
              I found the product not long lasting. The quality also seemed a bit
              downgraded. I don't think it's value for money.
            </p>
          </div>
        </div>




      </div>
    </div>
  );
}
