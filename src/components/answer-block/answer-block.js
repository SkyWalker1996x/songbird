import React from "react";
import AnswersList from "./answers-list";
import BirdDescription from "./bird-description";

const AnswerBlock = ({items}) => {
    return (
        <div className="answer__inner">
            <AnswersList items={items}/>
            <BirdDescription/>
        </div>
    )
}

export default AnswerBlock;