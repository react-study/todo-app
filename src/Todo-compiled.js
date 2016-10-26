"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Todo = function Todo(_ref) {
    var text = _ref.text,
        done = _ref.done,
        handleDeleteTodo = _ref.handleDeleteTodo;

    return _react2.default.createElement(
        "li",
        { className: "todo-item" },
        _react2.default.createElement("div", { className: "toggle" }),
        _react2.default.createElement(
            "div",
            { className: "todo-item__view" },
            _react2.default.createElement(
                "div",
                { className: "todo-item__view__text" },
                text
            ),
            _react2.default.createElement("button", {
                className: "todo-item__destroy",
                onClick: handleDeleteTodo
            })
        ),
        _react2.default.createElement("input", {
            className: "todo-item__edit",
            type: "text"
        })
    );
};

exports.default = Todo;

//# sourceMappingURL=Todo-compiled.js.map