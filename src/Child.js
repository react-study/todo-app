import React, {Component} from 'react'

export default class Child extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
    phone: React.PropTypes.string,
    show: React.PropTypes.bool.isRequired,
    gender: React.PropTypes.string
  };
  render() {
    const {name, phone, show} = this.props;
    return (
      <li>
        {name}: {phone} / {show + ''}
      </li>
    )
  }
}
