import React, {Component} from 'react';
import Child from './Child';

const data = [
    { gender : 'male', name : 'jaenam', phone : '010-000-1111', show : false },
    { gender : 'male', name : 'jaenam2', phone : '010-000-1111', show : false },
    { gender : 'female', name : 'jaenam3', phone : '010-000-1111', show : false }
];

class Parent extends Component {
    static defaultProps = {
        a : 1,
        b : 2,
    };
    
    static propTypes = {
        a : React.PropTypes.number,
        b : React.PropTypes.string
    }

    constructor(){
        super();
        this.state = {
            bgc : '#ff0'
        }
    }

    handleClick(){
        this.setState({
           bgc: this.state.bgc === '#ff0 ' ? '#0ff' : '#ff0'
        });
    }

    render(){
        const children = data.map( ({name, ...v}, i) => (
            <Child
                key = {Date.now + i}
                name = {v.name}
                {...v}
            />
        ));

        return (
            <ul style = {{backgroundColor : this.state.bgc}}
                onclick = { () => this.handleClick()}
            > 
                {children}
            </ul>
        )            
    }
}

export default Parent;