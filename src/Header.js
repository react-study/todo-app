import React, {Component} from 'react';

class Header extends Component {
  constructor(){
    super();
  }

  handle(opt,val){
    this.props.handleAddTodo(val*opt);
    this._input.value = '';
  }
  handle2(opt,val){
    this.props.handleDeleteTodo(val*opt);
    this._input.value = '';
  }
    render(){
        return(
            <div className ="text_C">
                <h1 className="todo-app__header">가계부</h1>
                <input
                  ref = {ref => {this._input = ref}}
                />
                <button
                  className ="mybtn"
                  onClick = {() => this.handle(1,this._input.value)}
                >입금버튼</button>
                <button
                  className ="mybtn"
                  onClick = {() => this.handle2(-1,this._input.value)}
                >출금버튼</button>
                <ul className ="headerList">
                    <li>입금</li>
                    <li>출금</li>
                    <li>잔금</li>
                </ul>
            </div>
        )
    }
}

export default Header;
