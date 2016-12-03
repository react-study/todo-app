import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from '../components/Header';
import TodoList from '../components/TodoList';
import Footer from '../components/Footer';

import TodoActions from '../actions/TodoActions';

const mapStateToProps = state => ({
    todos : state.todos,
    editing: state.editing
});
const mapDispatchToProps = dispatch => ({
    getTodos              : ()=> dispatch(TodoActions.getTodos()),
    handleAddTodo         : text => dispatch(TodoActions.addTodo(text)),
    handleEditTodo        : id => dispatch(TodoActions.editTodo(id)),
    handleSaveTodo        : (id, prevText, newText) => dispatch(TodoActions.saveTodo(id, prevText, newText)),
    handleCancelEditTodo  : ()=> dispatch(TodoActions.cancelEditTodo()),
    handleDeleteTodo      : id => dispatch(TodoActions.deleteTodo(id)),
    handleToggleAll       : todos => dispatch(TodoActions.toggleAll(todos)),
    handleToggleTodo      : (id, newDone) => dispatch(TodoActions.toggleTodo(id, newDone)),
    handleDeleteCompleted : todos => dispatch(TodoActions.deleteCompleted(todos))
});

class App extends Component {
    componentWillMount() {
        this.props.getTodos();
    }

    render() {
        const {
            todos,
            editing,
            routeParams: {filter},
            handleAddTodo,
            handleEditTodo,
            handleSaveTodo,
            handleCancelEditTodo,
            handleDeleteTodo,
            handleToggleAll,
            handleToggleTodo,
            handleDeleteCompleted
        } = this.props;
        const activeLength = todos.filter(v=> !v.done).length;
        const completedLength = todos.length - activeLength;

        return (
            <div className="todo-app">
                <Header handleAddTodo = {handleAddTodo} />
                <TodoList
                    todos={todos}
                    editing={editing}
                    filter={filter}
                    handleEditTodo = {handleEditTodo}
                    handleSaveTodo = {handleSaveTodo}
                    handleCancelEditTodo = {handleCancelEditTodo}
                    handleDeleteTodo = {handleDeleteTodo}
                    handleToggleAll={handleToggleAll}
                    handleToggleTodo={handleToggleTodo}
                />
                <Footer
                    filter = {filter}
                    activeLength = {activeLength}
                    completedLength = {completedLength}
                    handleDeleteCompleted = {()=>handleDeleteCompleted(todos)}
                />
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
