import React, {Component} from 'react';

export default class Footer extends Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {text: '해커스 가기'},
        {text: '자전거 타기'},
        {text: '피자 먹기'}
      ]
    }
  }
  render() {
    return(
      <div className="todo-app">
        <Header />
        <TodoList todos={this.state.todos} />
        <Footer />
      </div>
    );
  }
}