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
                {id: 1000, text: '치킨에 맥주 한 잔'},
                {id: 1001, text: '삼겹살에 소주 한 잔'},
                {id: 1002, text: '리코타샐러드에 봉골레 파스타'},
                {id: 1003, text: '떡순튀'}
            ],
            editing: null
        };
    }
    handleAddTodo(text) {
        this.setState({
            todos: [ ...this.state.todos, {
                id: generateUId(),
                text
            }]
        });
    }
    handleDeleteTodo(id) {
        const newTodos = [...this.state.todos];
        const deleteIndex = newTodos.findIndex(v => v.id === id);
        newTodos.splice(deleteIndex, 1);
        this.setState({ todos: newTodos });
    }
    handleEditTodo(id) {
        this.setState({
            editing: id
        });
    }
    handleSaveTodo(id, newText) {
        const newTodos = [...this.state.todos];
        const editIndex = newTodos.findIndex(v => v.id === id);
        newTodos[editIndex].text = newText;
        this.setState({
            todos: newTodos,
            editing: null
        });
    }
    handleCancelEditTodo() {
        this.setState({
            editing: null
        });
    }
    handleToggleAll() {
        const newToggleAll = !this.state.todos.every(v => v.done);
        const newTodos = this.state.todos.map(v => {
            v.done = newToggleAll;
            return v;
        });
        this.setState({
            todos: newTodos
        });
    }
    handleToggleTodo(id) {
        const newTodos = [...this.state.todos];
        const editIndex = newTodos.findIndex(v => v.id === id);
        newTodos[editIndex].done = !newTodos[editIndex].done;
        this.setState({
            todos: newTodos
        });
    }

    render() {
        const {
            todos,
            editing
        } = this.state;
        return (
            <div className="todo-app">
                <Header handleAddTodo = {(text)=> this.handleAddTodo(text)} />
                <TodoList
                    todos={todos}
                    editing={editing}
                    handleEditTodo = {id=> this.handleEditTodo(id)}
                    handleSaveTodo = {(id, newText)=> this.handleSaveTodo(id, newText)}
                    handleCancelEditTodo = {()=> this.handleCancelEditTodo()}
                    handleDeleteTodo = {id=> this.handleDeleteTodo(id)}
                    handleToggleAll={()=> this.handleToggleAll()}
                    handleToggleTodo={id=> this.handleToggleTodo(id)}
                />
                <Footer />
            </div>
        );
    }
}

export default App;
