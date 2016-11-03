import React, {Component} from 'react';
import ClassNames from 'classnames';
import Todo from './Todo';

const TodoList = ({
  todos, editId, filter, deleteTodo, editTodo, cancelEditTodo, updateTodo, toggleTodo, toggleAll
}) => {
  const todoList = todos.map((v, i) => {
    // Active로 필터링 했는데 현재 배열의 요소가 완료인 경우 컴포넌트를 만들지 않음.
    if(filter === 'Active' && v.done) return;
    // Done으로 필터링 했는데 현재 배열의 요소가 미완료인 경우 컴포넌트를 만들지  않음.
    else if(filter === 'Done' && !v.done) return;
    // 단순히 중계 역할만 할 때는 아래와 같이 씀.
    return <Todo key={i} {...v}
                 isEdited={editId === v.id}
                 deleteTodo={deleteTodo}
                 editTodo={editTodo}
                 cancelEditTodo={cancelEditTodo}
                 updateTodo={updateTodo}
                 toggleTodo={toggleTodo} />
  });
  return (
    <section className="todo-app__main">
      <div className={ClassNames('toggle-all', {checked: todos.every(v => v.done)})}
           onClick={() => toggleAll()} />
      <ul className="todo-list">
        {todoList}
      </ul>
    </section>
  );
};

export default TodoList;

/*export default class TodoList extends Component {
  render() {
    const {todos, editId, deleteTodo, editTodo, cancelEditTodo, saveTodo} = this.props;
    const todoList = todos.map(({...v}, i) => (
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
