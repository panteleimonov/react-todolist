import React from "react";
import ListItem from "../list-item";

import './todo-list.css';

const ToDoList = ({data}) => {

    const dataTemplate = data.map( (item) => {

        const { id, ...itemProps } = item;

        return (
            <li key={item.id}  className="list-group-item">
                <ListItem { ...itemProps }/>
            </li>
        )
    });

    return (
        <ul className="list-group todo-list">
            {dataTemplate}
        </ul>
    )
};

export default ToDoList;