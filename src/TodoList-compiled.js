'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Todo = require('./Todo');

var _Todo2 = _interopRequireDefault(_Todo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TodoList = function TodoList(_ref) {
    var todos = _ref.todos;
    var _handleDeleteTodo = _ref.handleDeleteTodo;

    var todoList = todos.map(function (todo, i) {
        return _react2.default.createElement(_Todo2.default, {
            key: 'todo#' + i,
            text: todo.text,
            done: todo.done,
            handleDeleteTodo: function handleDeleteTodo() {
                return _handleDeleteTodo(todo);
            }
        });
    });
    return _react2.default.createElement(
        'div',
        { className: 'todo-app__main' },
        _react2.default.createElement('div', { className: 'toggle-all' }),
        _react2.default.createElement(
            'ul',
            { className: 'todo-list' },
            todoList
        )
    );
};

exports.default = TodoList;

//# sourceMappingURL=TodoList-compiled.js.map