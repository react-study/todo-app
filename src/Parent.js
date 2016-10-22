import React, { Component } from 'react';
import Child from './Child';

const data = [
	{ name: 'jaenam', phone: '000-000-0000', show: 'false' },
	{ name: 'teasan', phone: '000-000-0000', show: 'false' },
	{ name: 'sohyun', phone: '000-000-0000', show: 'false' }
];

 class Parent extends Component {
 	static defaultProps = {
 		a: 1,
 		b: 2
 	};

 	static propTypes = {
 		a: React.PropTypes.number,
 		b: React.PropTypes.string
 	};

 	constructor() {
 		super();
 		this.state = {
 			bgc: '#ff0'
 		};
 	}
 	handleClick() {
 		this.setState({
 			bgc: this.stage.bgc === '#ff0' ? '#0ff' : '#ff0'
 		})
 	}
 	render() {
 		const children = data.map((v, i) => (
 			<Child
 				key={ 'Child' + i }
 				name={name}
 				{ ...v }
 			/>
 		));

 		return (
 			<ul style={{
 				backgroundColor: this.state.bgc
 			}}
 				onClick= { ()=> this.handleClick() }
 			>
 				{children}
 			</ul>
 		)
 	}
 }

export default Parent;