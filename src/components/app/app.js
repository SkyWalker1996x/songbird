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

  onSelectedItem = (id) => {
    const { items, questionItem } = this.state;
    const levelComplete = questionItem.id === id;
    let selectedItem;

    items.forEach((item) => {
      if (item.id === id) {
        item.statusAnswer = levelComplete ? "correct" : "wrong";
        selectedItem = item;
      }
    });

    this.setState((state) => {
      return {
        ...state,
        levelComplete,
        selectedItem,
      };
    });
  };

  onSelectedItemWithAnswer = (id) => {
    let selectedItem;
    this.state.items.forEach((item) => {
      if (item.id === id) {
        selectedItem = item;
      }
    });

    this.setState((state) => {
      return {
        ...state,
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
    const {
      level,
      levelComplete,
      items,
      questionItem,
      selectedItem,
    } = this.state;

    const Quiz = (
      <Fragment>
        <QuestionBlock
          levelComplete={levelComplete}
          questionItem={questionItem}
        />
        <AnswerBlock
          levelComplete={levelComplete}
          items={items}
          selectedItem={selectedItem}
          onSelectedItem={
            levelComplete ? this.onSelectedItemWithAnswer : this.onSelectedItem
          }
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
