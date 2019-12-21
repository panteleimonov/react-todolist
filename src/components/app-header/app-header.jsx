import React from 'react';
import './app-header.css';

const AppHeader = ({toDo, done}) => {
    return (
        <div>
            <h1>My todo list</h1>
            <h4>{toDo} more to do, {done} done</h4>
        </div>
    )
};

export default AppHeader;