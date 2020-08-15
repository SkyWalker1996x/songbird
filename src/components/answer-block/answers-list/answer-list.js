import React from "react";
import CircleIndicator from "components/answer-block/circle-indicator";

const AnswersList = ({ items, onSelectedItem}) => {
  const itemList = items.map((item) => {
    const { id, name, statusAnswer } = item;
    return (
      <li
        className="list__group__item"
        key={id}
        onClick={() => onSelectedItem(id)}
      >
        <CircleIndicator statusAnswer={statusAnswer} />
        {name}
      </li>
    );
  });

  return <ul className="list__group">{itemList}</ul>;
};

export default AnswersList;
