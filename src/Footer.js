import React, { Component } from 'react';

class Header extends Component {
    render(){
        return (
            <header>
                <h1 className = "todo-app__header">todos</h1>
                <input 
                    className = "todo-app__new-todo"
                    placeholder = "what needs to be done>"
                />
            </header>
        );
    }
}

export default Header;