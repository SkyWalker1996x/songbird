import React from "react";
import CircleIndicator from "components/answer-block/circle-indicator";
import Player from "components/player";
import correct from "assets/sounds/correct.mp3";
import wrong from "assets/sounds/wrong.mp3";

const AnswersList = ({ items, onSelectedItem, onRepeatedSelectedItem, levelComplete }) => {


  const itemList = items.map((item) => {
    const { id, name, statusAnswer } = item;
    return (
      <li
        className="list__group__item"
        key={id}
        onClick={statusAnswer === 'wrong' || levelComplete ? () => onRepeatedSelectedItem(id) : () => onSelectedItem(id)}
      >

        <CircleIndicator statusAnswer={statusAnswer} />

        {name}

        <div style={{ display: "none" }}>
          <Player
            autoPlayAfterSrcChange={true}
            audio={
              statusAnswer === "correct"
                ? correct
                : statusAnswer === "wrong"
                ? wrong
                : ""
            }
          />
        </div>
      </li>
    );
  });

  return <ul className="list__group">{itemList}</ul>;
};

export default AnswersList;
