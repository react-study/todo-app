import React, { Component } from 'react';
import Header from './Header';
import TodoList from './TodoList';
import Footer from './Footer';
import axios from 'axios';

// axios모듈의 create함수를 씀 baseURL, timeout, respnseType 등이 속성ㅇ이 있음 서버연결하고 형태는 json
const axiosApi = axios.create({
	baseURL : 'http://localhost:2403/todos',
	timeout : 1000,
	responseType : 'json'
});

// method, url, data, res, rej 등을 써서 요청과 응답을 promise로 처리함.
const ax = ({
	method = 'post',
	url = '/',
	data,
	res,
	rej = err => {console.error(err);}
}) => {
	// true 조건 post 옳으면 res or rej, not if post res or rej
	if(data){ return axiosApi[method](url, data).then(res).catch(rej); }
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
	
	// ax()  통해서 method : get post put delete, url : id매칭 res : res등이 반복된다.
    handleDeleteCompleted() {
		// 이것의 상태 todos의 배열을 filter해서 v.done을 리턴하고 map함수로 ax를 콜백해서 method:delete ,url: todo.id값 
        const axiosPromises = this.state.todos
			.filter(v => v.done)
			.map(todo => ax({
				method: 'delete',
				url: `/${todo.id}`
			}));
		const newTodos = this.state.todos.filter(v => !v.done);
		
		// axiosPromises 객체 받아서 응답이 오면 콜백으로 todos에 newTodos값을 쓴다.
		axios.all(axiosPromises).then(res => {
			this.setState({
				todos: newTodos
			})
		})
		// 응답이 없으면 에러를 뱉자.
		.catch(err => {console.error(err)});
    }
	
    handleAddTodo(text) {
		// data : {text: text} 이고 응답을 닫으면 todos 현재상태의 todos에 응답받음 data를 추가한다. 
        ax({
			data: {text},
			res: res => {
				this.setState({
					todos: [...this.state.todos, res.data]
				});
			}
		});
		this.setState({
            todos: [ ...this.state.todos, {
                text
            }]
        });
    }
	
    handleDeleteTodo(id) {
		ax({
			method: 'delete',
			url: `${id}`,
			res: res => {
				const newTodos = [...this.state.todos];
				const deleteIndex = newTodos.findeIndex(v => v.id === id);
				newTodos.splice(deleteIndex, 1);
				this.setState({todos: newTodos});
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
				const editIndex = newTodos.findIndex( v => v.id === id);
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
	
    handleToggleAll() {
        const newToggleAll = !this.state.todos.every(v => v.done);
        const axiosPromise = this.state.todos.map(v => ax({
			method: 'put',
			url : `${v.id}`,
			data: {done: newToggleAll}
        }));
		axios.all(axiosPromise).then(res => {
			this.setState({
				todos: res.map(response => response.data)
			});
		});
    }
	
    handleToggleTodo(id) {
    	const isDone = this.state.todos.find(v => v.id === id).done;
		ax({
			method: 'put',
			url: `${id}`,
			data: {done: !isDone},
			res: res => {
				const newTodos = [...this.state.todos];
				const editIndex = newTodos.findIndex(v => v.id === id);
				newTodos.splice(editIndex, 1, res.data);
				this.setState({todos: newTodos});
			}
		});
	}

    render() {
		console.log(this.state.todos);
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
