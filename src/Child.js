

import React, {Component} from 'react';
class Child extends Component {
	render(){
		// 해체 할당 
		const { name, phone, show, handleClick} = this.props;
		// const isToggle = this.state.isToggle; 같은 의미 
		return (
				<li onClick={handleClick}>
		        <p>name: {name}</p>
		        <p style={{
		          display: show ? 'inline' : 'none'
		        }}>
		          {phone}
		        </p>
		      </li>

			)
	}
}

export default Child;