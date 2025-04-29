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
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <form className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-600">Sort by</label>
          <select
            onChange={(e) => { setSortOrder(e.target.value); setCurrentPage(1); }}
            value={sortOrder}
            className="mt-2 p-2 w-full rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">Default</option>
            <option value="price-asc">Price (low to high)</option>
            <option value="price-desc">Price (high to low)</option>
            <option value="az">A-Z</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600">Search</label>
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(1);
            }}
            className="mt-2 p-2 w-full rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <RangeSlider
          minPrice={minPrice}
          maxPrice={maxPrice}
          setMinPrice={setMinPrice}
          setMaxPrice={setMaxPrice}
          products={products}
        />

        <div className="flex gap-4">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-600">Min Price</label>
            <input
              type="number"
              placeholder="Min"
              value={minPrice}
              onChange={(e) => { setMinPrice(e.target.value); setCurrentPage(1); }}
              className="mt-2 p-2 w-full rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-600">Max Price</label>
            <input
              type="number"
              placeholder="Max"
              value={maxPrice}
              onChange={(e) => { setMaxPrice(e.target.value); setCurrentPage(1); }}
              className="mt-2 p-2 w-full rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={checked}
            onChange={() => {
              setChecked(!checked);
              setCurrentPage(1);
            }}
            className="form-checkbox h-5 w-5 text-blue-500"
          />
          <span className="text-sm text-gray-600">4 stars and above</span>
        </div>

        <div>
          <label className="block text-sm  text-black font-bold">Category</label>
          <ul className="flex gap-4 flex-wrap mt-2">
            <li
              onClick={() => setSelectedCategory("all")}
              className={`cursor-pointer ${selectedCategory === "all" ? "font-bold text-blue-600" : "text-gray-600"}`}
            >
              All items
            </li>
            {categories.map((cat) => (
              <li
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={cat === selectedCategory ? "font-bold text-blue-600" : "text-gray-600"}
              >
                {cat}
              </li>
            ))}
          </ul>
        </div>

        <button
          className="w-full py-3 bg-red-500 text-white rounded-md hover:bg-red-600 focus:ring-2 focus:ring-red-500 transition"
          onClick={() => {
            setSearchQuery("");
            setSortOrder("all");
            setSelectedCategory("all");
            setMinPrice("");
            setMaxPrice("");
            setChecked(false);
            setCurrentPage(1);
          }}
        >
          Reset Filters
        </button>
      </form>
    </div>
  );
}
