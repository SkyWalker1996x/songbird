import React from "react";
import AudioPlayer, { RHAP_UI } from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

const Player = ({ audio, customProgressBarSection, autoPlayAfterSrcChange }) => {
  return (
    <AudioPlayer
      src={audio}
      autoPlay={false}
      autoPlayAfterSrcChange={autoPlayAfterSrcChange}
      layout={"horizontal-reverse"}
      showJumpControls={false}
      customProgressBarSection={customProgressBarSection}
      customControlsSection={[RHAP_UI.MAIN_CONTROLS]}
    />
  );
};

export default Player;
