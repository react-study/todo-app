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
    var todos = _ref.todos,
        editing = _ref.editing,
        handleEditTodo = _ref.handleEditTodo,
        handleSaveTodo = _ref.handleSaveTodo,
        handleCancelEditTodo = _ref.handleCancelEditTodo,
        handleDeleteTodo = _ref.handleDeleteTodo,
        handleToggleAll = _ref.handleToggleAll,
        handleToggleTodo = _ref.handleToggleTodo;

    var todoList = todos.map(function (_ref2, i) {
        var id = _ref2.id,
            text = _ref2.text,
            done = _ref2.done;
        return _react2.default.createElement(_Todo2.default, {
            key: id,
            text: text,
            done: done,
            editing: editing === id,
            onEditTodo: function onEditTodo() {
                return handleEditTodo(id);
            },
            onSaveTodo: function onSaveTodo(text) {
                return handleSaveTodo(id, text);
            },
            onCancelEditTodo: function onCancelEditTodo() {
                return handleCancelEditTodo();
            },
            onDeleteTodo: function onDeleteTodo() {
                return handleDeleteTodo(id);
            },
            onToggleTodo: function onToggleTodo() {
                return handleToggleTodo(id);
            }
        });
    });
    return _react2.default.createElement(
        'div',
        { className: 'todo-app__main' },
        _react2.default.createElement('div', { className: 'toggle-all' + (todos.every(function (v) {
                return v.done;
            }) ? ' checked' : ''),
            onClick: handleToggleAll
        }),
        _react2.default.createElement(
            'ul',
            { className: 'todo-list' },
            todoList
        )
    );
};

exports.default = TodoList;

//# sourceMappingURL=TodoList-compiled.js.map