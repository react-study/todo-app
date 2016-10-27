import React, { Component } from 'react';
import Todo from './Todo';

const TodoList = ({
    todos,
    editing,
    handleEditTodo,
    handleSaveTodo,
    handleCancelEditTodo,
    handleDeleteTodo
}) => {
    const todoList = todos.map(({id, text, done}, i) => (
        <Todo
            key  = {id}
            text = {text}
            done = {done}
            editing = {editing === id}
            onEditTodo = {()=> handleEditTodo(id)}
            onSaveTodo = {text=> handleSaveTodo(id, text)}
            onCancelEditTodo = {()=> handleCancelEditTodo()}
            onDeleteTodo = {()=> handleDeleteTodo(id)}
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