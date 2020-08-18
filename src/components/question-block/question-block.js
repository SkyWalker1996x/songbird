import React from "react";
import Player from "components/player";
import abstractLogo from "assets/imgs/bird-abstract-logo.jpg";
import { RHAP_UI } from "react-h5-audio-player";

const QuestionBlock = ({ questionItem, levelComplete }) => {
  const { name, audio, img } = questionItem;
  const itemImage = levelComplete ? img : abstractLogo;
  const itemName = levelComplete ? name : "******";
  const customProgressBarSection = [
    RHAP_UI.CURRENT_TIME,
    RHAP_UI.PROGRESS_BAR,
    RHAP_UI.DURATION,
    RHAP_UI.VOLUME,
  ];
  const autoPlayAfterSrcChange = false;

  return (
    <div className="question__inner">
      <img className="question__picture" src={itemImage} alt="bird" />

      <ul className="list__group">
        <li className="list__group__item">
          <h3>{itemName}</h3>
        </li>
        <li className="list__group__item">
          <div className="audio-player">
            {/*<audio controls>
              <source src={audio} type="audio/ogg; codecs=vorbis" />
            </audio>*/}
            <Player
              audio={audio}
              customProgressBarSection={customProgressBarSection}
              autoPlayAfterSrcChange={autoPlayAfterSrcChange}
            />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default QuestionBlock;
