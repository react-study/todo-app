import React, {Component} from 'react';

export default class Todo extends Component {
  editTodo() { // 수정 모드 돌입.
    this.todo.className += ' editing';
    this.editField.focus();
  }

  cancelEditTodo() { // 수정 취소.
    this.todo.className = this.todo.className.split(' ')[0];
    this.editField.value = this.props.text;
  }

  handleKeyDown(e) {
    const text = this.editField.value;
    const id = this.props.id;

    // 내용을 다 지우고 엔터를 누르면 수정이 취소.
    if(!text && e.keyCode === 13) return this.cancelEditTodo();

    // 내용이 있는 상태에서 엔터 이외의 키를 누르면 함수 종료.
    else if(e.keyCode !== 13) return;

    this.props.saveTodo({id, text});

    // blur 시켜버리면 수정 취소가 되어 오동작을 하게 됨.
    this.todo.className = this.todo.className.split(' ')[0];
  }

  render() {
    const {text, id} = this.props;
    return (
      <li className="todo-item"
          ref={ref => {
            this.todo = ref
          }}>
        <div className="todo-item__view">
          <div className="toggle" />
          <div className="todo-item__view__text"
               onDoubleClick={() => this.editTodo()}>
            {text}
          </div>
          {/*
           실제 메소드를 호출할 때는 매개변수를 생략하고 씀.
           */}
          <button className="todo-item__destroy"
                  onClick={()=> this.props.deleteTodo(id)} />
        </div>
        <input type="text"
               className="todo-item__edit"
               defaultValue={text}
               ref={ref => {
                 this.editField = ref;
               }}
               onBlur={() => this.cancelEditTodo()}
               onKeyDown={e => this.handleKeyDown(e)} />
      </li>
    );
  }
}