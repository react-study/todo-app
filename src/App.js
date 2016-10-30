import React, {Component} from 'react';
import Header from './Header';
import TodoList from './TodoList';
// import Footer from './Footer';

// getUniqueId는 이 컴포넌트에서만 쓰므로 따로 뺌.
const getUniqueId = () => Date.now();

export default class App extends Component {
  /*
   * props는 읽기 전용이라 데이터를 수정해서 부여하려면 state가 적합합.
   * state를 쓰기 위해 생성자 함수 사용.
   * todos가 TodoList 컴포넌트의 스테이트가 되고,
   * addTodo나 deleteTodo가 각각 Header 컴포넌트, Todo 컴포넌트에 들어가게 되면
   * 메소드를 호출해서 스테이트 변경이 불가능하다.
   * 즉, 변경하려는 스테이트와 변경하는 메소드는 같은 컴포넌트에 있어야 좋다.
   * 따라서 최상단에 스테이트와 메소드가 몰릴 수 밖에 없다.
   */
  constructor() {
    super();
    this.state = {
      todos: [
        {id: getUniqueId(), text: 'PC방 가기'},
        {id: getUniqueId() + 1, text: '자전거 타기'},
        {id: getUniqueId() + 2, text: '피자 먹기'}
      ],
      editId: null
    };
    // window 객체에서 this를 제대로 바인딩하지 못해서 여기에서 바인딩 해줌.
    this.cancelEditTodo = this.cancelEditTodo.bind(this);
  }

  // Array.splice() 대신에 [...Array]로 얕은 복사가 가능.
  addTodo(newTodo) {
    const newTodos = [...this.state.todos, {id: getUniqueId(), text: newTodo}];
    this.setState({todos: newTodos});
  }

  /*
   * 인덱스가 아닌 고유 id로 접근하는 이유는
   * 필터 기능을 적용시켰을 때 배열이
   * 원본 스테이트와는 다른 모양으로 나와서 오동작 하기 때문.
   */
  deleteTodo(id) {
    const newTodos = [...this.state.todos];
    /*
     const idx = newTodos.findIndex((v) => {
     // newTodos[i].id === id 라고 보면 됨.
     return v.id === id
     // 위 조건을 만족하는 배열의 인덱스를 반환.
     // find 메소드였다는 배열의 요소(여기선 객체)를 반환.
     });
     */
    const idx = newTodos.findIndex(v => v.id === id);
    // 인덱스 idx로부터 1개를 짜른 배열을 반환. (앞 뒤 합쳐서)
    newTodos.splice(idx, 1);
    this.setState({todos: newTodos});
  }

  editTodo(id) {
    this.setState({editId: id});
  }

  cancelEditTodo() {
    this.setState({editId: null});
  }

  // 자식 컴포넌트로부터 id와 수정된 텍스트를 가지고 있는 객체를 매개변수로 받음.
  saveTodo(text) {
    const newTodos = [...this.state.todos];
    const idx = newTodos.findIndex(v => v.id === this.state.editId);
    // 자식 컴포넌트와 일치하는 id를 찾아서 수정된 텍스트로 스테이트 대체.
    newTodos[idx].text = text;
    this.setState({todos: newTodos, editId: null});
  }

  componentDidMount() {
    window.addEventListener('click', this.cancelEditTodo);
  }

  render() {
    return (
      <div className="todo-app"
           onClick={() => this.cancelEditTodo()}>
        {/*
         props로 메소드를 내려줄 때는 함수 호출문처럼 내려줘야 함.
         리액트가 this 바인딩을 제대로 못해서 아래와 같이 써줘야 함.
         */}
        <Header addTodo={newTodo => this.addTodo(newTodo)} />
        <TodoList todos={this.state.todos}
                  editId={this.state.editId}
                  deleteTodo={id => this.deleteTodo(id)}
                  editTodo={id => this.editTodo(id)}
                  cancelEditTodo={this.cancelEditTodo}
                  saveTodo={text => this.saveTodo(text)} />
        {/*<Footer />*/}
      </div>
    );
  }
}