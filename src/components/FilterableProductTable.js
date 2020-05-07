import React, { useState } from "react";

// components

import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

// import data and pass as prop
import productsData from "../data/products";

function FilterableProductTable() {
  const [products, setProducts] = useState(productsData);

  const filterData = status => {
    if (status) {
      let filtered = products.filter(p => p.stocked);
      setProducts(filtered);
    } else {
      setProducts(productsData);
    }
  };

  const handleSearch = v => {
    if (v) {
      v = v.toLowerCase();
      let found = products.filter(p => p.name.toLowerCase().includes(v));

      setProducts(found);
    } else {
      setProducts(productsData);
    }
  };

  return (
    <div className="products">
      <h2>Products</h2>
      <SearchBar filterData={filterData} handleSearch={handleSearch} />
      <ProductTable products={products} />
    </div>
  );
}

export default FilterableProductTable;
