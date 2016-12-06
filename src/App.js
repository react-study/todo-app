import React, {Component} from 'react';
import axios from  'axios';
import update from 'immutability-helper';
import Header from './Header';
import TodoList from './TodoList';
import Footer from './Footer';

const axiosApi = axios.create({
  baseURL: 'http://localhost:2403/todos',
  timeout: 1000,
  responseType: 'json'
});
const ajax = ({
  method = 'post',
  url = '/',
  data = null,
  res = null,
  rej = null
}) => res ?
    axiosApi[method](url, data).then(res).catch(rej) :
    axiosApi[method](url, data).catch(rej);

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
      todos: [],
      // editId의 경우에는 Todo 컴포넌트의 스테이트로 분리할 수 있지만
      // 유지보수하기 용이하기 위해 하나의 컴포넌트에 몰아넣음.
      // 또한 스테이트를 쓰지 않고 ref를 사용하여 수정/취소 기능 구현이 가능한데
      // ref를 사용하여 className을 바꾸게 되면 리액트의 생명주기를 벗어났으며
      // 리액트의 제어권에서 벗어난 경우이므로 가능하면 ref는 지양하는 게 좋다.
      editId: 0,
      // 어떤 것이 필터링 됐는지 알기 위함이고, 이 스테이트를 통해 클래스가 변경되고
      // TodoList 컴포넌트에서 어떠한 todo들을 todo 컴포넌트로 내려줄지 결정함.
    };
    // window 객체에서 this를 제대로 바인딩하지 못해서 여기에서 바인딩 해줌.
    this.cancelEditTodo = this.cancelEditTodo.bind(this);
  }

  componentWillMount() {
    ajax({
      method: 'get',
      res: res => this.setState({todos: res.data})
    });
    window.addEventListener('click', this.cancelEditTodo);
  }

  // Array.splice() 대신에 [...Array]로 얕은 복사가 가능.
  addTodo(newTodo) {
    const originTodos = this.state.todos;
    this.setState({
      todos: [...originTodos, {text: newTodo, done: false}]
    });
    ajax({
      data: {
        text: newTodo
      },
      res: ({data: {id}}) => {
        const lastIdxNewTodos = this.state.todos.length-1;
        const newTodos = update(this.state.todos, {[lastIdxNewTodos]: {
          id: {
            $set: id
          }
        }});
        this.setState({todos: newTodos});
      },
      rej: err => {
        console.error(err);
        this.setState({todos: originTodos})
      }
    });
  }

  /*
   * 인덱스가 아닌 고유 id로 접근하는 이유는
   * db에서 id를 키값으로 접근하기 때문.
   */
  deleteTodo(id) {
    const originTodos = [...this.state.todos];
    const idx = originTodos.findIndex(v => v.id === id);
    this.setState({todos: update(originTodos, {$splice:
      [[idx, 1]]
    })});
    ajax({
      method: 'delete',
      url: `/${id}`,
      rej: err => {
        console.error(err);
        this.setState({todos: originTodos});
      }
    });
  }

  editTodo(id) {
    this.setState({editId: id});
  }

  cancelEditTodo() {
    this.setState({editId: null});
  }


  // 자식 컴포넌트로부터 id와 수정된 텍스트를 가지고 있는 객체를 매개변수로 받음.
  updateTodo(text) {
    const originTodos = this.state.todos;
    const idx = originTodos.findIndex(v => v.id === this.state.editId);
    this.setState({todos: update(originTodos, {[idx]: {
      text: {
        $set: text
      }
    }}), editId: null});
    ajax({
      url: `/${this.state.editId}`,
      data: {text},
      rej: err => {
        console.error(err);
        this.setState({todos: originTodos});
      }
    });
  }

  toggleTodo(id) {
    const originTodos = this.state.todos;
    const idx = originTodos.findIndex(v => v.id === id);
    this.setState({todos: update(originTodos, {[idx]: {
      done: {
        $set: !originTodos[idx].done
      }
    }})});
    ajax({
      url: `/${id}`,
      data: {done: !originTodos[idx].done},
      rej: err => {
        console.error(err);
        this.setState({todos: originTodos});
      }
    });
  }

  toggleAll() {
    const originTodos = this.state.todos;
    // 모두 체크 됐는지 아닌지 알아냄.
    const isCheckedAll = originTodos.every(v => v.done);
    // 모두 체크되지 않은 경우에는 모두 완료로
    // 모두 체크된 경우에는 모두 미완료로 변경해야함.
    // 상반되는 동작을 수행해야함.
    this.setState({todos: originTodos.map(v =>
      update(v, {
        done: {
          $set: !isCheckedAll
        }
      })
    )});
    const promises = originTodos.map(({id}) => ajax({
      url: `/${id}`,
      data: {done: !isCheckedAll}
    }));
    axios.all(promises).catch(err => {
      console.error(err);
      this.setState({todos: originTodos});
    });
  }

  deleteDone() {
    const originTodos = [...this.state.todos];
    this.setState({todos: originTodos.filter(v => !v.done)});

    // 미완료된 애들만 필터링해서 새로운 배열로 만듦.
    const promises = originTodos.filter(v => v.done)
      .map(({id}) => ajax({
        method: 'delete',
        url: `/${id}`
      }));
    axios.all(promises).catch(err => {
      console.error(err);
      this.setState({todos: originTodos});
    });
  }

  render() {
    const {todos, editId} = this.state;
    const {filter} = this.props.routeParams;
    const doneLength = todos.filter(v => v.done).length;
    const activeLength = todos.length - doneLength;
    return (
      <div className="todo-app"
           onClick={() => this.cancelEditTodo()}>
        {/*
         props로 메소드를 내려줄 때는 함수 호출문처럼 내려줘야 함.
         리액트가 this 바인딩을 제대로 못해서 아래와 같이 써줘야 함.
         */}
        <Header addTodo={newTodo => this.addTodo(newTodo)}/>
        <TodoList todos={todos}
                  editId={editId}
                  filter={filter}
                  deleteTodo={id => this.deleteTodo(id)}
                  editTodo={id => this.editTodo(id)}
                  cancelEditTodo={this.cancelEditTodo}
                  updateTodo={text => this.updateTodo(text)}
                  toggleTodo={id => this.toggleTodo(id)}
                  toggleAll={() => this.toggleAll()}/>
        <Footer activeLength={activeLength}
                doneLength={doneLength}
                filter={filter}
                deleteDone={() => this.deleteDone()}/>
      </div>
    );
  }
}