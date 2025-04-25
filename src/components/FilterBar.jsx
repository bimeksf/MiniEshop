export default function FilterBar({
  setSearchQuery,
  searchQuery,
  products,
  selectedCategory,
  setSelectedCategory,
  setSortOrder,
  sortOrder,
}) {
  const categories = [...new Set(products.map((item) => item.category))];

  return (
    <div className="flex flex-col gap-4">
      <form className="flex gap-4 items-center">
        <select
          onChange={(e) => setSortOrder(e.target.value)}
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
          onChange={(e) => setSearchQuery(e.target.value)}
        />
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
      </div>
    </div>
  );
}
