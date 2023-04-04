import React, { useState } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  // UseState to execute the Navbar color change on scroll
  const [active, setActive] = useState(false);
  return (
    <div className={active ? "navbar active" : "navbar"}>
      <div className="container">
        {/* <Link to="/"> */}
        <div className="logo">
          <span className="text">Five-r</span>
          <span className="dot">.</span>
        </div>
        {/* </Link> */}
        <div className="links">
          <span>Business</span>
          <span>Explore</span>
          <span>English</span>
          <span>Sign In</span>
          <span>Sell!</span>
          <button>Join</button>
        </div>
      </div>
      <hr />
      <div className="menu">
        <span>Waddup</span>
        <span>Waddup</span>
        <span>Waddup</span>
        <span>Waddup</span>
        <span>Waddup</span>
        <span>Waddup</span>
        <span>Waddup</span>
        <span>Waddup</span>
        <span>Waddup</span>
      </div>
    </div>
  );
};

export default Navbar;
