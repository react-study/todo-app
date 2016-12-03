const generateUId = ()=> Date.now();

const initialState = {
    todos: [],
    editing: null
}

const TodoReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'GET_TODOS':
            return {
                todos: action.todos,
                editing: null
            }
        case 'ADD_TODO':
            return Object.assign({}, state, {
                todos: [...state.todos, {
                    id: generateUId(),
                    text: action.text
                }]
            });
        case 'EDIT_TODO':
            return Object.assign({}, state, {
                editing: action.id
            });
        case 'SAVE_TODO':
            const newTodos = [...state.todos];
            const editIndex = newTodos.findIndex(v => v.id === action.id);
            newTodos[editIndex].text = action.newText;
            return Object.assign({}, state, {
                todos: newTodos,
                editing: null
            });
        case 'CANCEL_EDIT_TODO':
            return {
                editing: null
            }

        case 'DELETE_TODO':{
            const newTodos = [...state.todos];
            const deleteIndex = newTodos.findIndex(v => v.id === action.id);
            newTodos.splice(deleteIndex, 1);
            return Object.assign({}, state, {
                todos: newTodos
            })
        }
        case 'TOGGLE_ALL':{
            const newToggleAll = !state.todos.every(v => v.done);
            const newTodos = state.todos.map(v => {
                v.done = newToggleAll;
                return v;
            });
            return Object.assign({}, state, {
                todos: newTodos

            });
        }
        case 'TOGGLE_TODO':{
            const newTodos = [...state.todos];
            const editIndex = newTodos.findIndex(v => v.id === action.id);
            newTodos[editIndex].done = !newTodos[editIndex].done;
            return Object.assign({}, state, {
                todos: newTodos
            })
        }
        case 'DELETE_COMPLETED':
            return Object.assign({}, state, {
                todos: state.todos.filter(v=> !v.done)
            });
        default: return state;
    }
}

export default TodoReducer;