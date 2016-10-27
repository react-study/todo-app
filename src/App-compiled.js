'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

var _TodoList = require('./TodoList');

var _TodoList2 = _interopRequireDefault(_TodoList);

var _Footer = require('./Footer');

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var generateUId = function generateUId() {
    return Date.now();
};

var App = function (_Component) {
    _inherits(App, _Component);

    function App() {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

        _this.state = {
            todos: [{ id: 1000, text: '치킨에 맥주 한 잔' }, { id: 1001, text: '삼겹살에 소주 한 잔' }, { id: 1002, text: '리코타샐러드에 봉골레 파스타' }, { id: 1003, text: '떡순튀' }],
            editing: null
        };
        return _this;
    }

    _createClass(App, [{
        key: 'handleAddTodo',
        value: function handleAddTodo(text) {
            this.setState({
                todos: [].concat(_toConsumableArray(this.state.todos), [{
                    id: generateUId(),
                    text: text
                }])
            });
        }
    }, {
        key: 'handleDeleteTodo',
        value: function handleDeleteTodo(todo) {
            var newTodos = [].concat(_toConsumableArray(this.state.todos));
            var deleteIndex = newTodos.findIndex(function (v) {
                return v.id === todo.id;
            });
            newTodos.splice(deleteIndex, 1);
            this.setState({ todos: newTodos });
        }
    }, {
        key: 'handleEditTodo',
        value: function handleEditTodo(id) {
            this.setState({
                editing: id
            });
        }
    }, {
        key: 'handleSaveTodo',
        value: function handleSaveTodo(id, newText) {
            var newTodos = [].concat(_toConsumableArray(this.state.todos));
            var editIndex = newTodos.findIndex(function (v) {
                return v.id === id;
            });
            newTodos[editIndex].text = newText;
            this.setState({
                todos: newTodos,
                editing: null
            });
        }
    }, {
        key: 'handleCancelEditTodo',
        value: function handleCancelEditTodo() {
            this.setState({
                editing: null
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _state = this.state,
                todos = _state.todos,
                editing = _state.editing;

            return _react2.default.createElement(
                'div',
                { className: 'todo-app' },
                _react2.default.createElement(_Header2.default, { handleAddTodo: function handleAddTodo(text) {
                        return _this2.handleAddTodo(text);
                    } }),
                _react2.default.createElement(_TodoList2.default, {
                    todos: todos,
                    editing: editing,
                    handleEditTodo: function handleEditTodo(id) {
                        return _this2.handleEditTodo(id);
                    },
                    handleSaveTodo: function handleSaveTodo(id, newText) {
                        return _this2.handleSaveTodo(id, newText);
                    },
                    handleCancelEditTodo: function handleCancelEditTodo() {
                        return _this2.handleCancelEditTodo();
                    },
                    handleDeleteTodo: function handleDeleteTodo(id) {
                        return _this2.handleDeleteTodo(id);
                    }
                })
            );
        }
    }]);

    return App;
}(_react.Component);

exports.default = App;

//# sourceMappingURL=App-compiled.js.map