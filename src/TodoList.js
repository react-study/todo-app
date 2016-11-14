import React, { Component } from 'react';
import Todo from './Todo';
import ClassNames from 'classnames';

const TodoList = ({
    todos,
    filter,
    editing,
    handleEditTodo,
    handleSaveTodo,
    handleCancelEditTodo,
    handleDeleteTodo,
    handleToggleAll,
    handleToggleTodo
}) => {
    const todoList = todos.map(({id, text, done}, i) => {
		// 실행하고 filter active 또는 !done 이고 filter가 completed이면 빠져나와라
        if(
            (done && filter === 'active')
            || (!done && filter === 'completed')
        ) return;
		// 아래의 속성들의 행동을 처리해라 
        return (
            <Todo
                key              = {id}
                text             = {text}
                done             = {done}
                editing          = {editing === id}
                onEditTodo       = {()=> handleEditTodo(id)}
                onSaveTodo       = {text=> handleSaveTodo(id, text)}
                onCancelEditTodo = {()=> handleCancelEditTodo()}
                onDeleteTodo     = {()=> handleDeleteTodo(id)}
                onToggleTodo     = {()=> handleToggleTodo(id)}
            />
        );
    });
    return (
        <div className="todo-app__main">
            <div
				// 클릭햇을때 handleToglleAll을 실행하고, checked 속성 값을 v.done을 박아라
                className={ClassNames('toggle-all', {
                    checked: todos.every(v=> v.done)
                })}
                onClick={handleToggleAll}
            />
            <ul className="todo-list">
                {todoList}
            </ul>
        </div>
    );
}

export default TodoList;
