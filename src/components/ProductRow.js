import React from "react";

// components

function ProductRow({ product: p }) {
  return (
    <tr style={{ color: p.stocked || "red"}}>
      <td>{p.name}</td>
      <td>{p.price}</td>
    </tr>
  );
}

export default ProductRow;
