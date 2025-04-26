import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Filters = ({ filtersData }) => {
  const { categories } = useSelector((store) => store.product);
  const [filters, setFilters] = useState({
    title: "",
    category: "",
    price: 0,
  });

  const handleSearch = (e) => {
    e.preventDefault();
    filtersData(filters);
  };

  const handleFieldChange = (e) => {
    setFilters((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  return (
    <div className="mb-7">
      <div className="flex items-center gap-2">
        <input
          type="text"
          placeholder="Enter Title..."
          className="flex-grow px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={filters.title}
          name="title"
          onChange={handleFieldChange}
        />

        <select
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={filters.category}
          onChange={handleFieldChange}
          name="category"
        >
          {categories?.length &&
            categories.map((category) => {
              return (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              );
            })}
        </select>

        <div>
          <label
            htmlFor="priceRange"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Price
          </label>
          <input
            min={0}
            max={2000}
            id="priceRange"
            type="range"
            value={filters.price}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
            name="price"
            onChange={handleFieldChange}
          />
          <span>${filters.price}</span>
        </div>

        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Filters;
