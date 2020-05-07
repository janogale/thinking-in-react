import React from "react";

function SearchBar({ products, filterData, handleSearch }) {
  return (
    <div className="searchbar">
      <form>
        <input
          type="text"
          placeholder="search..."
          onChange={e => handleSearch(e.target.value)}
        />
        <p>
          <input type="checkbox" onClick={e => filterData(e.target.checked)} />
          Only show products in Stock
        </p>
      </form>
    </div>
  );
}

export default SearchBar;
