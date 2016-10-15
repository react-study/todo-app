import React, { Component } from 'react'

class Child extends Component {
    render () {
        const {
            name,
            phone,
            show
        } = this.props;

        return (
            <li>
                {name} : {phone} / {show + ''}
            </li>
        )
    }
}

export default Child;
