// TodoReducer.js

const generateUId = ()=> Date.now();

const initialState = {
    todos: [],
    editing: null
}

const TodoReducerObj = {
    'GET_TODOS': (state, { todos }) => ({
        todos: todos,
        editing: null
    }),
    'ADD_TODO': (state, { text }) => Object.assign({}, state, {
        todos: [ ...state.todos, {
            id: generateUId(),
            text: text
        }]
    }),
    'EDIT_TODO': (state, { id }) => Object.assign({}, state, {
        editing: id
    }),
    'SAVE_TODO': (state, { id, newText }) => {
        const newTodos = [...state.todos];
        const editIndex = newTodos.findIndex(v => v.id === id);
        newTodos[editIndex].text = newText;
        return Object.assign({}, state, {
            todos: newTodos,
            editing: null
        });
    },
    'CANCEL_EDIT_TODO': (state) => Object.assign({}, state, {
        editing: null
    }),
    'DELETE_TODO': (state, { id }) => {
        const newTodos = [...state.todos];
        const deleteIndex = newTodos.findIndex(v => v.id === id);
        newTodos.splice(deleteIndex, 1);
        return Object.assign({}, state, {
            todos: newTodos
        });
    },
    'TOGGLE_ALL': (state) => {
        const newToggleAll = !state.todos.every(v => v.done);
        const newTodos = state.todos.map(v=> {
            v.done = newToggleAll;
            return v;
        });
        return Object.assign({}, state, {
            todos: newTodos
        });
    },
    'TOGGLE_TODO': (state, { id, done }) => {
        const newTodos = [...state.todos];
        const editIndex = newTodos.findIndex(v => v.id === id);
        newTodos[editIndex] = Object.assign({}, newTodos[editIndex], {
            done
        });
        return Object.assign({}, state, {
            todos: newTodos
        });
    },
    'DELETE_COMPLETED': (state) => Object.assign({}, state, {
        todos: state.todos.filter(v=> !v.done)
    })
}

const TodoReducer = (state = initialState, action) =>
    TodoReducerObj[action.type] ? TodoReducerObj[action.type](state, action) : state;

export default TodoReducer;
