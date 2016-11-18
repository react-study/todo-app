import React, {Component} from 'react';
import Header from './Header';
import Lists from './Lists';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      change: 0,
      lists: []
    }
  }

  transaction(mode, money) {
    const change = +this.state.change + (mode === 'deposit' ? money : -money);
    const list = {
      isDeposit: mode === 'deposit',
      money: money,
      change: change
    };
    const lists = [...this.state.lists, list];
    this.setState({
      change: change,
      lists: lists
    })
  }

  render() {
    const {lists, change} = this.state;
    return (
      <div id="app">
        <Header change={change}
                transaction={(mode, money) => this.transaction(mode, money)} />
        <Lists lists={lists} />
      </div>
    )
  }
}