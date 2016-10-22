import React, { Component } from 'react';
import Todo from './Todo.js';

class TodoList extends Component {
    render(){
        const todoList = this.props.todos.map( (v, i)  =>(
            <Todo 
                key={i} 
                text={v.text} 
                done={v.done} 
                id={v.id} 
                deleteTodo={this.props.deleteTodo} 
            />
        ));
        return (
            <div className="todo-app main">
                <div className="toggle-all" />
                <ul className="todo-list">
                    {todoList}
                </ul>
            </div>
        );
    }
}

export default TodoList;