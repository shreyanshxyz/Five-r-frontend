import React, { useEffect, useState } from "react";
import "./Navbar.scss";
// import { Link } from "react-router-dom";

const Navbar = () => {
  // UseState to execute the Navbar color change on scroll
  const [active, setActive] = useState(false);

  // The isActive function sets the isActive as true if the scrolling is done any bit.
  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  // This useEffect function is used to make an event on scroll. When the screen is being scrolled, it invokes the isActive function. The return part is for the cleanup.
  useEffect(() => {
    window.addEventListener("scroll", isActive);

    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  const currentUser = {
    id: 1,
    username: "Lelouch",
    isSeller: true,
  };

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
      {active && (
        <>
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
        </>
      )}
    </div>
  );
};

export default Navbar;
