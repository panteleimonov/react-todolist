import React from "react";

import ListItem from "./list-item";

const ToDoList = () => {
    return (
        <ul>
            <li>
                <ListItem label="Drink milk" />
            </li>
            <li>
                <ListItem label="Build app" important />
            </li>
            <li>
                <ListItem label="Read journal" />
            </li>
            <li>
                <ListItem label="Go to work" important />
            </li>
        </ul>
    );
};

export default ToDoList;
