import React, {Component} from 'react';
import ClassNames from 'classnames';

export default class Todo extends Component {
  constructor() {
    super();
    // window 객체에서 this를 제대로 바인딩하지 못해서 여기에서 바인딩 해줌.
    this.cancelEditTodo = this.cancelEditTodo.bind(this);
  }

  // 최초 컴포넌트가 마운트 됐을 때 1회 발생함.
  // 윈도우 객체를 클릭했을 때 수정 모드를 취소.
  // input 창에 blur 했을 때 수정 모드 취소를 하게 되면
  // 탭 이동이나 다른 윈도우를 클릭했을 때도 수정 취소가 됨...
  componentDidMount() {
    window.addEventListener('click', this.cancelEditTodo);
  }

  // setState가 발생하면 렌더링이 다시 발생됨.
  // 이는 퍼포먼스 저하와도 직결되어 stateless 컴포넌트를 지향함.
  // 따라서 state에 따라 클래스를 주는 게 아니라 ref를 사용하여 클래스를 지정함.
  editTodo() {
    this.todo.className += ' editing';
    this.editField.focus();
  }

  cancelEditTodo() {
    this.todo.className = this.todo.className.replace(' editing', '');
  }

  // 그냥 input에 value를 주면 readOnly가 됨.
  // onChange 핸들러를 주는 등등의 방법이 필요하지만,
  // input이 포커스 되기 전까지 딱히 value를 가질 필요도 없음.
  // 따라서 focus 됐을 때만 value를 주면 되고,
  // 추가 작업 없이도 readOnly 모드를 벗어날 수 있음.
  handleFocus() {
    this.editField.value = this.props.text;
  }

  // 윈도우 객체를 클릭했을 때 수정 모드가 취소되지만
  // 예외적으로 수정 중인 input을 클릭했을 때는 취소되면 안 됨.
  // 따라서 이벤트의 버블링을 막음.
  handleClick(e) {
    e.stopPropagation();
  }

  handleKeyDown(e) {
    const text = this.editField.value;

    // 내용을 다 지우고 엔터를 누르면 수정이 취소.
    if(!text && e.keyCode === 13) return this.cancelEditTodo();

    // 내용이 있는 상태에서 엔터 이외의 키를 누르면 함수 종료.
    else if(e.keyCode !== 13) return;

    this.props.saveTodo(this.props.id, text);
    this.cancelEditTodo();
  }

  render() {
    const {text, id} = this.props;
    return (
      <li className="todo-item"
          ref={ref => {
            this.todo = ref;
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