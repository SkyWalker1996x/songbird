import React from "react";

const AnswersList = ({ items, onSelectedAnswer, levelComplete }) => {
  const itemList = items.map((item) => {
    const { id, name } = item;
    return (
      <li
        className="list__group__item"
        key={id}
        onClick={!levelComplete ? () => onSelectedAnswer(id) : () => {}}
      >
        {name}
      </li>
    );
  });

  return <ul className="list__group">{itemList}</ul>;
};

export default AnswersList;
