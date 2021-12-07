import React, { useEffect, useState, useRef, Link } from "react";
import "./Header.css";
import logoImageBlack from "../public/images/logo-feet.png";
import logoImageWhite from "../public/images/foot-logo-white.png";
import { FaMoon, FaGithub } from "react-icons/fa";
import { HiMenu } from "react-icons/hi";
import { NavLink } from "react-router-dom";

const Header = () => {
  const headerRef = useRef();
  const humbergerList = useRef();
  const buttonDarkModeRef = useRef();
  const [toggleDarkMode, setToggleDarkMode] = useState(false);
  const [imageLogo, setImageLogo] = useState(logoImageBlack);

  // Functions
  const changeTheColorTheme = (flag) => {
    const onTheWebItems = document.querySelectorAll(".ontheweb-item");
    const imageLogoFoot = document.querySelector(".logo img");
    const textsHightLight = document.querySelectorAll(".hightlight");
    const aboutSayHi = document.querySelector(".About-sayhi");
    const titlesBlock = document.querySelectorAll(".title-block");
    const buttonsPrimary = document.querySelectorAll(".primary-button");
    console.log(buttonsPrimary);

    if (!flag) {
      // Turn on the dark mode
      document.body.classList.add("dark");

      textsHightLight.forEach((item) => item.classList.add("dark"));
      titlesBlock.forEach((title) => title.classList.add("dark"));
      headerRef.current.classList.add("dark");
      buttonsPrimary.forEach((button) => button.classList.add("dark"));
      onTheWebItems.forEach((item) => item.classList.add("dark"));
      aboutSayHi.classList.add("dark");
      setImageLogo(logoImageWhite);
    } else {
      // Turn off the dark mode
      document.body.classList.remove("dark");

      textsHightLight.forEach((item) => item.classList.remove("dark"));
      titlesBlock.forEach((title) => title.classList.remove("dark"));
      buttonsPrimary.forEach((button) => button.classList.remove("dark"));
      onTheWebItems.forEach((item) => item.classList.remove("dark"));
      headerRef.current.classList.remove("dark");
      setImageLogo(logoImageBlack);
      aboutSayHi.classList.remove("dark");
    }
  };

  const handleDarkMode = () => {
    console.log("Handle toggle mode");
    if (!toggleDarkMode) {
      changeTheColorTheme(toggleDarkMode);
      // Update state of dark mode button
      setToggleDarkMode(true);
    } else {
      changeTheColorTheme(toggleDarkMode);
      // Update state of dark mode button
      setToggleDarkMode(false);
    }
  };

  const toggleMenuMobile = () => {
    if (humbergerList.current.style.display === "none") {
      humbergerList.current.style.display = "block";
    } else {
      humbergerList.current.style.display = "none";
    }
  };

  return (
    <div className="Header" ref={headerRef}>
      <div className="Header-wrapper">
        <div className="left">
          <a href="/" className="logo">
            <img className="logo-img" src={imageLogo} />
            <h3 className="logo-title">Phan Tan Thang</h3>
          </a>
          <ul className="menu-list">
            <li className="menu-item">
              <NavLink
                className="menu-item-link"
                to="/works"
                activeclassname="active"
              >
                Works
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink
                className="menu-item-link"
                to="/posts"
                activeclassname="active"
              >
                Posts
              </NavLink>
            </li>
            <li className="menu-item">
              <FaGithub className="icon" style={{ color: "#1a202c" }} />
              <a
                href="https://github.com/ThangSuperMan"
                className="menu-item-link"
              >
                Source
              </a>
            </li>
          </ul>
        </div>
        <div className="right">
          <div onClick={handleDarkMode} className="dark-mode">
            <FaMoon className="icon" ref={buttonDarkModeRef} />
          </div>

          <div className="menu-humberger" onClick={toggleMenuMobile}>
            <HiMenu className="icon" style={{ color: "#1a202c" }} />
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
