import React from "react";
import Header from "components/header";
import Wrapper from "components/layouts/wrapper";
import BirdQuestion from "components/bird-question";
import AnswersList from "components/answers-list";

const App = () => {
  return (
    <Wrapper>
      <Header />
      <BirdQuestion />
      <AnswersList />
    </Wrapper>
  );
};

export default App;
