import React, { Component } from "react";
import Header from "components/header";
import Wrapper from "components/layouts/wrapper";
import BirdQuestion from "components/bird-question";
import NextLevel from "components/next-level";
import AnswerBlock from "../answer-block";

class App extends Component {
  state = {
    level: 1,
  };
  render() {
    const { level } = this.state;
    return (
      <Wrapper>
        <Header level={level} />
        <BirdQuestion />
        <AnswerBlock />
        <NextLevel />
      </Wrapper>
    );
  }
}

export default App;
