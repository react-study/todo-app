'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Todo = function (_Component) {
    _inherits(Todo, _Component);

    function Todo() {
        _classCallCheck(this, Todo);

        return _possibleConstructorReturn(this, (Todo.__proto__ || Object.getPrototypeOf(Todo)).apply(this, arguments));
    }

    _createClass(Todo, [{
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            if (this.props.editing) {
                this._textInput.focus();
            }
        }
    }, {
        key: 'onFocus',
        value: function onFocus(e) {
            this._textInput.value = this.props.text;
        }
    }, {
        key: 'onKeyDown',
        value: function onKeyDown(e) {
            var text = this._textInput.value;
            if (!text || e.keyCode !== 13) return;
            this.props.onSaveTodo(text);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                text = _props.text,
                done = _props.done,
                editing = _props.editing,
                onEditTodo = _props.onEditTodo,
                onSaveTodo = _props.onSaveTodo,
                onCancelEditTodo = _props.onCancelEditTodo,
                onDeleteTodo = _props.onDeleteTodo,
                onToggleTodo = _props.onToggleTodo;

            return _react2.default.createElement(
                'li',
                { className: 'todo-item' + (editing ? ' editing' : '') + (done ? ' completed' : '') },
                _react2.default.createElement('div', {
                    className: 'toggle',
                    onClick: onToggleTodo
                }),
                _react2.default.createElement(
                    'div',
                    { className: 'todo-item__view' },
                    _react2.default.createElement(
                        'div',
                        { className: 'todo-item__view__text', onDoubleClick: onEditTodo },
                        text
                    ),
                    _react2.default.createElement('button', {
                        className: 'todo-item__destroy',
                        onClick: onDeleteTodo
                    })
                ),
                _react2.default.createElement('input', {
                    className: 'todo-item__edit',
                    type: 'text',
                    ref: function ref(_ref) {
                        _this2._textInput = _ref;
                    },
                    onFocus: function onFocus(e) {
                        return _this2.onFocus(e);
                    },
                    onBlur: onCancelEditTodo,
                    onKeyDown: function onKeyDown(e) {
                        return _this2.onKeyDown(e);
                    }
                })
            );
        }
    }]);

    return Todo;
}(_react.Component);

exports.default = Todo;

//# sourceMappingURL=Todo-compiled.js.map