import React, { Component } from 'react';
import Todo from './Todo';

// 상속된 속성을 맵으로 돌림
const TodoList = ({
    todos,
    editing,
    filter,
    handleEditTodo,
    handleSaveTodo,
    handleCancelEditTodo,
    handleDeleteTodo,
    handleToggleAll,
    handleToggleTodo
}) => {
    const todoList = todos.map(({id, text, done}, i) => {
        if( (done && filter === 'Active') || (!done && filter === 'Completed') ){
            return;                       
        }
        return(
            <Todo
                key              = {id}
                text             = {text}
                done             = {done}
                editing          = {editing === id}
                onEditTodo       = {() => handleEditTodo(id)}
                onSaveTodo       = {text => handleSaveTodo(id, text)}
                onCancelEditTodo = {()=> handleCancelEditTodo()}
                onDeleteTodo     = {() => handleDeleteTodo(id)}
                onToggleTodo     = {() => handleToggleTodo(id)}
            />
        );
    });
    return (
		// toggle-all이 헤더에 가지 않은 이유 ? 어렵다고함...
        <div className="todo-app__main">
            <div 
                className={`toggle-all${todos.every(v=> v.done) ? ' checked' : ''}`}
                onClick={handleToggleAll}
            />
            <ul className="todo-list">
                {todoList}
            </ul>
        </div>
    );
}

export default TodoList;