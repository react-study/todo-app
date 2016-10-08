import React, {Component} from 'react';
import Child from './Child';

export default class Parent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            people: [{
            name: 'gomugom',
            phone: '010-1111-2222',
            show: false
            }, {
            name: 'iu',
            phone: '010-2222-3333',
            show: false
            }, {
            name: 'akmu',
            phone: '010-1133-3245',
            show: false
            }]
        };
    }
    handleClick(i) {
        //console.log(this.state);
        const newPeople = this.state.people;
        newPeople[i].show = !newPeople[i].show;
        this.setState({
          people: newPeople
        });
    }
    render() {
        const people = this.state.people;
        return (
        <ul>
            <Child
              name={ people[0].name }
              phone={ people[0].phone }
              show={ people[0].show }
              handleClick={this.handleClick.bind(this, 0)}
            />
            <Child
              name={ people[1].name }
              phone={ people[1].phone }
              show={ people[1].show }
              handleClick={this.handleClick.bind(this, 1)}
            />
            <Child
              name={ people[2].name }
              phone={ people[2].phone }
              show={ people[2].show }
              handleClick={this.handleClick.bind(this, 2)}
            />
        </ul>
        );
    }
}