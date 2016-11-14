import React, { Component } from 'react';

class Todo extends Component {
	// 콤포넌트가 업데이트 되는 시점에 할일
    componentDidUpdate() {
		//속성이editing값이 있다면 해당 input에 포커스를 줌
        if(this.props.editing) { this._textInput.focus(); }
    }
	// 포커스 시점에 할일
    onFocus(e) {
		// input의 밸류는 이(선택된) 속성의 텍스트
        this._textInput.value = this.props.text;
    }
	// 키다운이 일어났을때
    onKeyDown(e) {
		// 1.text에 input 값을 할당
		// 2. keycode 13이벤트가 아니면 빠져나옴
		// 3. 13일 경우엔 onSaveTodo 함수에 text를 인자로 전달 
        const text = this._textInput.value;
        if(!text || e.keyCode !== 13) return;
        this.props.onSaveTodo(text);
    }
    render() {
		// 이속성의 객체들
        const {
            text,
            done,
            editing,
            onEditTodo,
            onSaveTodo,
            onCancelEditTodo,
            onDeleteTodo,
            onToggleTodo
        } = this.props;
        return (
			// 각각의 함수 및 조건부 삼항 연산자가 무얼하는지 파악하는게 좋다. 자세한 설명은 생략
			// onToggleTodo의 경우엔 onToggleTodo 함수를 실행하고 done에 true값을 던진다. 이것의 의미는 ?
            <li className={`todo-item${editing ? ' editing' : ''}${done ? ' completed' : ''}`}>
                <div 
                    className = "toggle"
                    onClick = {onToggleTodo}
                />
                <div className="todo-item__view">
                    <div 
                        className="todo-item__view__text" onDoubleClick={onEditTodo}
                    >
                        {text}
                    </div>
                    <button
                        className="todo-item__destroy"
                        onClick={onDeleteTodo}
                    />
                </div>
                <input
                    className="todo-item__edit"
                    type="text"
                    ref={ref => { this._textInput = ref; }}
                    onFocus={e=> this.onFocus(e)}
                    onBlur={onCancelEditTodo}
                    onKeyDown={e=> this.onKeyDown(e)}
                />
            </li>
        );
    }
}


export default Todo;