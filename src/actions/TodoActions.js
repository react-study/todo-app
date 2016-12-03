const initialTodos = [
    {id: 1000, text: '치킨에 맥주 한 잔'},
    {id: 1001, text: '삼겹살에 소주 한 잔'},
    {id: 1002, text: '리코타샐러드에 봉골레 파스타'},
    {id: 1003, text: '떡순튀'}
];

const TodoActions = {
    getTodos() {
        return {
            type: 'GET_TODOS',
            todos: initialTodos
        }
    },
    addTodo(text) {
        return {
            type: 'ADD_TODO',
            text
        }
    },
    editTodo(id) {
        return {
            type: 'EDIT_TODO',
            id
        }
    },
    saveTodo(id, newText) {
        return {
            type: 'SAVE_TODO',
            id,
            newText
        }
    },
    cancelEditTodo() {
        return {
            type: 'CANCEL_EDIT_TODO'
        }
    },
    deleteTodo(id) {
        return {
            type: 'DELETE_TODO',
            id
        }
    },
    toggleAll() {
        return {
            type: 'TOGGLE_ALL'
        }
    },
    toggleTodo(id) {
        return {
            type: 'TOGGLE_TODO',
            id
        }
    },
    deleteCompleted() {
        return {
            type: 'DELETE_COMPLETED'
        }
    }
}

export default TodoActions;
