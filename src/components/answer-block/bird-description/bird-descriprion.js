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
      <p>Listen the player</p>
      <p>Choose a bird from the list</p>
    </Fragment>
  );
};

const Content = ({ selectedItem }) => {
  const { img, name, latinName, audio, description } = selectedItem;
  const customProgressBarSection = [RHAP_UI.PROGRESS_BAR, RHAP_UI.VOLUME];
  const autoPlayAfterSrcChange = false;

  return (
    <div className="description__inner">
      <div className="card">
        <div>
          <img className="question__picture" src={img} alt="bird" />
        </div>

        <ul className="list__group">
          <li className="list__group__item">
            <h4>{name}</h4>
          </li>
          <li className="list__group__item">{latinName}</li>
          <li className="list__group__item">
            <div className="audio-player">
              <Player
                audio={audio}
                customProgressBarSection={customProgressBarSection}
                autoPlayAfterSrcChange={autoPlayAfterSrcChange}
              />
            </div>
          </li>
        </ul>
      </div>
      <div>{description}</div>
    </div>
  );
};

export default BirdDescription;
