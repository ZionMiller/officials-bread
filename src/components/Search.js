import React from "react";

function Search({ handleSearch }) {
  return (
    <div className="search">
      <input className="searchTerm" type="text" placeholder="Search Official By Name" 
      onChange={handleSearch} />
    </div>
  );
}

export default Search;
