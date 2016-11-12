import React, { Component } from 'react';
import axios from 'axios';

import Header from './Header';
import TodoList from './TodoList';
import Footer from './Footer';


const axiosApi = axios.create({
    baseURL: 'http://localhost:2403',
    timeout: 1000,
    responseType: 'json'
});

const ax = ({
    method = 'post',
    url = '/',
    data,
    res,
    rej = err => { console.log(err); }
}) => {
    if(data) return axiosApi[method](url, data).then(res).catch(rej);

    return axiosApi[method](url).then(res).catch(rej);
};

const generateUId = ()=> Date.now();

class App extends Component {
    constructor() {
        super();
        this.state = {
            todos: [],
            editing: null
        };
    }
    componentWillMount() {
        ax({
            method: 'get',
            url: '/todos',
            res: res => {
                console.log(res);
                this.setState({ todos: res.data });
            }
        });
    }

    handleAddTodo(text) {
        ax({
            url: '/todos',
            data: {
                text
            },
            res: res => {
                this.setState({
                    todos: [ ...this.state.todos, res.data ]
                });
            }
        });
    }
    handleDeleteTodo(id) {
        ax({
            method: 'delete',
            url: `/todos/${id}`,

            res: res => {
                const newTodos = [ ...this.state.todos ];
                const deleteIndex = newTodos.findIndex(v => v.id === id);
                newTodos.splice(deleteIndex, 1);
                this.setState({ todos: newTodos });
            }
        });
    }
    handleEditTodo(id) {
        this.setState({
            editing: id
        });
    }
    handleSaveTodo(id, newText) {
        ax({
            method: 'put',
            url: `/todos/${id}`,
            data: { text: newText },
            res: res => {
                const newTodos = [...this.state.todos];
                const editIndex = newTodos.findIndex(v => v.id === id);
                newTodos[editIndex] = res.data;

                this.setState({
                    todos: newTodos,
                    editing: null
                });
            }
        });
    }
    handleCancelEditTodo() {
        this.setState({
            editing: null
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
                />
                <Footer />
            </div>
        );
    }
}

export default App;