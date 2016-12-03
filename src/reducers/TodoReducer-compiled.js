'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var generateUId = function generateUId() {
    return Date.now();
};

var initialState = {
    todos: [],
    editing: null
};

var TodoReducer = function TodoReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];

    switch (action.type) {
        case 'GET_TODOS':
            return {
                todos: action.todos,
                editing: null
            };
        case 'ADD_TODO':
            return Object.assign({}, state, {
                todos: [].concat(_toConsumableArray(state.todos), [{
                    id: generateUId(),
                    text: action.text
                }])
            });
        case 'EDIT_TODO':
            return Object.assign({}, state, {
                editing: action.id
            });
        case 'SAVE_TODO':
            var newTodos = [].concat(_toConsumableArray(state.todos));
            var editIndex = newTodos.findIndex(function (v) {
                return v.id === action.id;
            });
            newTodos[editIndex].text = action.newText;
            return Object.assign({}, state, {
                todos: newTodos,
                editing: null
            });
        case 'CANCEL_EDIT_TODO':
            return {
                editing: null
            };

        case 'DELETE_TODO':
            {
                var _newTodos = [].concat(_toConsumableArray(state.todos));
                var deleteIndex = _newTodos.findIndex(function (v) {
                    return v.id === action.id;
                });
                _newTodos.splice(deleteIndex, 1);
                return Object.assign({}, state, {
                    todos: _newTodos
                });
            }
        case 'TOGGLE_ALL':
            {
                var _ret = function () {
                    var newToggleAll = !state.todos.every(function (v) {
                        return v.done;
                    });
                    var newTodos = state.todos.map(function (v) {
                        v.done = newToggleAll;
                        return v;
                    });
                    return {
                        v: Object.assign({}, state, {
                            todos: newTodos

                        })
                    };
                }();

                if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
            }
        case 'TOGGLE_TODO':
            {
                var _newTodos2 = [].concat(_toConsumableArray(state.todos));
                var _editIndex = _newTodos2.findIndex(function (v) {
                    return v.id === action.id;
                });
                _newTodos2[_editIndex].done = !_newTodos2[_editIndex].done;
                return Object.assign({}, state, {
                    todos: _newTodos2
                });
            }
        case 'DELETE_COMPLETED':
            return Object.assign({}, state, {
                todos: state.todos.filter(function (v) {
                    return !v.done;
                })
            });
        default:
            return state;
    }
};

var _default = TodoReducer;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(generateUId, 'generateUId', '/Users/pmh/study/react/1118/cash/src/reducers/TodoReducer.js');

    __REACT_HOT_LOADER__.register(initialState, 'initialState', '/Users/pmh/study/react/1118/cash/src/reducers/TodoReducer.js');

    __REACT_HOT_LOADER__.register(TodoReducer, 'TodoReducer', '/Users/pmh/study/react/1118/cash/src/reducers/TodoReducer.js');

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/pmh/study/react/1118/cash/src/reducers/TodoReducer.js');
}();

;

//# sourceMappingURL=TodoReducer-compiled.js.map