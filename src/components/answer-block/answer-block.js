import React from "react";
import AnswersList from "./answers-list";
import BirdDescription from "./bird-description";

const AnswerBlock = () => {
    return (
        <div className="answer__inner">
            <AnswersList/>
            <BirdDescription/>
        </div>
    )
}

export default AnswerBlock;