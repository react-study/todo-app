import React, {Component} from 'react';
import Child from './Child';

const data = [
  {name: 'jaenam', phone: '010-111-2222', show: false},
  {name: 'taesan', phone: '010-111-2222', show: false},
  {name: 'kwonsung', phone: '010-111-2222', show: false}
];

export default class Parent extends Component {
  static defaultProps = {
    a: 1,
    b: ''+2,
    c: 3
  };

  static propTypes = { // stage-2 이상이어야댐.
    a: React.PropTypes.number,
    b: React.PropTypes.string
  };
  constructor() {
    super();
    this.state = {
      bgc: '#ff0'
    };
  }
  handleClick() {
    this.setState({
      bgc: this.state.bgc === '#ff0' ? '#0ff' : '#ff0'
    })
  }
  render() {
    const children = data.map(({name, ...v}, i) => (
      /*<Child key={i} name={v.name} phone={v.phone} show={v.show} />*/
      <Child key={i} name={`person ${name}`} { ...v } />
    ));
    return (
      <ul
        style={{backgroundColor: this.state.bgc}}
        onClick={() => this.handleClick()}>
        {children}
      </ul>
    );
  }
}