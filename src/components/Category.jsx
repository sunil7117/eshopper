import React from "react";
import "./category.css";
import { FaChevronDown } from "react-icons/fa";
const category = () => {
  return (
    <div className="category">
      <div className="categoryWrapper">
        <p>categories</p>
        <FaChevronDown className="categoryIcon" />
      </div>
    </div>
  );
};

export default category;
