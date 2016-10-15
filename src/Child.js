import React, { Component } from 'react';

export default class Child extends Component {
    constructor() {
        super();

        this.state = {
            isToggle: false
        };

        //this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            isToggle: !this.state.isToggle
        });
    }

    render() {
        const { name, phone, show , handleClick } = this.props;

        return (
            <li onClick={handleClick} style={{cursor: 'pointer'}}>
                <p>name: {name}</p>
                <p style={{display: show ? 'inline' : 'none'}}>
                    {phone}
                </p>
            </li>
        );
    }
};