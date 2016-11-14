import React, { Component } from 'react';
// 3개의 컴포넌트가 있다.
// 1. 할 목록을 추가하는 Header
// 2. 할 목록 List
// 3. option (전체, 할목록, 완료목록, 지우기) Footer
import Header from './Header';
import TodoList from './TodoList';
import Footer from './Footer';

const generateUId = ()=> Date.now();

class App extends Component {
    constructor() {
        super();
        this.state = {
            todos: [
                {id: 1000, text: '내 생에'},
                {id: 1001, text: '봄날은'},
                {id: 1002, text: '간다'},
                {id: 1003, text: '바람처럼'}
            ],
            editing: null,
            filter: 'All'
        };
    }
	
	// Footer 전체, 할목록, 완룍 목록을 클릭시 동작하는 함수
    handleSelectFilter(filter){
		// filter 값을 전달.
        this.setState({filter});
    }
	
	// 완료된 목록을 지우는 함수
    handleDeleteCompleted(){
		// 필터 함수를 통해 toddos 배열의 done이 false일때 삭제
        const newTodos = this.state.todos.filter( v => !v.done);
        this.setState({todos : newTodos});
    }
	
	// 할일을 추가하는 함수
	handleAddTodo(text) {
		// 새로생긴 텍스트를 전달, id를 생성함 상단에 있음
        this.setState({
            todos: [ ...this.state.todos, {
                id: generateUId(),
                text
            }]
        });
    }
	
	// todo 목록을 삭제하는 함수
    handleDeleteTodo(id) {
//		1. 새로운 배여을 만들고 
//		2. 아이디를 매칭에서 deleteIndex에 할당
//		3. 선택된 요소를 splice함(배열에서 제거)
//		4. 선택 삭제된 요소를 다시 씀
        const newTodos = [...this.state.todos];
        const deleteIndex = newTodos.findIndex(v => v.id === id);
        newTodos.splice(deleteIndex, 1);
        this.setState({ todos: newTodos });
    }
	
	// todo 수정 목록 id 매칭
    handleEditTodo(id) {
		// ex) editing : 1001 이라고 씀 
        this.setState({
            editing: id
        });
    }
	
	// 수정된 값을 저장하는 함수
    handleSaveTodo(id, newText) {
		// 1. 새로 입력된 값을 newTodos에 할당
		// 2. id 값을 editIndex에 할당
		// 3. 새로생긴 텍스트를 newText
		// 4. todos 배여을 바뀐 값을 전달하고
		// 5. editing : null로 바꿈
        const newTodos = [...this.state.todos];
        const editIndex = newTodos.findIndex(v => v.id === id);
        newTodos[editIndex].text = newText;
        this.setState({
            todos: newTodos,
            editing: null
        });
    }
	
	// 수정 취소 함수
    handleCancelEditTodo() {
		// eiditing : null -> change
        this.setState({
            editing: null
        });
    }
	
	// 전체목록 체크하는 함수
    handleToggleAll(){
//		 1. 현재 목록들의 상태를 배열을 순회하면서 v.done을 리턴함
//		 2. 새로운 배여을 맵함수를 통해서 v.done에 newToggleAll을 할당하고 v를리턴
//		 3. 새로운 값을 전달.
        const newToggleAll = !this.state.todos.every(v => v.done);
        const newTodos = this.state.todos.map( v => {
            v.done = newToggleAll;
            return v;
        });
        this.setState({
            todos : newTodos
        });
    }
	
	// 특정 목록을 체크하는 함수
    handleToggleTodo(id){
		// 전체목록과 비슷하나 특정 아이디 값을 가지고 매칭이 추가됨
        const newTodos = [...this.state.todos];
        const editIndex = newTodos.findIndex(v => v.id === id);
        newTodos[editIndex].done = !newTodos[editIndex].done;
        this.setState({
            todos : newTodos
        });
    }
  
    render() {
		// 상태값을 필요한 것들을 전달해 주어야 함.
        const {
            todos,
            editing,
            filter
        } = this.state
		
		// 해야할일과 완룍된 것들의 개수 파악
        const activeLength = todos.filter(v => !v.done).length; 
        const completedLength = todos.length - activeLength;
		
        return (
            <div className="todo-app">
				// 각각의 필요한 함수들을 전달하고 헤당 컴포넌트에 속성으로 전달
                <Header handleAddTodo = {(text)=> this.handleAddTodo(text)} />
                <TodoList
                    todos={todos}
                    editing={editing}
                    filter = {filter}
                    handleEditTodo = {id=> this.handleEditTodo(id)}
                    handleSaveTodo = {(id, newText)=> this.handleSaveTodo(id, newText)}
                    handleCancelEditTodo = {()=> this.handleCancelEditTodo()}
                    handleDeleteTodo = {id=> this.handleDeleteTodo(id)}
                    handleToggleAll = {() => this.handleToggleAll()}
                    handleToggleTodo = { id => this.handleToggleTodo(id)}
                />
				
                <Footer
                    filter = {filter}
                    activeLength = {activeLength}
                    completedLength = {completedLength}
                    handleSelectFilter = {filter => this.handleSelectFilter(filter)}
                    handleDeleteCompleted = {() => this.handleDeleteCompleted()}
                />
            </div>
        );
    }
}

export default App;