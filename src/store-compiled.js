'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = require('redux');

var _TodoReducer = require('./reducers/TodoReducer');

var _TodoReducer2 = _interopRequireDefault(_TodoReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = (0, _redux.createStore)(_TodoReducer2.default);

var _default = store;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(store, 'store', '/Users/pmh/study/react/1118/cash/store.js');

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/pmh/study/react/1118/cash/store.js');
}();

;

//# sourceMappingURL=store-compiled.js.map