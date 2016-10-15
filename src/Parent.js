import React, { Component } from 'react';
import Child from './Child';

const data = [
	{ name: 'cho' , phone : '010 -111 -1111', show: false },
	{ name: ' janam' , phone : '010 -111 -2222', show: false },
	{ name: 'taesan' , phone: '010 -111 - 3333', show: false }
];

class Parent extends Component{

	// //stage-2 이하 
	// static defaultProps = {
	// 	a: 1,
	// 	b: 2
	// };

	// static propTypes = {
	// 	a:React.PropTypes.number,
	// 	b:React.Proptypes.string
	// }
	// 초기값 
	constructor(){
		super();
		this.state = {
			backgroundColor : '#ff0'
		};
	}


	handleClick(){
		this.setState({
			backgroundColor: this.state.backgroundColor === '#ff0' ? '#0ff' : '#ff0'
		})
	}


	render(){
		const children = data.map(({name, ...v},i) => (
			
			<Child
			key = {'Child' + i}
			name ={'person' + name}
			{...v}
			/>
			
		));

		return (
			<ul style= {{ 
				backgroundColor: this.state.backgroundColor
			}}
			onClick = { ()=> this.handleClick()}
			>
				{children}
			</ul>
		)
	}
}




export default Parent;