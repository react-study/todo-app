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
                {id: 1000, text: '치킨에 맥주 한 잔11'},
                {id: 1001, text: '삼겹살에 소주 한 잔'},
                {id: 1002, text: '리코타샐러드에 봉골레 파스타'},
                {id: 1003, text: '떡순튀'}
            ]
        }
    }
    handleAddTodo(text) {
        this.setState({
            todos: [...this.state.todos, {
                id: generateUId(),
                text
            }]
        });
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
                <Header handleAddTodo={(text)=> this.handleAddTodo(text)} />
                <TodoList
                    todos={todos}
                    handleDeleteTodo={(todo)=> this.handleDeleteTodo(todo)}
                />
            </div>
        )
    }
}

export default App;