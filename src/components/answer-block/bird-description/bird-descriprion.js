import React, { Fragment } from "react";

const BirdDescription = ({ item }) => {
  return (
    <div className="description">
      {item ? <Content item={item} /> : <Notification />}
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

const Content = ({ item }) => {
  const { img, name, latinName, audio, description } = item;
  return (
    <div className="description__inner">
      <div className="card">
        <div>
          <img className="question__picture" src={img} alt="bird" />
        </div>

        <div>
          <ul className="list__group">
            <li className="list__group__item">
              <h4>{name}</h4>
            </li>
            <li className="list__group__item">{latinName}</li>
            <li className="list__group__item">
              <div className="audio-player">
                <audio controls>
                  <source src={audio} type="audio/ogg; codecs=vorbis" />
                </audio>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div>{description}</div>
    </div>
  );
};

export default BirdDescription;
