import React, { Component } from 'react';

class Todo extends Component {
    render(){
        const {
            text,
            done,
            id,
            editing
        } = this.props;
        return (
            <li className={"todo-item"}>
                <div className="toggle"/>
                <div className="todo-item__view">
                    <div 
                        className="todo-item__view__text"
                        onDoubleClick={this.editTodo}
                    >
                        {text}
                    </div>
                    <button 
                        className="todo-item__destroy"
                        onClick={()=> this.props.deleteTodo(id)}
                    />
                </div>
                <input 
                    className="todo-item__edit" type="text" 
                    onKeyDown={this.props.saveTodo}
                />
            </li>
        );
    }
}

export default Todo;