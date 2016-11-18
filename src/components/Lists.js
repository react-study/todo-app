import React, {Component} from 'react';
import List from './List';

export default class Lists extends Component {
  render() {
    const lists = this.props.lists.map((v, i) => (
      <List key={i} {...v} />
    ));
    return(
      <table>
        <caption>거래 내역</caption>
        <thead>
          <tr>
            <th scope="col">입금 내역</th>
            <th scope="col">출금 내역</th>
            <th scope="col">잔액</th>
          </tr>
        </thead>
        <tbody>
        {lists[0] ? lists : <tr><td colSpan="3">거래가 없습니다.</td></tr>}
        </tbody>
      </table>
    )
  }
}