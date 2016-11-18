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

var Header = function (_Component) {
    _inherits(Header, _Component);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this));
    }

    _createClass(Header, [{
        key: 'inputHandleClick',
        value: function inputHandleClick() {
            this._input.value = '';
        }
    }, {
        key: 'depositHandleClick',
        value: function depositHandleClick() {
            var val = this._input.value;
            var regNum = /^[0-9]+$/;

            val = Number(val);
            if (!regNum.test(val)) return;
            this.props.handleDeposit(val);
        }
    }, {
        key: 'withdrawHandleClick',
        value: function withdrawHandleClick() {
            var val = this._input.value;
            var regNum = /^[0-9]+$/;

            val = Number(val);
            if (!regNum.test(val)) return;
            this.props.handleWithdraw(val);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'header',
                null,
                _react2.default.createElement('input', {
                    onClick: function onClick() {
                        return _this2.inputHandleClick();
                    },
                    type: 'text',
                    defaultValue: '\uC22B\uC790\uB97C \uC785\uB825\uD558\uC138\uC694',
                    ref: function ref(_ref) {
                        _this2._input = _ref;
                    }
                }),
                _react2.default.createElement(
                    'button',
                    {
                        onClick: function onClick(deposit) {
                            return _this2.depositHandleClick(deposit);
                        }
                    },
                    '\uC785\uAE08'
                ),
                _react2.default.createElement(
                    'button',
                    { onClick: function onClick(withdraw) {
                            return _this2.withdrawHandleClick(withdraw);
                        } },
                    '\uCD9C\uAE08'
                )
            );
        }
    }]);

    return Header;
}(_react.Component);

exports.default = Header;

//# sourceMappingURL=Header-compiled.js.map