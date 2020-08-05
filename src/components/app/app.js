import React from "react";
import Header from "components/header";
import Wrapper from "components/layouts/wrapper";
import BirdQuestion from "components/bird-question";
import AnswersList from "components/answers-list";
import BirdDescription from "components/bird-description";

const App = () => {
  return (
    <Wrapper>
      <Header />
      <BirdQuestion />
      <AnswersList />
      <BirdDescription/>
    </Wrapper>
  );
};

export default App;
