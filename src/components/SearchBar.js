import React, { useState } from "react";

function SearchBar({ products, filterData }) {
  let [value, setValue] = useState("");



  const handleChange = (e) =>{
    console.log(value)
    setValue(e.target.value)
    console.log(value)
  }

  return (
    <div className="searchbar">
      <form>
        <input
         type="text"
          placeholder="search..."
           value={value}
           onChange={e => handleChange(e)}
            />
         <p>
          <input type="checkbox" onClick={e=>filterData(e.target.checked)}/>
          Only show products in Stock
        </p>
      </form>
    </div>
  );
}

export default SearchBar;
