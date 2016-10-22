import React, { Component } from 'react';

class Header extends Component {
    handleKeyDown(e) {
        const val = e.target.value;
        if (!val || e.keyCode !== 13) return;

        this.props.addTodo(val);
        this._input.value = '';
    }
    render(){
        return (
            <header>
                <h1 className="todo-app__header">todos</h1>
                <input
                    className="todo-app__new-todo"
                    placeholder="what needs to be doen?"
                    onKeyDown={e => this.handleKeyDown(e)}
                    ref={ref => { this._input = ref; }}
                />
            </header>
        );
    }
}

export default Header;