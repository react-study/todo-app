import React, { Component } from 'react';

class Header extends Component {
	handleKeyDown(e) {
		const val = this._input.value;
		if(!val || e.keyCode !== 13) return;

		// val && enter key
		this.props.addTodo(val);// App에서 값 받아옴
		this._input.value='';

	}
	render(){
		return (
			<header>
				<h1 className="todo-app__header">todos</h1>
				<input
					className="todo-app__new-todo"
					placeholder="what needs to be done?"
					onKeyDown={ e => this.handleKeyDown(e)}
					ref={ref => { this._input = ref; }}
				/>
			</header>
		);
	}
}

export default Header;