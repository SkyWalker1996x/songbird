import React from "react";
import "styles/index.scss";
import logo from "assets/imgs/songbird-logo.svg"

const Header = () => {
  return (
    <header className="header">
      <div className="top-panel">
        <div >
          <img className="logo" src={logo} alt="songbird-logo"/>
        </div>
        <div className="score">Score: 100</div>
      </div>

      <div className="stages">
        <li className="stage__item active">
          1
        </li>
        <li className="stage__item">
          2
        </li>
        <li className="stage__item">
          3
        </li>
        <li className="stage__item">
          4
        </li>
        <li className="stage__item">
          5
        </li>
        <li className="stage__item">
          6
        </li>
      </div>
    </header>
  );
};

export default Header;
