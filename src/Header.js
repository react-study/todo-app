import React, { Component } from 'react';

class Header extends Component {
    constructor() {
        super();
    }
    handleKeyDown(e) {
        const val = this._input.value;
        if (!val || e.keyCode !== 13) return;
        this.props.handleAddTodo(val);
        this._input.value = '';
    }
    render() {
        return (
            <header>
                <h1 className="todo-app__header">todos</h1>
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
