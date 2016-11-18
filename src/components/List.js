import React, {Component} from 'react';

export default class List extends Component {
  render() {
    const {isDeposit, money, change} = this.props;
    return(
      <tr>
        <td>{isDeposit ? money : ''}</td>
        <td>{!isDeposit ? money : ''}</td>
        <td>{change}</td>
      </tr>
    );
  }
}