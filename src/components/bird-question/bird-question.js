import React from "react";

const audioItem =
  "https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC501461-190616_08.13h_koekoek_brabantse%20biesbosch%20jantjesplaat_roep_1%20ex_ad%20m_ter%20plaatse%20zingend_gezien_.mp3";

const BirdQuestion = () => {
  return (
    <div className="question__inner">
      <img
        className="question__picture"
        src="https://picsum.photos/seed/picsum/200/155"
        alt="bird"
      />

      <ul className="list__group">
        <li className="list__group__item">******</li>
        <li className="list__group__item">
          <div className="audio-player">
            <audio controls>
              <source src={audioItem} type="audio/ogg; codecs=vorbis" />
            </audio>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default BirdQuestion;
