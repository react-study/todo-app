import React, { Component } from 'react';
import Header from './Header.js';
import TodoList from './TodoList.js';
//import footer from './footer.js';

const getUniqueId = ()=> Date.now();

class App extends Component {
    constructor (){
        super();
        this.state = {
            todos:[
                { text: '치킨에 맺주한잔', id: 1000},
                { text: '삼겹살에 쏘주', id: 1001},
                { text: '떡순튀', id: 1002}
            ]
        }
    }
    
    addTodo(newTodo){
        const newTodos = [...this.state.todos, { id: getUniqueId(), text: newTodo}];
        this.setState({todos: newTodos});
    }
    
    deleteTodo(id){
        const newTodos = [...this.state.todos];
        const targetIndex = newTodos.findIndex(v => v.id === id);
        newTodos.splice(targetIndex, 1);
        this.setState({todos: newTodos});
    }
    render (){
        return (
            <div className="todo-app">
                <Header addTodo={newTodo=> this.addTodo(newTodo)} />
                <TodoList 
                    todos={this.state.todos} 
                    deleteTodo={(id) => this.deleteTodo(id)}
                />
            </div>    
        );
    }
}

export default App;