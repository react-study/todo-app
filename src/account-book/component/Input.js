import React, { Component } from 'react';

export default class Input extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            className = '',
            type = 'text',
            value,
            onChange
        } = this.props;

        return <input className={className} type={type} value={value} onChange={onChange}/>
    }
}