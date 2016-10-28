import React, { Component } from 'react';
import Header from './Header';
import TodoList from './TodoList';
import Footer from './Footer';

const getUniqueId = ()=>Date.now();

class App extends Component{
	constructor() {
		super();
		this.state= {
			todos: [
				{id:1000, text : ' react sutdy '},
				{id:1001, text : ' javascript sutdy '},
				{id:1002, text : ' react sutdy2 '}
			],
			editing: null
		};
	}
	handleAddTodo(text){
		this.setState({ 
				todos: [...this.state.todos,{
					id:getUniqueId(),
					text
				}]

		});
	}

	handleDeleteTodo(id){
		const newTodos = [...this.state.todos];
		const delteteIndex = newTodos.findIndex(v=> v.id === id);
		newTodos.splice(delteteIndex, 1);
		this.setState({ todos: newTodos});
	}


	// ---------
	handleEditTodo(id){
		this.setState({
			editing: id
		});
	}
	handleSaveTodo(id, newText){
		const newTodos= [...this.state.todos];
		const editIndex = newTodos.findIndex( v=> v.id === id);
		newTodos[editIndex].text = newText;
		this.setState({
			todos: newTodos,
			editing: null
		});
	}

	handleCancelEditTodo(){
		this.setState({
			editing:null
		});
	}




	render(){
		const{
			todos,
			editing
		} = this.state;
		return(
			<div className="todo-app">
				<Header handleAddTodo={ (text)=> this.handleAddTodo(text) }/>
				<TodoList 
					todos={todos} 
					editing ={editing}


					handleDeleteTodo ={id => this.handleDeleteTodo(id)} 
					
					handleEditTodo ={id =>this.handleEditTodo(id)}
					handleSaveTodo  = {(id, newText) => this.handleSaveTodo (id, newText)}
					handleCancelEditTodo  = {()=> this.handleCancelEditTodo ()}

					
				/>
				<Footer />	
			</div>
		);
	}
}

export default App;