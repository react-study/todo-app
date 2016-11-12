import React, { Component } from 'react';
import Header from './Header';
import TodoList from './TodoList';
import Footer from './Footer';
import axios from 'axios';

const axiosApi = axios.create({
    baseURL : 'http://localhost:2403/todos/',
    timeout: 1000,
    responseType: 'json'
});

const ax = ({
    method = 'post',
    url = '/',
    data,
    res = () => {},
    rej = err => { console.error(err); }
}) => {
    if(data) return axiosApi[method](url, data).then(res).catch(rej);
    return axiosApi[method](url).then(res).catch(rej);
}

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
            res: ({data}) => {
                this.setState({ todos: data });
            }
        });
    }
    handleDeleteCompleted() {
        const prevTodos = this.state.todos;
        this.setState({
            todos: prevTodos.filter(v=> !v.done)
        });

        const axiosPromises = prevTodos.filter(v => v.done)
        .map(todo => ax({
            method: 'delete',
            url: `/${todo.id}`
        }));
        axios.all(axiosPromises)
        .catch(err => {
            this.setState({
                todos: prevTodos
            });
        });
    }
    handleAddTodo(text) {
        ax({
            data: { text },
            res: res => {
                this.setState({
                    todos: [ ...this.state.todos, res.data ]
                });
            }
        });
    }
    handleDeleteTodo(id) {
        const prevTodos = this.state.todos;
        const deleteIndex = prevTodos.findIndex(v=> v.id === id);
        const newTodos = [...prevTodos];
        newTodos.splice(deleteIndex, 1);
        this.setState({ todos: newTodos });

        ax({
            method: 'delete',
            url: `/${id}`,
            rej: err => {
                this.setState({ todos: prevTodos });
            }
        });
    }
    handleEditTodo(id) {
        this.setState({ editing: id });
    }
    handleSaveTodo(id, newText) {
        const prevTodos = this.state.todos;
        const editIndex = prevTodos.findIndex(v=> v.id === id);
        const newTodos = [...prevTodos];
        newTodos[editIndex].text = newText;
        this.setState({
            todos: newTodos,
            editing: null
        });
        ax({
            method: 'put',
            url: `/${id}`,
            data: { text: newText },
            rej: err => {
                this.setState({
                    todos: prevTodos
                });
            }
        });
    }
    handleCancelEditTodo() {
        this.setState({
            editing: null
        });
    }
    handleToggleAll() {
        const prevTodos = this.state.todos;
        const newToggleAll = !prevTodos.every(v=> v.done);
        const newTodos = prevTodos.map(todo => {
            todo.done = newToggleAll;
            return todo
        });
        this.setState({
            todos: newTodos
        });

        const axiosPromise = newTodos.map(v => ax({
            method: 'put',
            url: `${v.id}`,
            data: { done: newToggleAll }
        }));
        axios.all(axiosPromise)
        .catch(err => {
            this.setState({ todos: prevTodos });
        });
    }
    handleToggleTodo(id) {
        const prevTodos = this.state.todos;
        const editIndex = prevTodos.findIndex(v=> v.id === id);
        const newTodos = [...prevTodos];
        newTodos[editIndex].done = !newTodos[editIndex].done;
        this.setState({ todos: newTodos });

        ax({
            method: 'put',
            url: `/${id}`,
            data: { done: newTodos[editIndex].done },
            rej: err => {
                this.setState({ todos: prevTodos });
            }
        });
    }

    render() {
        const {
            todos,
            editing
        } = this.state;
        const filter = this.props.routeParams.filter;

        const activeLength = todos.filter(v=> !v.done).length;
        const completedLength = todos.length - activeLength;

        return (
            <div className="todo-app">
                <Header handleAddTodo = {(text)=> this.handleAddTodo(text)} />
                <TodoList
                    todos={todos}
                    editing={editing}
                    filter={filter}
                    handleEditTodo = {id=> this.handleEditTodo(id)}
                    handleSaveTodo = {(id, newText)=> this.handleSaveTodo(id, newText)}
                    handleCancelEditTodo = {()=> this.handleCancelEditTodo()}
                    handleDeleteTodo = {id=> this.handleDeleteTodo(id)}
                    handleToggleAll={()=> this.handleToggleAll()}
                    handleToggleTodo={id=> this.handleToggleTodo(id)}
                />
                <Footer
                    filter = {filter}
                    activeLength = {activeLength}
                    completedLength = {completedLength}
                    handleSelectFilter = {filter=> this.handleSelectFilter(filter)}
                    handleDeleteCompleted = {()=> this.handleDeleteCompleted()}
                    completeLength = {todos.filter(v=> v.done).length}
                />
            </div>
        );
    }
}

export default App;
