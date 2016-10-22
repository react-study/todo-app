import React, {Component} from 'react';

export default class Header extends Component {
  handleKeyDown(e) {
    const val = this._input.value;
    if(!val || e.keyCode !== 13) return;

    this.props.addTodo(val);
    this._input.value = '';
  }
  render() {
    return (
      <header>
        <h1 className="todo-app__header">todos</h1>
        <input className="todo-app__new-todo" placeholder="What needs to be done?"
               onKeyDown={e => this.handleKeyDown(e)}
               ref={ref => {this._input = ref;}}/>
      </header>
    );
  }
}