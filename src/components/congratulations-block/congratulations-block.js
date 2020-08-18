import React from "react";
import Wrapper from "components/layouts/wrapper";

const CongratulationsBlock = ({ totalScore }) => {
  return (
    <Wrapper>
      <div className="congratulations">
        <div className="congratulations__inner">
          <div className="congratulations__message">
            <h1>Поздравляем!</h1>
            <p>
              Вы прошли викторину и набрали <b>{totalScore}</b> из <b>30</b>{" "}
              возможных баллов
            </p>
          </div>
          <div className="congratulations__button">
            <button>Попробовать еще раз!</button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default CongratulationsBlock;
