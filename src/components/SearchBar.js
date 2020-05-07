import React from "react";

function SearchBar({ products, filterData, handleSearch }) {
  return (
    <div className="searchbar">
      <div className="field">
        <div className="control">
          <input
            className="input is-primary"
            type="text"
            placeholder="search..."
            onChange={e => handleSearch(e.target.value)}
          />
        </div>
      </div>
      <label className="checkbox">
        <input type="checkbox" onClick={e => filterData(e.target.checked)} />
        {"  "} Only show products in Stock
      </label>
      <hr />
    </div>
  );
}

export default SearchBar;
