'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _Header = require('../components/Header');

var _Header2 = _interopRequireDefault(_Header);

var _TodoList = require('../components/TodoList');

var _TodoList2 = _interopRequireDefault(_TodoList);

var _Footer = require('../components/Footer');

var _Footer2 = _interopRequireDefault(_Footer);

var _TodoActions = require('../actions/TodoActions');

var _TodoActions2 = _interopRequireDefault(_TodoActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mapStateToProps = function mapStateToProps(state) {
    return {
        todos: state.todos,
        editing: state.editing
    };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        getTodos: function getTodos() {
            return dispatch(_TodoActions2.default.getTodos());
        },
        handleAddTodo: function handleAddTodo(text) {
            return dispatch(_TodoActions2.default.addTodo(text));
        },
        handleEditTodo: function handleEditTodo(id) {
            return dispatch(_TodoActions2.default.editTodo(id));
        },
        handleSaveTodo: function handleSaveTodo(id, newText) {
            return dispatch(_TodoActions2.default.saveTodo(id, newText));
        },
        handleCancelEditTodo: function handleCancelEditTodo() {
            return dispatch(_TodoActions2.default.cancelEditTodo());
        },
        handleDeleteTodo: function handleDeleteTodo(id) {
            return dispatch(_TodoActions2.default.deleteTodo(id));
        },
        handleToggleAll: function handleToggleAll() {
            return dispatch(_TodoActions2.default.toggleAll());
        },
        handleToggleTodo: function handleToggleTodo(id) {
            return dispatch(_TodoActions2.default.toggleTodo(id));
        },
        handleDeleteCompleted: function handleDeleteCompleted() {
            return dispacth(_TodoActions2.default.deleteCompleted());
        }
    };
};

var App = function (_Component) {
    _inherits(App, _Component);

    function App() {
        _classCallCheck(this, App);

        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
    }

    _createClass(App, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            this.props.getTodos();
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                todos = _props.todos,
                editing = _props.editing,
                filter = _props.routeParams.filter,
                _handleAddTodo = _props.handleAddTodo,
                _handleEditTodo = _props.handleEditTodo,
                _handleSaveTodo = _props.handleSaveTodo,
                _handleCancelEditTodo = _props.handleCancelEditTodo,
                _handleDeleteTodo = _props.handleDeleteTodo,
                _handleToggleAll = _props.handleToggleAll,
                _handleToggleTodo = _props.handleToggleTodo,
                _handleDeleteCompleted = _props.handleDeleteCompleted;


            var activeLength = todos.filter(function (v) {
                return !v.done;
            }).length;
            var completedLength = todos.length - activeLength;

            return _react2.default.createElement(
                'div',
                { className: 'todo-app' },
                _react2.default.createElement(_Header2.default, { handleAddTodo: function handleAddTodo(text) {
                        return _handleAddTodo(text);
                    } }),
                _react2.default.createElement(_TodoList2.default, {
                    todos: todos,
                    editing: editing,
                    filter: filter,
                    handleEditTodo: function handleEditTodo(id) {
                        return _handleEditTodo(id);
                    },
                    handleSaveTodo: function handleSaveTodo(id, newText) {
                        return _handleSaveTodo(id, newText);
                    },
                    handleCancelEditTodo: function handleCancelEditTodo() {
                        return _handleCancelEditTodo();
                    },
                    handleDeleteTodo: function handleDeleteTodo(id) {
                        return _handleDeleteTodo(id);
                    },
                    handleToggleAll: function handleToggleAll() {
                        return _handleToggleAll();
                    },
                    handleToggleTodo: function handleToggleTodo(id) {
                        return _handleToggleTodo(id);
                    }
                }),
                _react2.default.createElement(_Footer2.default, {
                    filter: filter,
                    activeLength: activeLength,
                    completedLength: completedLength,
                    handleDeleteCompleted: function handleDeleteCompleted() {
                        return _handleDeleteCompleted();
                    }
                })
            );
        }
    }]);

    return App;
}(_react.Component);

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(App);

exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', '/Users/pmh/study/react/1118/cash/src/containers/App.js');

    __REACT_HOT_LOADER__.register(mapDispatchToProps, 'mapDispatchToProps', '/Users/pmh/study/react/1118/cash/src/containers/App.js');

    __REACT_HOT_LOADER__.register(App, 'App', '/Users/pmh/study/react/1118/cash/src/containers/App.js');

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/pmh/study/react/1118/cash/src/containers/App.js');
}();

;

//# sourceMappingURL=App-compiled.js.map