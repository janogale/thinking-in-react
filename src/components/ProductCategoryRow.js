import React from "react";

// components

function ProductCategoryRow({ cat }) {
  return (
    <tr style={{ background: "#f7f7f7", fontWeight: "bolder" }}>
      <td colSpan="2">{cat}</td>
    </tr>
  );
}

export default ProductCategoryRow;
