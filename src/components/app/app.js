import React from "react";
import Header from "components/header";
import Wrapper from "components/layouts/wrapper";
import BirdQuestion from "components/bird-question";

import NextLevel from "components/next-level";
import AnswerBlock from "../answer-block";

const App = () => {
  return (
    <Wrapper>
      <Header />
      <BirdQuestion />
      <AnswerBlock />
      <NextLevel />
    </Wrapper>
  );
};

export default App;
