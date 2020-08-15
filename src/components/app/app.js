import React, { Component, Fragment } from "react";
import Header from "components/header";
import Wrapper from "components/layouts/wrapper";
import QuestionBlock from "components/question-block";
import NextLevel from "components/next-level";
import AnswerBlock from "../answer-block";
import CongratulationsBlock from "components/congratulations-block";

import { birds } from "data/data";

class App extends Component {
  state = {
    level: 1,
    levelComplete: false,
    items: [],
    questionItem: {},
    selectedItem: null,
    correctAnswer: null,
  };

  componentDidMount() {
    const { level } = this.state;
    const randomItem = Math.floor(Math.random() * 6);
    console.log("DidMount");
    const items = this.extractItems(birds, level);
    this.setState((state) => {
      return {
        ...state,
        items,
        questionItem: items[randomItem],
      };
    });
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.state.level !== prevState.level) {
      console.log("DidUpdate");
      const { level } = this.state;
      const randomItem = Math.floor(Math.random() * 6);
      const items = this.extractItems(birds, level);
      this.setState((state) => {
        return {
          ...state,
          items,
          questionItem: items[randomItem],
        };
      });
    }
  }

  extractItems = (arr, id) => {
    console.log(id);
    return arr
      .filter((item) => item.area === id)
      .map((item) => {
        return { ...item, statusAnswer: "default" };
      });
  };

  onSelectedAnswer = (id) => {
    const { items, questionItem } = this.state;
    const complete = questionItem.id === id;
    let selectedItem;

    items.forEach((element) => {
      if (element.id === id) {
        element.statusAnswer = questionItem.id === id ? "correct" : "wrong";
        selectedItem = element;
      }
    });

    this.setState((state) => {
      return {
        ...state,
        levelComplete: complete,
        selectedItem,
      };
    });
  };

  onNextLevel = () => {
    this.setState((state) => {
      return {
        ...state,
        level: state.level + 1,
        levelComplete: false,
        selectedItem: null,
      };
    });
  };

  render() {
    console.log("render");
    const { level, levelComplete, items, questionItem, selectedItem } = this.state;
    const Quiz = (
      <Fragment>
        <QuestionBlock levelComplete={levelComplete} questionItem={questionItem} />
        <AnswerBlock
          levelComplete={levelComplete}
          items={items}
          selectedItem={selectedItem}
          onSelectedAnswer={this.onSelectedAnswer}
        />
        <NextLevel
          levelComplete={levelComplete}
          onNextLevel={this.onNextLevel}
        />
      </Fragment>
    );
    return (
      <Wrapper>
        <Header level={level} />
        {level > 6 ? <CongratulationsBlock /> : Quiz}
      </Wrapper>
    );
  }
}

export default App;
