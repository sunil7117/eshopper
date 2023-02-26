import React from "react";
import "./cart.css";
import { FaCartPlus, FaHeart } from "react-icons/fa";
const Cart = () => {
  return (
    <div className="cart">
      <div className="cartWrapper">
        <FaHeart className="cartIcons" />0
      </div>
      <div className="cartWrapper">
        <FaCartPlus className="cartIcons" /> 0
      </div>
    </div>
  );
};

export default Cart;
