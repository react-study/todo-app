import React, { Component } from 'react';

const Output = ({
	userCredit,
	handleIndraw,
	handleOutdraw
}) => {
	
	return (
		<output>
			<h1 className="todo-app__header">더하기,빼기</h1>
			<input
				className="todo-app__new-todo"
				placeholder="금액을 입력하세요"
			/>
			<div className="btn_wrap">
				<a 
					href="#none" 
					onClick={handleIndraw} 
					className="btn in"
				>
					입금
				</a>
				<a 
					href="#none" 
					onClick={handleOutdraw}
					className="btn out"
				>
					출금
				</a>
			</div>
			<p className="output">통장 잔고 : {userCredit.total}</p>
		</output>
	)	
}

export default Output;
