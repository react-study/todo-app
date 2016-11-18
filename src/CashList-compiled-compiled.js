'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Cash = require('./Cash');

var _Cash2 = _interopRequireDefault(_Cash);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var CashList = function CashList(_ref) {
    var cashs = _ref.cashs;

    var cashList = cashs.map(function (cash, i) {
        return _react2.default.createElement(_Cash2.default, {
            key: 'cash#' + i,
            deposit: cash.deposit,
            withdraw: cash.withdraw,
            balance: cash.balance
        });
    });
    return _react2.default.createElement('div', { className: 'cash__book' }, _react2.default.createElement('div', { className: 'title__bar' }, _react2.default.createElement('span', null, '\uC785\uAE08'), _react2.default.createElement('span', null, '\uCD9C\uAE08'), _react2.default.createElement('span', null, '\uC794\uC561')), _react2.default.createElement('ul', null, cashList));
};

exports.default = CashList;

//# sourceMappingURL=CashList-compiled.js.map

//# sourceMappingURL=CashList-compiled-compiled.js.map