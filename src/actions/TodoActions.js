import axios from 'axios';

const axiosApi = axios.create({
    baseURL: 'http://localhost:2403/todos',
    timeout: 1000,
    responseType: 'json'
});

const ax = ({
    method = 'post',
    url = '/',
    data,
    res = ()=> {},
    err = err => { console.error(err); }
}) => {
    if(data) return axiosApi[method](url, data).then(res).catch(err);
    return axiosApi[method](url).then(res).catch(err);
};

const axall = ({
    arr,
    res = () => {},
    err = err => { console.error(err); }
}) => axios.all(arr).then(res).catch(err);

const TodoActions = {
    getTodos() {
        return dispatch => ax({
            method: 'get',
            res: ({ data }) => dispatch({
                type: 'GET_TODOS',
                todos: data
            })
        });
    },
    addTodo(text) {
        return dispatch => ax({
            data: { text },
            res: ({ data }) => dispatch({
                type: 'ADD_TODO',
                todo: data
            })
        });
    },
    editTodo(id) {
        return {
            type: 'EDIT_TODO',
            id
        }
    },
    saveTodo(id, prevText, newText) {
        return dispatch => {
            dispatch({
                type: 'SAVE_TODO',
                id,
                text: newText
            });
            return ax({
                method: 'put',
                url: `/${id}`,
                data: { text: newText },
                err: err => dispatch({
                    type: 'SAVE_TODO_RESTORE',
                    id,
                    text: prevText
                })
            });
        }
    },
    cancelEditTodo() {
        return {
            type: 'CANCEL_EDIT_TODO'
        }
    },
    deleteTodo(id) {
        return dispatch => ax({
            method: 'delete',
            url: `/${id}`,
            res: res => dispatch({
                type: 'DELETE_TODO',
                id
            })
        });
    },
    toggleAll(todos) {
        return dispatch => {
            const newToggleAll = !todos.every(v => v.done);
            const newTodos = todos.map(todo =>
                Object.assign({}, todo, { done: newToggleAll })
            );
            dispatch({
                type: 'TOGGLE_ALL',
                todos: newTodos
            });

            const axiosPromises = todos.map(todo =>
                axiosApi.put(todo.id, { done: newToggleAll })
            );
            axall({
                arr: axiosPromises,
                err: err => dispatch({
                    type: 'TOGGLE_ALL_RESTORE',
                    todos
                })
            });
        }
    },
    toggleTodo(id, newDone) {
        return dispatch => {
            dispatch({
                type: 'TOGGLE_TODO',
                id,
                done: newDone
            });

            ax({
                method: 'put',
                url: `/${id}`,
                data: { done: newDone },
                err: err => dispatch({
                    type: 'TOGGLE_TODO_RESTORE',
                    id,
                    done: !newDone
                })
            });
        }
    },
    deleteCompleted(todos) {
        return dispatch => {
            const newTodos = todos.filter(v => !v.done);
            dispatch({
                type: 'DELETE_COMPLETED',
                todos: newTodos
            });

            const axiosPromises = todos.filter(v => v.done).map(todo =>
                axiosApi.delete(todo.id)
            );
            axall({
                arr: axiosPromises,
                err: err => dispatch({
                    type: 'DELETE_COMPLETED_RESTORE',
                    todos
                })
            });
        }
    }
}

export default TodoActions;
