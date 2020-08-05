import React from "react";

const Header = () => {
  return (
    <header>
      <div className="top-panel">
        <div className="logo">SongBird</div>
        <div>Score: 100</div>
      </div>

      <div className="stage-info">
        <li>
          <button>1</button>
        </li>
        <li>
          <button>2</button>
        </li>
        <li>
          <button>3</button>
        </li>
        <li>
          <button>4</button>
        </li>
        <li>
          <button>5</button>
        </li>
        <li>
          <button>6</button>
        </li>
      </div>
    </header>
  );
};

export default Header;
