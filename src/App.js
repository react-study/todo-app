import React, { Component } from 'react';
import UserInput from './UserInput';
import Output from './Output';


class App extends Component {
    constructor() {
        super();
        this.state = {
            userCredit: {total: 1000}
        };
    }
	
	handleIndraw(result){
		const nowState = this.state.userCredit.total;
		// input.value 어떻게 가져오지 ?
		const newResult = nowState + 1000;
		this.setState({
			userCredit:{
				total: newResult
			}
		});
	}
	
	handleOutdraw(result){
		const nowState = this.state.userCredit.total;
		const newResult = nowState - 20;
		this.setState({
			userCredit: {
				total: newResult
			}
		})		
	}

    render() {
        const {
            userCredit
        } = this.state;
        return (
            <div className="todo-app">
				<Output
					handleIndraw = {(result) => this.handleIndraw(result)}
					handleOutdraw = {(result) => this.handleOutdraw(result)}			
					userCredit={userCredit}
				/>
			</div>
        );
    }
}

export default App;
