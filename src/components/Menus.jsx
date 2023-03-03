import React from "react";
import "./menus.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsFillCaretDownFill } from "react-icons/bs";
const Menus = () => {
  return (
    <div className="menus">
      <div className="menusWrapper">
        <div className="menuleft">
          <ul className="menulist">
            <li className="menuitem">Home</li>
            <li className="menuitem">Shop</li>
            <li className="menuitem">Shop Details</li>
            <li className="menuitem">
              Pages <BsFillCaretDownFill className="menuicons" />
              <ul className="dropdownmenu">
                <li className="dropdownmenuitem">Shopping cart</li>
                <li className="dropdownmenuitem">Checkout</li>
              </ul>
            </li>
            <li className="menuitem">Shop</li>
          </ul>
        </div>
        <div className="menuright">
          <ul className="menulist auth">
            <li className="menuitem">Login</li>
            <li className="menuitem">Register</li>
          </ul>
        </div>
      </div>
      <div className="humburge">
        <GiHamburgerMenu />
      </div>
    </div>
  );
};

export default Menus;
