import React, {Component} from 'react';

export default class Header extends Component {
  handleKeyDown(e) {
    /*
    const val = e.target.value;
    if(!val || e.keyCode !== 13) return;
    this.props.addTodo(val);
    e.target.value = '';
    */
    const val = this._input.value;
    if(!val || e.keyCode !== 13) return;
    this.props.addTodo(val);
    this._input.value = '';
  }

  render() {
    return (
      <header>
        <h1 className="todo-app__header">Todos</h1>
        {/* 메소드를 사용할 때 this 바인딩을 해줘야함. */}
        <input className="todo-app__new-todo"
               type="text"
               placeholder="What needs to be done?"
               onKeyDown={e => this.handleKeyDown(e)}
               ref={ref => {
                 this._input = ref
               }} />
      </header>
    );
  }
}