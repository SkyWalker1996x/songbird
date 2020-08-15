import React from "react";
import abstractLogo from "assets/imgs/bird-abstract-logo.jpg"

const QuestionBlock = ({ questionItem, levelComplete }) => {
  const { name, audio, img } = questionItem;
  const itemImage = levelComplete ? img : abstractLogo;
  const itemName = levelComplete ? name : '******';

  return (
    <div className="question__inner">
      <img className="question__picture" src={itemImage} alt="bird" />

      <ul className="list__group">
        <li className="list__group__item"><h3>{itemName}</h3></li>
        <li className="list__group__item">
          <div className="audio-player">
            <audio controls>
              <source src={audio} type="audio/ogg; codecs=vorbis" />
            </audio>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default QuestionBlock;
