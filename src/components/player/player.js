import React, { Component } from "react";
import AudioPlayer from "react-h5-audio-player";
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
      autoPlay,
      customControlsSection
    } = this.props;
    return (
      <AudioPlayer
        src={audio}
        autoPlay={autoPlay || false}
        autoPlayAfterSrcChange={autoPlayAfterSrcChange}
        layout={"stacked"}
        showJumpControls={false}
        customProgressBarSection={customProgressBarSection}
        customControlsSection={customControlsSection}
        ref={this.player}
      />
    );
  }
}

export default Player;
