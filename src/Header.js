import React, { Component } from 'react';

class Header extends Component {
    constructor() {
        super();
    }
	// input 밸류를 처리하기 위한 함수
    handleKeyDown(e) {
		// 1. input의 value를 할당
		// 2. !val or keycode !13이면 빠져나옴
		// 3. handelAddTodo함수에 인자로 val(새로 입력한 텍스트)을 전달
		// 4. input을 초기화 해줌
        const val = this._input.value;
        if (!val || e.keyCode !== 13) return;
        this.props.handleAddTodo(val);
        this._input.value = '';
    }
    render() {
        return (
            <header>
                <h1 className="todo-app__header">todos</h1>
                // ref 제이쿼리 셀렉터를 대신함.
				<input
                    className="todo-app__new-todo"
                    placeholder="What needs to be done?"
                    ref={ref=> { this._input = ref; }}
                    onKeyDown={(e)=> this.handleKeyDown(e)}
                />
            </header>
        )
    }
}

export default Header;