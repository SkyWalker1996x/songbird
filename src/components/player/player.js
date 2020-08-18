import React from "react";
import AudioPlayer, { RHAP_UI } from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

const Player = () => {
  return (
    <AudioPlayer
      src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
      layout={"horizontal-reverse"}
      showJumpControls={false}
      customProgressBarSection={[
        RHAP_UI.CURRENT_TIME,
        <div></div>,
        RHAP_UI.PROGRESS_BAR,
        RHAP_UI.DURATION,
        RHAP_UI.VOLUME,
      ]}
      customControlsSection={[RHAP_UI.MAIN_CONTROLS]}
    />
  );
};

export default Player;
