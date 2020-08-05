import React from "react";

const audioItem =
  "https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC501461-190616_08.13h_koekoek_brabantse%20biesbosch%20jantjesplaat_roep_1%20ex_ad%20m_ter%20plaatse%20zingend_gezien_.mp3";

const BirdQuestion = () => {
  return (
    <div>
      <img src="https://picsum.photos/seed/picsum/200/155" alt="bird" />
      <div>
        <ul>
          <li>******</li>
          <li>
            <div className="audio-player">
              <audio controls>
                <source
                  src={audioItem}
                  type="audio/ogg; codecs=vorbis"
                />
              </audio>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BirdQuestion;
