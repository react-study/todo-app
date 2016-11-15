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

// res= res 에서 함수를 리턴해야 하는 이유는 모르겠다. 어떤 값을 던지는것과 함수를 던지는것의 차이?
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


// 낙관적 업데이트란 서버에서 송수신이 에러없이 일어날것이라고 가정하고 클라에서 업뎃하고 송 수신 때 에러가 발생할겨웅 이전 데이터로 돌린다.
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
	
	// 완료된것 지워라
    handleDeleteCompleted() {
		// 클라 영역 이전 값을 prevTodos에 저장
        const prevTodos = this.state.todos;
        this.setState({
            todos: prevTodos.filter(v=> !v.done)
        });
		
		// 서버와 통신을 하고 에러가 있을경우 이전 prevTodos를 저장함.
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
	
	// 추가기능 함수
    handleAddTodo(text) {
		// 추가의 경우에는 데이터에 추가해서 다시 get을 받게함. 그전 방식 그대로
        ax({
            data: { text },
            res: res => {
                this.setState({
                    todos: [ ...this.state.todos, res.data ]
                });
            }
        });
    }
	
	
	// list 지우는 함수
    handleDeleteTodo(id) {
		// 클라에서 이전값 저장및 바뀐값 써주고
        const prevTodos = this.state.todos;
        const deleteIndex = prevTodos.findIndex(v=> v.id === id);
        const newTodos = [...prevTodos];
        newTodos.splice(deleteIndex, 1);
        this.setState({ todos: newTodos });
		
		// 서버와 통신후 에러 발생시 이전값으로 수정
        ax({
            method: 'delete',
            url: `/${id}`,
            rej: err => {
                this.setState({ todos: prevTodos });
            }
        });
    }
	
    // input 수정 창 들어가기
	handleEditTodo(id) {
        this.setState({ editing: id });
    }
	
	// 수정 저장
    handleSaveTodo(id, newText) {
		// 이전값 저장하고 새로운 데이터 클라에서처리
        const prevTodos = this.state.todos;
        const editIndex = prevTodos.findIndex(v=> v.id === id);
        const newTodos = [...prevTodos];
        newTodos[editIndex].text = newText;
        this.setState({
            todos: newTodos,
            editing: null
        });
		// 서버에 데이터 업뎃하고 에러시 이전값으로 돌린다.
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
	
	// 에디트 취소 인풋창 나오기
    handleCancelEditTodo() {
        this.setState({
            editing: null
        });
    }
	
	// 전체 토글하기
    handleToggleAll() {
		// 배열 순회에서 모든 데이터에 done 체크 newTodos 작성한다.
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
	
	// 리스트 하나씩 토글하기
    handleToggleTodo(id) {
		// id로 체크해서 done 값을 true or false로 변경
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
//
export default App;