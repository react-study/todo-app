import React, {Component} from 'react';

class ComponentTest extends Component{
	
	constructor(){
		super();
		this.state = {toggleColor: false}
	}
	componentWillMount(){
		console.log('1. 컴포넌트가 마운트될 예정입니다.');
	}
	componentDidMount(){
		console.log('2. 컴포넌트가 마운트되었습니다.');
	}
	componentWillReciveProps(nextProps){
		console.log('3. 컴포넌트가 새로운 props를 받을 예정입니다 : ', nextProps);
	}
	shouldComponentUpdate(){
		console.log('4. 컴포넌트를 업데이트 해야할지 말지를 판단합니다 : ', nextProps, nextState);
		const shouldUpdate = confirm('업데이트 할까요?');
		return !!shouldUpdate;
	}
	componentWillUpdate(nextProps, nextState){
		console.log('5. 컴포넌트가 업데이트될 예정입니다 : ', nextProps, nextState);
	}
	componentDidUpdate(prevProps, prevState){
		console.log('6. 컴포넌트가 업데이트되었습니다 : ', prevProps, prevState);
	}
	componentWillUnmount(){
		console.log('7. 컴포넌트가 언마운트될 예정입니다.');
	}
	bgToggle(){
		this.setState({
			toggleColor: !this.state.toggleColor
		});
	}
	render(){
		const toggleColor = this.state.toggleColor;
		const children = this.props.list.map((v,i) => (
			<li key= {i}>
				{v}
			</li>
		));
		return(
			<div>
				<ul style={{
					backgroundColor: toggleColor ? '#acf' : '#fca'
				}}>
					{children}
				</ul>
				<button onClick={()=> this.bgToggle()}>
					색상변경
				</button>
			</div>
		)
	}
}

export default ComponentTest;