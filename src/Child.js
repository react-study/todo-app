import React, {Component} from 'react'

export default class Child extends Component {
  render() {
    const {name, phone, show, handleClick} = this.props;
    return (
      <li onClick={handleClick}>
        <p>name: {name}</p>
        <p style={{
          display: show ? 'inlinsssse' : 'none'
        }}>{phone}</p>
      </li>
    );
  }
}