import React, {Component} from 'react';
import Child from './Child';

const Parent = class extends Component {
	constructor(props) {
		super(props);
		this.state = {
			people: [{
				name: 'bang',
				phone: '010-000-0000',
				show: true
			},{
				name: 'aaa',
				phone: '010-000-0000',
				show: false
			},
			{
				name: 'bbb',
				phone: '010-000-0000',
				show: false
			},
			{
				name: 'ccc',
				phone: '010-000-0000',
				show: false
			}]
		};
	}

	handleClick(i) {
    //console.log(this.state);

	const newPeople = this.state.people;
		newPeople[i].show = !newPeople[i].show;
		this.setState({
			people: newPeople
		});
	}

  render() {

  	console.log('init');

    const people = this.state.people;
    const children = people.map((v,i) => (
    	<Child
    		name		= {v.name}
    		phone 		= {v.phone}
    		show 		= {v.show}
    		handleClick = {()=> this.handleClick(i)}
    	/>
    ));
    return (
      <ul>
      	{children}
      </ul>
    );
   }

////const Parent = React.createClass({
	//render() {
    ////render: function() {
    //     return  (
    //         <div>
    //             <h1>부모입니다.1</h1>
    //             <Child className="abc" />
    //         </div>
    //     );
    // }
};

export default Parent;