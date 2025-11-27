import React, { useState } from "react";
import "../styles/Navbar.css";
import { FaAlignJustify } from "react-icons/fa";
import {animateScroll as scroll } from "react-scroll"
const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [active, setActive] = useState("home");
  
  return (
    <>
      <nav>
        <div className="nav-container">
          <div className="nav-logo">
            <img src="/title.png" style={{ width: "150px" }} />
          </div>

          {/* nav for mobile and non mobile */}
          <ul className={isOpen ? "nav-mobile active" : "nav-mobile"}>
            <li>
              <a
                href="#Home"
                onClick={() => {
                  setActive("home");
                  setIsOpen(false);
                  
                }}
                className={
                  active === "home" ? "nav-item active-nav" : "nav-item"
                }
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#SavedJob"
                onClick={() => {
                  setActive("savedjob");
                  setIsOpen(false);
                }}
                className={
                  active === "savedJob" ? "nav-item active-nav" : "nav-item"
                }
              >
                Saved-Job
              </a>
            </li>
            <li>
              <a
                href="#Feedback"
                onClick={() => {
                  setActive("feedback");
                  setIsOpen(false);
                }}
                className={
                  active === "feedback" ? "nav-item active-nav" : "nav-item"
                }
              >
                Feedback-Form
              </a>
            </li>
            <li>
              <a
                href="#ContactUs"
                onClick={() => {
                  setActive("contactus");
                  setIsOpen(false);
                }}
                className={
                  active === "contactUs" ? "nav-item active-nav" : "nav-item"
                }
              >
                Contact-Us
              </a>
            </li>
          </ul>
          <FaAlignJustify
            className="nav-menu-mobile"
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
