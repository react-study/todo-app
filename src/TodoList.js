import React, { Component } from 'react';
import Todo from './Todo';

const TodoList = ({
    todos,
    handleDeleteTodo
}) => {
    const todoList = todos.map((todo, i) => (
        <Todo
            key={`todo#${i}`}
            text={todo.text}
            done={todo.done}
            handleDeleteTodo={()=>handleDeleteTodo(todo)}
        />
    ));
    return (
        <div className="todo-app__main">
            <div className="toggle-all" />
            <ul className="todo-list">
                {todoList}
            </ul>
        </div>
    );
}

export default TodoList;
