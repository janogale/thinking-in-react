import React from "react";

// components

function ProductCategoryRow({  cat }) {
  return (
    <tr style={{background: '#ddd', fontWeight: 'bolder'}}>
      <td colSpan="2">{cat}</td>
    </tr>
  );
}

export default ProductCategoryRow;
