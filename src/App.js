import React, { Component } from 'react';
import Header from './Header';
import TodoList from './TodoList';
import update from 'immutability-helper';

const generateUId = () => Date.now();

class App extends Component {
    constructor() {
        super();
        this.state = {
            todos: [
                {id : 1000, add: '', del:'', remain : null}
            ]
        };
    }
    handleAddTodo(text) {
        const prevTodos = this.state.todos;
        var nextRemain = (prevTodos[prevTodos.length-1].remain+parseInt(text)) ;
        this.setState({
            todos: [ ...this.state.todos, {
                id : generateUId(),
                add:text,
                del : '',
                remain : nextRemain
            }]
        });
    }
    handleDeleteTodo(text) {
        const prevTodos = this.state.todos;
        var nextRemain = (prevTodos[prevTodos.length-1].remain+parseInt(text)) ;
        this.setState({
            todos: [ ...this.state.todos, {
                id : generateUId(),
                add:'',
                del : text,
                remain : nextRemain
            }]
        });
    }

    render() {
        const {
            todos
        } = this.state;
        return (
            <div className="todo-app">
                <Header
                    handleAddTodo={(text)=> this.handleAddTodo(text)}
                    handleDeleteTodo={(text)=> this.handleDeleteTodo(text)}
                />
                <TodoList
                    todos={todos}
                />
            </div>
        );
    }
}

export default App;
