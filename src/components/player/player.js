import React, { Component } from "react";
import AudioPlayer, { RHAP_UI } from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

class Player extends Component {
  player = React.createRef();

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.levelComplete !== this.props.levelComplete) {
      this.pausePlayer();
    }
  }

  pausePlayer = () => {
    this.player.current.audio.current.pause();
  };

  render() {
    const {
      audio,
      customProgressBarSection,
      autoPlayAfterSrcChange,
    } = this.props;
    return (
      <AudioPlayer
        src={audio}
        autoPlay={false}
        autoPlayAfterSrcChange={autoPlayAfterSrcChange}
        layout={"horizontal-reverse"}
        showJumpControls={false}
        customProgressBarSection={customProgressBarSection}
        customControlsSection={[RHAP_UI.MAIN_CONTROLS]}
        ref={this.player}
      />
    );
  }
}

export default Player;
