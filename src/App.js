import React, { Component } from 'react';
import Header from './Header';
import TodoList from './TodoList';
import Footer from './Footer';

const generateUId = ()=> Date.now();

class App extends Component {
    constructor() {
        super();
        this.state = {
            todos: [
                {id: 1000, text: 'hacosa'},
                {id: 1001, text: '어중이'},
                {id: 1002, text: '떠중이'}
            ]
        }
    }
    handleAddTodo(text) {
        this.setState({
            todos: [...this.state.todos, {
                id: generateUId(),
                text
            }]
        })

    }
    handleDeleteTodo(todo) {
        const newTodos = [...this.state.todos];
        const deleteIndex = newTodos.findIndex(v => v.id === todo.id);
        newTodos.splice(deleteIndex, 1);
        this.setState({ todos: newTodos});
    }

    render() {
        const {
            todos
        } = this.state;
        return (
            <div className="todo-app">
                <Header handleAddTodo={ text => this.handleAddTodo(text)} />
                <TodoList
                    todos={todos}
                    handleDeleteTodo={(todo)=> this.handleDeleteTodo(todo)}
                />
            </div>
        )
    }
}

export default App;