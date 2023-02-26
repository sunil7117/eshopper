import React from "react";
import "./search.css";
import { FiSearch } from "react-icons/fi";
const Search = () => {
  return (
    <div className="search">
      <input type="text" placeholder="Search for Products" />
      <FiSearch className="searchIcons" />
    </div>
  );
};

export default Search;
