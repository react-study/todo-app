import React, { Component } from 'react';

export default class Button extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            className = '',
            value = '',
            onClick
        } = this.props;

        return <button className={className} onClick={onClick}>{value}</button>
    }
}