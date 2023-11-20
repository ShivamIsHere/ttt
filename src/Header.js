import React from "react";
import "./Header.css"; 
import data from "./data/data.json";
const Header = ({ setind }) => {
  function changeprofile(){
    setind(prevIndex => (prevIndex + 1) % data.length);

  }
  return (
    <div className="header-container">
      <div className="logo-container">
        <img
          src={require("./Assets/image/TTT1.png")}
          alt="Sample"
          className="logo"
        />
        <div className="divider"></div>
        <h4 className="title">STORIES</h4>
      </div>
      <div className="but-container">
      <button className="but">
      <h2 >Course</h2>
    </button>
      <button className="but" onClick={changeprofile}>
      <h2 >Next</h2>
    </button>
      </div>
    </div>
  );
};

export default Header;
