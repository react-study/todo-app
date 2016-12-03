import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from '../components/Header';
import TodoList from '../components/TodoList';
import Footer from '../components/Footer';

import TodoActions from '../actions/TodoActions';

const mapStateToProps = state => ({
    todos: state.todos,
    editing: state.editing
});
const mapDispatchToProps = dispatch => ({
    getTodos: ()=> dispatch(TodoActions.getTodos()),
    handleAddTodo: text => dispatch(TodoActions.addTodo(text)),
    handleEditTodo: id => dispatch(TodoActions.editTodo(id)),
    handleSaveTodo: (id, newText) => dispatch(TodoActions.saveTodo(id, newText)),
    handleCancelEditTodo: ()=> dispatch(TodoActions.cancelEditTodo()),
    handleDeleteTodo: id => dispatch(TodoActions.deleteTodo(id)),
    handleToggleAll: ()=> dispatch(TodoActions.toggleAll()),
    handleToggleTodo: id => dispatch(TodoActions.toggleTodo(id)),
    handleDeleteCompleted: ()=> dispacth(TodoActions.deleteCompleted())
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
            handleDeleteCompleted,
        } = this.props;

        const activeLength = todos.filter(v=> !v.done).length;
        const completedLength = todos.length - activeLength;

        return (
            <div className="todo-app">
                <Header handleAddTodo = {(text)=> handleAddTodo(text)} />
                <TodoList
                    todos={todos}
                    editing={editing}
                    filter={filter}
                    handleEditTodo = {id=> handleEditTodo(id)}
                    handleSaveTodo = {(id, newText)=> handleSaveTodo(id, newText)}
                    handleCancelEditTodo = {()=> handleCancelEditTodo()}
                    handleDeleteTodo = {id=> handleDeleteTodo(id)}
                    handleToggleAll={()=> handleToggleAll()}
                    handleToggleTodo={id=> handleToggleTodo(id)}
                />
                <Footer
                    filter = {filter}
                    activeLength = {activeLength}
                    completedLength = {completedLength}
                    handleDeleteCompleted = {()=> handleDeleteCompleted()}
                />
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
