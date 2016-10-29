import React, { Component } from 'react';

const Todo = ({
    text,
    done,
    handleDeleteTodo
    }) => {
    return (
        <li className="todo-item">
            <div className="toggle" />
            <div className="todo-item__view">
                <div className="todo-item__view__text">
                    {text}
                </div>
                <button
                    className="todo-item__destroy"
                    onClick={handleDeleteTodo}
                />
            </div>
            <input
                className="todo-item__edit"
                type="text"
            />
        </li>
    );
};

export default Todo;