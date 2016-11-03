import React, {Component} from 'react';
import ClassNames from 'classnames';

export default class Todo extends Component {
  // 스테이트가 변경됐을 때(수정 모드 돌입, 수정 모드 완료, 수정 모드 취소 등등의 경우)
  componentDidUpdate() {
    // 인풋창에 포커스를 줌.
    if(this.props.isEdited) this.editField.focus();
    // 인풋 창에 포커스를 주기 전에 인풋창의 값을 초기화.
    else this.editField.value = '';
  }

  // 포커스를 가지기 전까지는 value를 가질 필요가 없음.
  // 미리 value를 줘버리면 readOnly모드가 돼버리고,
  // 추가적으로 onChange 핸들러가 필요하게 됨.
  handleFocus() {
    // 아래와 같이 하면 탭 이동을 하거나 다른 창을 눌렀다가 다시 현재
    // 앱을 켰을 때 포커스가 새로 되면서 이전에 수정된 내역을 잃게 됨.
    // this.editField.value = this.props.text;
    // 즉 아래가 완전판임.
    this.editField.value = !this.editField.value ? this.props.text : this.editField.value;
  }

  // 이벤트의 버블링을 방지.
  // 상위 요소의 클릭 이벤트 핸들러인 수정 취소 기능이 실행하는 걸 방지.
  handleClick(e) {
    e.stopPropagation();
  }

  handleKeyDown(e) {
    const text = this.editField.value;

    // 내용을 다 지우고 엔터를 누르면 수정이 취소.
    if(!text && e.keyCode === 13) return this.props.cancelEditTodo();

    // 내용이 있는 상태에서 엔터 이외의 키를 누르면 함수 종료.
    else if(e.keyCode !== 13) return;

    this.props.updateTodo(text);
  }

  render() {
    const {isEdited, text, id, done, editTodo, deleteTodo, toggleTodo} = this.props;
    return (
      <li className={ClassNames('todo-item', {
        editing: isEdited,
        completed: done
      })}>
        <div className="todo-item__view">
          <div className="toggle"
               onClick={() => toggleTodo(id)} />
          <div className="todo-item__view__text"
               onDoubleClick={() => editTodo(id)}>
            {text}
          </div>
          {/*
           실제 메소드를 호출할 때는 매개변수를 생략하고 씀.
           */}
          <button className="todo-item__destroy"
                  onClick={()=> deleteTodo(id)} />
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