import React, {Component} from 'react';
import Todo from './Todo';

export default class TodoList extends Component {
  render() {
    const todoList = this.props.todos.map((v, i) => (
      // 단순히 중계 역할만 할 때는 아래와 같이 씀.
      <Todo key={i} {...v}
            deleteTodo={this.props.deleteTodo}
            saveTodo={this.props.saveTodo} />
    ));
    return (
      <section className="todo-app__main">
        <div className="toggle-all" />
        <ul className="todo-list">
          {todoList}
        </ul>
      </section>
    );
  }
}