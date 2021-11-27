import React, { useEffect, useState, useRef } from "react";
import "./Header.css";
import logoImage from "../public/images/logo-feet.png";
import { FaMoon, FaGithub } from "react-icons/fa";
import { HiMenu } from "react-icons/hi";

const Header = () => {
  const humbergerList = useRef();

  const toggleMenuMobile = () => {
    if (humbergerList.current.style.display === "none") {
      humbergerList.current.style.display = "block";
    } else {
      humbergerList.current.style.display = "none";
    }
  };

  useEffect(() => {}, []);

  return (
    <div className="Header">
      <div className="Header-wrapper">
        <div className="left">
          <div className="logo">
            <img className="logo-img" src={logoImage} />
            <h3 className="logo-title">Phan Tan Thang</h3>
          </div>
          <ul className="menu-list">
            <li className="menu-item">
              <a href="#">Works</a>
            </li>
            <li className="menu-item">
              <a href="#">Posts</a>
            </li>
            <li className="menu-item">
              <FaGithub className="icon" />
              <a href="#">Source</a>
            </li>
          </ul>
        </div>
        <div className="right">
          <div className="dark-mode">
            <FaMoon className="icon" />
          </div>

          <div className="menu-humberger" onClick={toggleMenuMobile}>
            <HiMenu className="icon" />
            <nav className="humberger-list" ref={humbergerList}>
              <a href="/" className="humberger-item">
                <span>About</span>
              </a>
              <a href="/works" className="humberger-item">
                <span>Works</span>
              </a>
              <a href="/posts" className="humberger-item">
                <span>Posts</span>
              </a>
              <a href="https://github.com/" className="humberger-item">
                <span>View Source</span>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
