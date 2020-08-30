import React, { Fragment } from "react";
import Player from "../../player";
import { RHAP_UI } from "react-h5-audio-player";

const BirdDescription = ({ selectedItem }) => {
  return (
    <div className="description">
      {selectedItem ? (
        <Content selectedItem={selectedItem} />
      ) : (
        <Notification />
      )}
    </div>
  );
};

const Notification = () => {
  return (
    <Fragment>
      <p>Прослушайте аудио</p>
      <p>Выберите птицу из списка</p>
    </Fragment>
  );
};

const Content = ({ selectedItem }) => {
  const { img, name, latinName, audio, description } = selectedItem;
  const customProgressBarSection = [
    RHAP_UI.MAIN_CONTROLS,
    RHAP_UI.PROGRESS_BAR,
  ];
  const customControlsSection = [
    RHAP_UI.CURRENT_TIME,
    RHAP_UI.VOLUME,
    RHAP_UI.DURATION,
  ];
  const autoPlayAfterSrcChange = false;

  return (
    <div className="description__inner">
      <div className="card">

          <img className="question__picture" src={img} alt="bird" />


        <ul className="list__group">
          <li className="list__group__item">
            <h4>{name}</h4>
          </li>
          <li className="list__group__item">{latinName}</li>

        </ul>
      </div>
      <div className="audio-player">
        <Player
            audio={audio}
            customProgressBarSection={customProgressBarSection}
            customControlsSection={customControlsSection}
            autoPlayAfterSrcChange={autoPlayAfterSrcChange}
        />
      </div>
      <div>{description}</div>
    </div>
  );
};

export default BirdDescription;
