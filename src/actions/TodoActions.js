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
    res,
    err = err => { console.error(err); }
}) => {
    if(data) return axiosApi[method](url, data).then(res).catch(err);
    return axiosApi[method](url).then(res).catch(err);
};

const axall = ({
    arr,
    res,
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
                text: data
            })
        });
    },
    editTodo(id) {
        return {
            type: 'EDIT_TODO',
            id
        }
    },
    saveTodo(id, newText) {
        return dispatch => ax({
            method: 'put',
            url: `/${id}`,
            data: { text: newText },
            res: res => dispatch({
                type: 'SAVE_TODO',
                id,
                newText
            })
        });
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
            res: ({ id }) => dispatch({
                type: 'DELETE_TODO',
                id
            })
        });
    },
    toggleAll(todos) {
        return dispatch => {
            const newToggleAll = !todos.every(v => v.done);
            const axiosPromises = todos.map(todo =>
                axiosApi.put(todo.id, { done: newToggleAll })
            );
            axall({
                arr: axiosPromises,
                res: res => {
                    console.log(res);
                    dispatch({
                        type: 'TOGGLE_ALL',
                        todos: res.map(v => v.data)
                    })
                }
            });
        }
    },
    toggleTodo(id, newDone) {
        return dispatch => {
            ax({
                method: 'put',
                url: `/${id}`,
                data: { done: newDone },
                res: res => {
                    dispatch({
                        type: 'TOGGLE_TODO',
                        id,
                        done: newDone
                    })
                }
            });
        }
    },
    deleteCompleted(todos) {
        return dispatch => {
            const axiosPormises = todos.filter(v => v.done).map(todo =>
                axiosApi.delete(todo.id)
            );
            axall({
                arr: axiosPromises,
                res: res => dispatch({
                    type: 'DELETE_COMPLETED'
                })
            });
        }
    }
}

export default TodoActions;
