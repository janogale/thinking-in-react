import React from "react";
import "./styles.css";

import FilterableProductTable from "./components/FilterableProductTable";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="App">
      <h1>Products</h1>
      <FilterableProductTable />
      <Footer />
    </div>
  );
}
