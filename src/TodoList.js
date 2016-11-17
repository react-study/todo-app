import React, { Component } from 'react';
import Todo from './Todo';

const TodoList = ({
    todos
}) => {
    const todoList = todos.map((todo, i) => (
        <Todo
            key={`todo#${i}`}
            add={todo.add}
            remain = {todo.remain}
            del = {todo.del}
        />
    ));
    return (
        <div className="todo-app__main">
            <ul className="todo-list">
                {todoList}
            </ul>
        </div>
    );
}

export default TodoList;
