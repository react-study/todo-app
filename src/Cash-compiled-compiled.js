"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var Cash = function Cash(_ref) {
    var deposit = _ref.deposit;
    var withdraw = _ref.withdraw;
    var balance = _ref.balance;

    return _react2.default.createElement("li", { className: "cashList" }, _react2.default.createElement("span", null, deposit), _react2.default.createElement("span", null, withdraw), _react2.default.createElement("span", null, balance));
};

exports.default = Cash;

//# sourceMappingURL=Cash-compiled.js.map

//# sourceMappingURL=Cash-compiled-compiled.js.map