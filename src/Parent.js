import React, { Component } from 'react';
import Child from './Child';

const data = [
    {name: 'jaenam', phone: '010-0000-1111', show:false},
    {name: 'minho', phone: '010-1111-2222', show:false},
    {name: 'taesan', phone: '010-2222-3333', show:false}
];

class Parent extends Component {
    render(){
        const children = data.map(v => (
            <Child
                name = {v.name}
                phone = {v.phone}
                show = {v.show}
            />
        ));

        return (
            <ul>
                {children}
            </ul>
        )
    }
}

export default Parent;