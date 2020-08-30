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
    totalScore: 0,
    localScore: 5,
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
      const { localScore, totalScore } = this.state;

      return {
        ...state,
        localScore: levelComplete ? localScore : localScore - 1,
        totalScore: levelComplete ? totalScore + localScore : totalScore,
        levelComplete,
        selectedItem,
      };
    });
  };

  onRepeatedSelectedItem = (id) => {
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
        localScore: 5,
      };
    });
  };

  onStartLevel = () => {
    this.setState((state) => {
      return {
        ...state,
        level: 1,
        levelComplete: false,
        selectedItem: null,
        questionItem: {},
        totalScore: 0,
        localScore: 5,
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
      totalScore,
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
          onSelectedItem={this.onSelectedItem}
          onRepeatedSelectedItem={this.onRepeatedSelectedItem}
        />
        <NextLevel
          levelComplete={levelComplete}
          onNextLevel={this.onNextLevel}
        />
      </Fragment>
    );
    return (
      <Wrapper>
        <Header level={level} totalScore={totalScore} />

        {level > 6 ? (
          <CongratulationsBlock
            totalScore={totalScore}
            onStartLevel={this.onStartLevel}
          />
        ) : (
          Quiz
        )}
      </Wrapper>
    );
  }
}

export default App;
