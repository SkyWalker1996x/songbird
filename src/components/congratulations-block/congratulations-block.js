import React, { Fragment } from "react";
import Wrapper from "components/layouts/wrapper";
import Player from "components/player";
import win from "assets/sounds/win.mp3";

const CongratulationsBlock = ({ totalScore, onStartLevel }) => {
  const autoPlayAfterSrcChange = true;

  const someScore = (
    <p>
      Вы прошли викторину и набрали <b>{totalScore}</b> из <b>30</b> возможных
      баллов
    </p>
  );

  const maxScore = (
    <Fragment>
      <p>Славная победа!</p>
      <p>Вы набрали максимальный балл!</p>
      <p>
        Птицы высоко ценят Ваши знания о них и возлагают на Вас огромные
        надежды!
      </p>
      <p>Добейтесь найвысших высот и оправдайте их ожидания!</p>
      <div style={{ display: "none" }}>
        <Player
          audio={win}
          autoPlayAfterSrcChange={autoPlayAfterSrcChange}
          autoPlay={true}
        />
      </div>
    </Fragment>
  );

  return (
    <Wrapper>
      <div className="congratulations">
        <div className="congratulations__inner">
          <div className="congratulations__message">
            <h1>Поздравляем!</h1>
            {totalScore < 30 ? someScore : maxScore}
          </div>
          <div className="congratulations__button">
            <button onClick={() => onStartLevel()}>Попробовать еще раз!</button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default CongratulationsBlock;
