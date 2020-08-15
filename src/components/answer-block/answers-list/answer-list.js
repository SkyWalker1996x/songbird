import React from "react";
import CircleIndicator from "components/answer-block/circle-indicator";

const AnswersList = ({ items, onSelectedAnswer, levelComplete }) => {
  const itemList = items.map((item) => {
    const { id, name } = item;
    return !levelComplete ? (
      <li
        className="list__group__item"
        key={id}
        onClick={() => onSelectedAnswer(id)}
      >
        <CircleIndicator/>
        {name}
      </li>
    ) : (
      <li className="list__group__item" key={id}>
        {name}
      </li>
    );
  });

  return <ul className="list__group">{itemList}</ul>;
};

export default AnswersList;
