
import RangeSlider from "./RangeSlider";

export default function FilterBar({
  setSearchQuery,
  searchQuery,
  products,
  selectedCategory,
  setSelectedCategory,
  setSortOrder,
  sortOrder,
  setMinPrice,
  setMaxPrice,
  maxPrice,
  minPrice,
  checked,
  setChecked,
  setCurrentPage
}) {
  const categories = [...new Set(products.map((item) => item.category))];

  return (
    <div className="flex flex-col gap-4">
      <form className="flex gap-4 items-center">
        <select
          onChange={(e) => {setSortOrder(e.target.value); setCurrentPage(1)}}
          value={sortOrder}
        >
          <option value="all">default</option>
          <option value="price-asc">Price (low to high)</option>
          <option value="price-desc">Price (high to low)</option>
          <option value="az">A-Z</option>
        </select>

        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setCurrentPage(1);
          }}
        />
        <RangeSlider minPrice={minPrice}
          maxPrice={maxPrice}
          setMinPrice={setMinPrice}
          setMaxPrice={setMaxPrice}
          products={products}
          />

        <div className="flex items-center gap-2">
    <input
      className="min-value"
      aria-label="min price"
      type="text"
      placeholder="Min price"
      value={minPrice}
    onChange={(e) => {setMinPrice(e.target.value);
      setCurrentPage(1);}}
    />
    <span className="text-xl font-bold">-</span>
    <input
      className="max-value"
      aria-label="max price"
      type="text"
      placeholder="Max price"
      value={maxPrice}
            onChange={(e) => {setMaxPrice(e.target.value);
              setCurrentPage(1);}}
    />
  </div>
<div>

  <span>Hodnocení od zákazníků</span>
          <label > Rating 4 and more 
        <input type="checkbox" checked={checked} 
        
        onChange={()=>{setChecked(!checked);
        setCurrentPage(1)}}/>
          </label>
</div>
      </form>

      <div>
        <ul className="flex gap-4 flex-wrap mt-2">
          <li
            onClick={() => setSelectedCategory("all")}
            className={`cursor-pointer ${
              selectedCategory === "all" ? "font-bold underline" : ""
            }`}
          >
            All items
          </li>

          {categories.map((cat) => {
            return (
              <li
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={cat === selectedCategory ? "font-bold" : ""}
              >
                {cat}
              </li>
            );
          })}
        </ul>
        <button className="px-3 py-2 bg-red-500 rounded-md" onClick={()=>{setSearchQuery(""); setSortOrder("all"); setSelectedCategory("all");setMinPrice("");
    setMaxPrice("") ;setChecked(false) ;setCurrentPage(1) 
}
      }>Reset</button>
      </div>
    </div>
  );
}
