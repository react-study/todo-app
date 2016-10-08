import React, {Component} from 'react';
import Child from './Child';

export default class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [
        {
          name: 'exobud',
          phone: '010-1111-2222',
          show: false
        },
        {
          name: 'iu',
          phone: '010-2222-3333',
          show: false
        },
        {
          name: 'akmu',
          phone: '010-1133-3245',
          show: false
        }
      ]
    };
  }

  handleClick(i) {
    const newPeople = this.state.people;
    newPeople[i].show = !newPeople[i].show;
    this.setState({
      people: newPeople
    });
  }

  render() {
    const people = this.state.people;
    const children = people.map((v,i) => (
      <Child
        key={'person #' + i}
        name={v.name}
        phone={v.phone}
        show={v.show}
        handleClick={()=> this.handleClick(i)} />
    ));
    return (
      <ul>
        {children}
      </ul>
    )
  }
}