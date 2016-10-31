import React, {Component} from 'react';
import Todo from './Todo';

const TodoList = ({
  todos, deleteTodo, saveTodo
}) => {
  const todoList = todos.map((v, i) => (
    // 단순히 중계 역할만 할 때는 아래와 같이 씀.
    <Todo key={i} {...v}
          deleteTodo={deleteTodo}
          saveTodo={saveTodo} />
  ));
  return (
    <section className="todo-app__main">
      <div className="toggle-all" />
      <ul className="todo-list">
        {todoList}
      </ul>
    </section>
  );
};

export default TodoList;

/*
export default class TodoList extends Component {
  render() {
    const {todos, editId, deleteTodo, editTodo, cancelEditTodo, saveTodo} = this.props;
    const todoList = todos.map(({ ...v}, i) => (
      // 단순히 중계 역할만 할 때는 아래와 같이 씀.
      <Todo key={i} {...v}
            isEdited={editId === v.id}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            cancelEditTodo={cancelEditTodo}
            saveTodo={saveTodo} />
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
}*/
