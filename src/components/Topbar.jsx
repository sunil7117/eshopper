import React from "react";
import "./topbar.css";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbarleft">
        <li>FAQs</li> |<li>Help</li> |<li>Support</li>
      </div>
      <div className="topbarright">
        <FaFacebookF />
        <FaTwitter />
        <FaLinkedinIn />
        <FaInstagram />
        <FaYoutube />
      </div>
    </div>
  );
};

export default Topbar;
