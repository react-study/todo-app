import React, { Component } from 'react';

class UserInput extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <userInput>
                <h1 className="todo-app__header">더하기,빼기</h1>
                <input
                    className="todo-app__new-todo"
                    placeholder="금액을 입력하세요"
                />
				<div className="btn_wrap">
					<a href="#none" onClick={handleIndraw} className="btn in">입금</a>
					<a href="#none" onClick={handleOutdraw} className="btn out">출금</a>
				</div>
			</userInput>
        )
    }
}

export default UserInput;
