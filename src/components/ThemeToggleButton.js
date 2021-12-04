import react, { useState, useRef, useEffectl } from "react";

const ThemeToggleButton = (props) => {
  const bgHeader = document.querySelector(".Header");
  const titleBlockBefore = document.querySelector(".title-block:before");
  const onTheWebItems = document.querySelectorAll(".ontheweb-item");
  const imageLogoFoot = document.querySelector(".logo img");

  console.log(props.flag);

  return <div className="ThemeToggleButton"></div>;
};

export default ThemeToggleButton;
