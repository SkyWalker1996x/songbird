import React from "react";
import AnswersList from "./answers-list";
import BirdDescription from "./bird-description";

const AnswerBlock = ({
  levelComplete,
  items,
  selectedItem,
  onSelectedAnswer,
}) => {
  return (
    <div className="answer__inner">
      <AnswersList
        items={items}
        onSelectedAnswer={onSelectedAnswer}
        levelComplete={levelComplete}
      />
      <BirdDescription selectedItem={selectedItem} />
    </div>
  );
};

export default AnswerBlock;
