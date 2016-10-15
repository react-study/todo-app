import React, { Component } from 'react';
import Child from './Child';

export default class Parent extends Component {
    static propTypes = {
        name : React.PropTypes.string.isRequired
    };

    static defaultProps = {
        people: [{
            name:  'gomugom',
            phone: '010-1111-2222',
            show:  false
        }, {
            name:  'iu',
            phone: '010-2222-3333',
            show:  false
        }, {
            name:  'akmu',
            phone: '010-1133-3245',
            show:  false
        }]
    };

    constructor(props) {
        super(props);

        const { people } = this.props;

        this.state = {
            people
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
        const { people } = this.state;

        const peoples = people.map((p, i) =>
            <Child
                key={ 'Child' + i }
                handleClick={() => this.handleClick(i)}
                { ...p }
            />);

        return (
            <ul>
                {peoples}
            </ul>
        );
    }
};