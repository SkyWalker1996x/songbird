import React from "react";
import AnswersList from "./answers-list";
import BirdDescription from "./bird-description";

const AnswerBlock = ({
  levelComplete,
  items,
  selectedItem,
  onSelectedItem,
  onRepeatedSelectedItem,
}) => {
  return (
    <div className="answer__inner">
      <AnswersList
        items={items}
        onSelectedItem={onSelectedItem}
        onRepeatedSelectedItem={onRepeatedSelectedItem}
        levelComplete={levelComplete}
      />
      <BirdDescription selectedItem={selectedItem} />
    </div>
  );
};

export default AnswerBlock;
