import React from "react";
import Header from "components/header";
import Wrapper from "components/layouts/wrapper";
import BirdQuestion from "components/bird-question";
import AnswersList from "components/answers-list";
import BirdDescription from "components/bird-description";
import NextLevel from "components/next-level";

const App = () => {
  return (
    <Wrapper>
      <Header />
      <BirdQuestion />
      <AnswersList />
      <BirdDescription />
      <NextLevel />
    </Wrapper>
  );
};

export default App;
