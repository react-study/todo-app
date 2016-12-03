'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
// handleAddTodo,
// handleEditTodo,
//     handleSaveTodo,
//     handleCancelEditTodo,
//     handleDeleteTodo,
//     handleToggleAll,
//     handleToggleTodo,
//     handleDeleteCompleted

var initialTodos = [{ id: 1000, text: '치킨에 맥주 한 잔' }, { id: 1001, text: '삼겹살에 소주 한 잔' }, { id: 1002, text: '리코타샐러드에 봉골레 파스타' }, { id: 1003, text: '떡순튀' }];

var TodoActions = {
    getTodos: function getTodos() {
        return {
            type: 'GET_TODOS',
            todos: initialTodos
        };
    },
    addTodo: function addTodo(text) {
        return {
            type: 'ADD_TODO',
            text: text
        };
    },
    editTodo: function editTodo(id) {
        return {
            type: 'EDIT_TODO',
            id: id
        };
    },
    saveTodo: function saveTodo(id, newText) {
        return {
            type: 'SAVE_TODO',
            id: id,
            newText: newText
        };
    },
    cancelEditTodo: function cancelEditTodo() {
        return {
            type: 'CANCEL_EDIT_TODO'
        };
    },
    deleteTodo: function deleteTodo(id) {
        return {
            type: 'DELETE_TODO',
            id: id
        };
    },
    toggleAll: function toggleAll() {
        return {
            type: 'TOGGLE_ALL'
        };
    },
    toggleTodo: function toggleTodo(id) {
        return {
            type: 'TOGGLE_TODO',
            id: id
        };
    },
    deleteCompleted: function deleteCompleted() {
        return {
            type: 'DELETE_COMPLETED'
        };
    }
};

var _default = TodoActions;
exports.default = _default;

// handleDeleteCompleted() {
//     const newTodos = this.state.todos.filter(v=> !v.done);
//     this.setState({ todos: newTodos });
// }
// handleAddTodo(text) {
//     this.setState({
//         todos: [ ...this.state.todos, {
//             id: generateUId(),
//             text
//         }]
//     });
// }
// handleDeleteTodo(id) {
//     const newTodos = [...this.state.todos];
//     const deleteIndex = newTodos.findIndex(v => v.id === id);
//     newTodos.splice(deleteIndex, 1);
//     this.setState({ todos: newTodos });
// }
// handleEditTodo(id) {
//     this.setState({
//         editing: id
//     });
// }
// handleSaveTodo(id, newText) {
//     const newTodos = [...this.state.todos];
//     const editIndex = newTodos.findIndex(v => v.id === id);
//     newTodos[editIndex].text = newText;
//     this.setState({
//         todos: newTodos,
//         editing: null
//     });
// }
// handleCancelEditTodo() {
//     this.setState({
//         editing: null
//     });
// }
// handleToggleAll() {
//     const newToggleAll = !this.state.todos.every(v => v.done);
//     const newTodos = this.state.todos.map(v => {
//         v.done = newToggleAll;
//         return v;
//     });
//     this.setState({
//         todos: newTodos
//     });
// }
// handleToggleTodo(id) {
//     const newTodos = [...this.state.todos];
//     const editIndex = newTodos.findIndex(v => v.id === id);
//     newTodos[editIndex].done = !newTodos[editIndex].done;
//     this.setState({
//         todos: newTodos
//     });
// }

;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(initialTodos, 'initialTodos', '/Users/pmh/study/react/1118/cash/src/actions/TodoActions.js');

    __REACT_HOT_LOADER__.register(TodoActions, 'TodoActions', '/Users/pmh/study/react/1118/cash/src/actions/TodoActions.js');

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/pmh/study/react/1118/cash/src/actions/TodoActions.js');
}();

;

//# sourceMappingURL=TodoActions-compiled.js.map