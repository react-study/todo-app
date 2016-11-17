import React, { Component } from 'react';

const Todo = ({
    add,
    remain,
    del
}) => {
    return (
        <li className="todo-item">
            <ul className="newUl">
                <li>{add}</li>
                <li>{del}</li>
                <li>{remain}</li>
            </ul>
        </li>
    );
}

export default Todo;
