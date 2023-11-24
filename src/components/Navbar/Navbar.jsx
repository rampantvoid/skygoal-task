import React, { useState, useEffect } from "react";
import "./navbar.css";
import Anchor from "../AnchorLink/Anchor";

const sections = ["home", "about", "schedules", "membership", "pricing"];
const Navbar = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const [menueOpen, setMenueOpen] = useState("close");

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
    if (hamburgerOpen) {
      setMenueOpen("open");
      console.log(menueOpen);
    }
    if (!hamburgerOpen) {
      setMenueOpen("close");
      console.log(menueOpen);
    }
  };
  return (
    <>
      <div className="navbar-container">
        <div className="navbar-wrapper">
          <div className={`nav-links ${menueOpen}`}>
            <ul>
              {sections.map((section) => {
                return <Anchor title={section} links={section} />;
              })}
            </ul>
          </div>

          <div className={`nav-btns ${menueOpen}`}>
            <button className="offer-btn btn">Offers</button>
            <button className="courses-btn btn">Courses</button>
          </div>

          <div className="hamburger" onClick={toggleHamburger}>
            <div className="hamburger">
              <div className="burger burger-1"></div>
              <div className="burger burger-2"></div>
              <div className="burger burger-3"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
