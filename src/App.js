import React, { Component } from 'react';
import Header from './Header';
import TodoList from './TodoList';
import Footer from './Footer';
import axios from 'axios';

//axios.get(url)
//axios.put
//axios.post
//axios.delete
const axiosApi = axios.create({
    baseURL:'http://localhost:2403/todos',
    timeout: 1000,
    responseType: 'json'
});

const ax = ({
    method = 'post',
    url = '/',
    data,
    res,
    rej = err => {console.log(err); }
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
    componentWillMount(){
        ax({
            method:'get',
            res: res => {
                this.setState({todos: res.data});
            }
        });
    }
    handleDeleteCompleted() {

        const axiosPromise = this.state.todos
            .filter(v => v.done)
            .map(todo => ax({
                method: 'delete',
                url: `/${todo.id}`
            }));

        axios.all(axiosPromise).then(res => {
            this.setState({
                todos: res.map(response => response.data)
            });
        }).catch(err => { cosole.error(err);});

    }
    handleAddTodo(text) {
        ax({
            data:{
                text,
                done:false
            },
            res: res => {
                this.setState({
                    todos:[...this.state.todos, res.data]
                });
            }
        });
    }
    handleDeleteTodo(id) {

        ax({
            method: 'delete',
            url: `/${id}`,
            res: res => {
                const newTodos = [...this.state.todos];
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
            url: `/${id}`,
            data: {text: newText},
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
        const axiosPromise = this.state.todos.map(v => ax({
            method: 'put',
            url: `${v.id}`,
            dat: {done:newToggleAll}
        }));

        axios.all(axiosPromise).then(res => {
            //console.log(res);
            this.setState({
                todos: res.map(response => response.data)
            });
        });
    }
    handleToggleTodo(id) {
        const isDone = this.state.todos.findIndex(v => v.id === id).done;
        ax({
            method: 'put',
            url: `/${id}`,
            data: {done: !isDone},
            res: res => {
                const newTodos = [...this.state.todos];
                const editIndex = newTodos.findIndex(v => v.id === id);
                newTodos.splice(editIndex, 1, res.data);

                this.setState({
                    todos: newTodos
                });
            }
        });

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
