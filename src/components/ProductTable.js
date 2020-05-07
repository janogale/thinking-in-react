import React from "react";

// components
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

function ProductTable({ products }) {
  let rows = [];

  // sort array
  products.sort((a, b) => {
    if (a.category > b.category) {
      return 1;
    }
    if (a.category < b.category) {
      return -1;
    }
    return 0;
  });

  // display sorted data
  products.reduce((acc, p, index) => {
    if (p.category in acc) {
      rows.push(<ProductRow product={p} key={p.name} />);
    } else {
      rows.push(<ProductCategoryRow cat={p.category} key={p.category} />);
      rows.push(<ProductRow product={p} key={p.name} />);
      acc[p.category] = [];
    }

    return acc;
  }, {});

  return (
    <div className="tableDiv">
      <table className="table is-hoverable is-fullwidth">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
}

export default ProductTable;
