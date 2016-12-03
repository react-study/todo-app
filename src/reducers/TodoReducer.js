import update from 'immutability-helper';

const initialState = {
    todos: [],
    editing: null
}

const TodoReducerObj = {
    'GET_TODOS': (state, { todos }) => update(state, {
        todos: { $set: todos }
    }),
    'ADD_TODO': (state, { todo }) => update(state, {
        todos: {
            $push: [todo]
        }
    }),
    'EDIT_TODO': (state, { id }) => update(state, {
        editing: {
            $set: id
        }
    }),
    'SAVE_TODO': (state, { id, text }) => update(state, {
        todos: {
            [state.todos.findIndex(v => v.id === id)]: {
                text: {
                    $set: text
                }
            }
        },
        editing: {
            $set: null
        }
    }),
    'SAVE_TODO_RESTORE': (state, { id, text }) => update(state, {
        todos: {
            [state.todos.findIndex(v => v.id === id)]: {
                text: {
                    $set: text
                }
            }
        },
        editing: {
            $set: null
        }
    }),
    'CANCEL_EDIT_TODO': (state) => update(state, {
        editing: {
            $set: null
        }
    }),
    'DELETE_TODO': (state, { id }) => update(state, {
        todos: {
            $splice: [[state.todos.findIndex(v => v.id === id), 1]]
        }
    }),
    'TOGGLE_TODO': (state, { id, done }) => update(state, {
        todos: {
            [state.todos.findIndex(v=> v.id === id)]: {
                done: {
                    $set: done
                }
            }
        }
    }),
    'TOGGLE_TODO_RESTORE': (state, { id, done }) => update(state, {
        todos: {
            [state.todos.findIndex(v=> v.id === id)]: {
                done: {
                    $set: done
                }
            }
        }
    }),
    'TOGGLE_ALL': (state, { todos }) => update(state, {
        todos: {
            $set: todos
        }
    }),
    'TOGGLE_ALL_RESTORE': (state, { todos }) => update(state, {
        todos: {
            $set: todos
        }
    }),
    'DELETE_COMPLETED': (state, { todos }) => update(state, {
        todos: {
            $set: todos
        }
    }),
    'DELETE_COMPLETED_RESTORE': (state, { todos }) => update(state, {
        todos: {
            $set: todos
        }
    })
}

const TodoReducer = (state = initialState, action) =>
    TodoReducerObj[action.type] ? TodoReducerObj[action.type](state, action) : state;

export default TodoReducer;
