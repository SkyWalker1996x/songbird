import React from "react";
import "styles/index.scss";
import logo from "assets/imgs/songbird-logo.svg";
import { stages } from "data/data";

const Header = ({ level, totalScore }) => {

  const stagesList = stages.map((item) => {
    const { id, stage } = item;
    const stageStyle = level === id ? "stage__item" : "stage__item active";
    return (
      <li className={stageStyle} key={id}>
        {stage}
      </li>
    );
  });

  return (
    <header className="header">
      <div className="top-panel">
        <div>
          <img className="logo" src={logo} alt="songbird-logo" />
        </div>
        <div className="score">Score: {totalScore}</div>
      </div>

      <div className="stages">{stagesList}</div>
    </header>
  );
};

export default Header;
