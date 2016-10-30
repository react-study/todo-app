import React, {Component} from 'react';
import ClassNames from 'classnames';

export default class Todo extends Component {
  componentDidUpdate() {
    if(this.props.isEdited) this.editField.focus();
  }

  handleFocus() {
    this.editField.value = this.props.text;
  }

  handleClick(e) {
    e.stopPropagation();
  }

  handleKeyDown(e) {
    const text = this.editField.value;

    // 내용을 다 지우고 엔터를 누르면 수정이 취소.
    if(!text && e.keyCode === 13) return this.props.cancelEditTodo();

    // 내용이 있는 상태에서 엔터 이외의 키를 누르면 함수 종료.
    else if(e.keyCode !== 13) return;

    this.props.saveTodo(text);
  }

  render() {
    const {isEdited, text, id, editTodo} = this.props;
    return (
      <li className={ClassNames('todo-item', {editing: isEdited})}>
        <div className="todo-item__view">
          <div className="toggle" />
          <div className="todo-item__view__text"
               onDoubleClick={() => editTodo(id)}>
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
               ref={ref => {
                 this.editField = ref;
               }}
               onFocus={() => this.handleFocus()}
               onClick={e => this.handleClick(e)}
               onKeyDown={e => this.handleKeyDown(e)} />
      </li>
    );
  }
}