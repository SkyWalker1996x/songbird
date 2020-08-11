import React, { Component } from "react";
import Header from "components/header";
import Wrapper from "components/layouts/wrapper";
import BirdQuestion from "components/bird-question";
import NextLevel from "components/next-level";
import AnswerBlock from "../answer-block";

import { birds } from "data/data";

class App extends Component {
  state = {
    level: 1,
    items: [],
  };

  componentDidMount() {
    const { level } = this.state;
    const items = this.extractItems(birds, level);
    this.setState((state) => {
      return {
        ...state,
        items,
      };
    });
  }

  extractItems = (arr, id) => {
    return arr.filter((item) => item.area === id);
  };

  render() {
    const { level, items } = this.state;
    return (
      <Wrapper>
        <Header level={level} />
        <BirdQuestion />
        <AnswerBlock items={items}/>
        <NextLevel />
      </Wrapper>
    );
  }
}

export default App;
