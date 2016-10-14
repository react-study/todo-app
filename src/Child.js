import React from 'react';
class Child extends React.Component {
  render() {
    const { name, phone, show, handleClick } = this.props;
    return (
      <li onClick={handleClick}>
        <p>name: {name}</p>
        <p style={{
          display: show ? 'inline' : 'none'
        }}>
          {phone}
        </p>
      </li>
    );
  }
}
export default Child;
