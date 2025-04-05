import { useState } from "react";

const Filters = ({ search }) => {
  const [searchValue, setSearchValue] = useState("");
  const handleSearch = (e) => {
    e.preventDefault();
    search(searchValue);
    // const combineFilters = {
    //   title: searchValue,
    //   category: categoryValue,
    //   priceMin: 200,
    //   priceMax: 600
    // }
  };
  return (
    <div className="mb-7">
      <div className="flex items-center gap-2">
        <input
          type="text"
          placeholder="Search..."
          className="flex-grow px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
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
