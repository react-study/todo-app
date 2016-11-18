'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

var _CashList = require('./CashList');

var _CashList2 = _interopRequireDefault(_CashList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
    _inherits(App, _Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this.state = {
            cashs: [{ deposit: 0, withdraw: 0, balance: 0 }]
        };
        return _this;
    }

    _createClass(App, [{
        key: 'handleDeposit',
        value: function handleDeposit(deposit) {
            var newCashs = [].concat(_toConsumableArray(this.state.cashs));
            var lastIndex = newCashs.length;
            this.setState({
                cashs: [].concat(_toConsumableArray(this.state.cashs), [{
                    deposit: deposit,
                    withdraw: 0,
                    balance: newCashs[lastIndex - 1].balance + deposit
                }])
            });
        }
    }, {
        key: 'handleWithdraw',
        value: function handleWithdraw(withdraw) {
            var newCashs = [].concat(_toConsumableArray(this.state.cashs));
            var lastIndex = newCashs.length;
            this.setState({
                cashs: [].concat(_toConsumableArray(this.state.cashs), [{
                    deposit: 0,
                    withdraw: withdraw,
                    balance: newCashs[lastIndex - 1].balance - withdraw
                }])
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var cashs = this.state.cashs;

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_Header2.default, {
                    handleDeposit: function handleDeposit(deposit) {
                        return _this2.handleDeposit(deposit);
                    },
                    handleWithdraw: function handleWithdraw(withdraw) {
                        return _this2.handleWithdraw(withdraw);
                    }
                }),
                _react2.default.createElement(_CashList2.default, {
                    cashs: cashs
                })
            );
        }
    }]);

    return App;
}(_react.Component);

exports.default = App;

//# sourceMappingURL=App-compiled.js.map