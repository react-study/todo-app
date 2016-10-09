

import React, {Component} from 'react';
import Child from './Child';


class Parent extends Component { 
	constructor(props){
		super(props);
		this.state = {
			people: [{
				name : 'cho',
				phone : '010 - 7777-7777 ',
				show:false
			},{
				name :'kim',
				phone:'010-3333-3333',
				show:false
			},{
				name:'kang',
				phone:'010-3434-3434',
				show:false
			}]
		};
	}

	handleClick(i){
		console.log( this.state);
		const newPeople = this.state.people;
		newPeople[i].show = !newPeople[i].show;
		this.setState({
			people: newPeople
		});
	}

	render(){
		const people = this.state.people;
		const children = people.map( (v,i) =>(
			<Child
				key = { 'person#' +i}
				name = {v.name}
				phone = {v.phone}
				show = {v.show}
				handleClick = {() => this.handleClick(i)}
			/>
		));

		return(
			 <ul>
			 	{children}
			 </ul>
		);
	}

};

export default Parent;