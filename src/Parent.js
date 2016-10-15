import React, { Component } from 'react';
import Child from './Child';

const data = [
    {name: 'jaenam', phone: '010-0000-1111', show:false},
    {name: 'minho', show:false},
    {name: 'taesan', phone: '010-2222-3333'}
];

class Parent extends Component {
    static defaultProps = {
        a: 1,
        b: 'a'
    };
    static propTypes = {
        a: React.PropTypes.number,
        b: React.PropTypes.string
    }

    constructor(){
        super();
        this.state = {
            backgroundColor: '#ff0'
        }
    }
    handleClick(){
        this.setState({
            bgc: this.state.bgc === '#ff0' ? '#0ff' : '#ff0'
        })
    }
    render(){
        const children = data.map(({ name, ...v},i) => (
            <Child
                key = {i}
                name = {`${name}#${i}`}
                { ...v }
            />
        ));

        return (
            <ul style={{backgroundColor:this.state.bgc}}
                onClick={ ()=> this.handleClick() }
            >
                {children}
            </ul>
        )
    }
}

export default Parent;