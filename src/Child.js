import React, { Component } from 'react'

export default class Child extends Component {
	
	static propTypes = {
		gender : React.PropTypes.string,
		name : React.PropTypes.string,
		phone : React.PropTypes.string,
		show : React.PropTypes.bool.isRequired
	}
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
