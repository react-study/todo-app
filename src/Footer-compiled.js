"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var tempLength = 4;

var Footer = function Footer(_ref) {
    var filter = _ref.filter,
        activeLength = _ref.activeLength,
        completedLength = _ref.completedLength,
        handleSelectFilter = _ref.handleSelectFilter,
        handleDeleteCompleted = _ref.handleDeleteCompleted;
    return _react2.default.createElement(
        "div",
        { className: "footer" },
        _react2.default.createElement(
            "span",
            { className: "todo-count" },
            _react2.default.createElement(
                "strong",
                null,
                activeLength
            ),
            ' ',
            _react2.default.createElement(
                "span",
                null,
                activeLength > 1 ? 'item' : 'item'
            ),
            ' ',
            "left"
        ),
        _react2.default.createElement(
            "ul",
            { className: "todo-filters" },
            _react2.default.createElement(
                "li",
                null,
                _react2.default.createElement(
                    "a",
                    { onClick: function onClick() {
                            return handleSelectFilter('All');
                        },
                        className: filter === 'All' ? 'selected' : ''
                    },
                    "All"
                )
            ),
            _react2.default.createElement(
                "li",
                null,
                _react2.default.createElement(
                    "a",
                    { onClick: function onClick() {
                            return handleSelectFilter('Active');
                        },
                        className: filter === 'Active' ? 'selected' : ''
                    },
                    "Active"
                )
            ),
            _react2.default.createElement(
                "li",
                null,
                _react2.default.createElement(
                    "a",
                    { onClick: function onClick() {
                            return handleSelectFilter('Completed');
                        },
                        className: filter === 'Completed' ? 'selected' : ''
                    },
                    "Completed"
                )
            )
        ),
        _react2.default.createElement(
            "button",
            {
                className: "todo-delete-completed" + (!completedLength ? ' hidden' : ''),
                onClick: handleDeleteCompleted
            },
            "Delete Completed"
        )
    );
};

exports.default = Footer;

//# sourceMappingURL=Footer-compiled.js.map