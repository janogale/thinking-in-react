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
      console.log(products)
      console.log(productsData)
      setProducts(productsData);
    }
  };

  return (
    <div className="products">
      <h2>Products</h2>
      <SearchBar filterData={filterData} />
      <ProductTable products={products} />
    </div>
  );
}

export default FilterableProductTable;
