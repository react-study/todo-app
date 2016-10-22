import React, {Component} from 'react';
import Header from './Header';
import TodoList from './TodoList';
import Footer from './Footer';

const getUiniqueId = () => Date.now();

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {id: 1000, text: '해커스 가기'},
        {id: 1001, text: '자전거 타기'},
        {id: 1002, text: '피자 먹기'}
      ]
    }
  }
  addTodo(newTodo) {
    const newTodos = [...this.state.todos, {id: getUiniqueId(), text: newTodo}];
    this.setState({todos: newTodos});
  }
  deleteTodo(id) {
    const newTodos = [...this.state.todos];
    const targetIndex = newTodos.findIndex(v => v.id === id);
    newTodos.splice(targetIndex, 1);
    this.setState({todos: newTodos});
  }
  render() {
    return(
      <div className="todo-app">
        <Header addTodo={newTodo => this.addTodo(newTodo)} />
        <TodoList todos={this.state.todos}
                  deleteTodo={id => this.deleteTodo(id)} />
        {/*<Footer />*/}
      </div>
    );
  }
}