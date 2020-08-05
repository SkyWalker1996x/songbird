import React from "react";
import Header from "components/header";
import Wrapper from "components/layouts/wrapper";
import BirdQuestion from "components/bird-question";


const App = () => {
  return (
      <Wrapper>
          <Header/>
          <BirdQuestion/>
      </Wrapper>
  );
}

export default App;
