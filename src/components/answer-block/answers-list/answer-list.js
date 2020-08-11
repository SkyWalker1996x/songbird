import React from "react";

const AnswersList = ({items}) => {
    const itemList = items.map((item) => {
        const {id, name} = item;
        return (
            <li className="list__group__item" key={id}>{name}</li>
        )
    })

    return (
        <ul className="list__group">
            {itemList}
        </ul>
    )
}

export default AnswersList;