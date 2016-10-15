import React, { Component } from 'react'

export default class Child extends Component {

    render () {
        const {
              name
            , phone
            , show
            , handleClick
        } = this.props;

        return(
			<li>

            {name} : {phone} / {show + ''}
			</li>
        );
    }
}
