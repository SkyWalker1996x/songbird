import React from "react";

const NextLevel = ({ levelComplete, onNextLevel }) => {
  return levelComplete ? (
    <button className="btn-up active" onClick={() => onNextLevel()}>Next Level</button>
  ) : (
    <button className="btn-up">Следующий уровень</button>
  );
};

export default NextLevel;
