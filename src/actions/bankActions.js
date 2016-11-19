// bankActions.js

const changeEffect = ()=> {
    return dispatch => {
        dispatch({
            type: 'SHOW_EFFECT'
        });
        setTimeout(()=>{
            dispatch({
                type: 'HIDE_EFFECT'
            });
        }, 500);
    }
}

export const save = money => {
    return dispatch => {
        dispatch({
            type: 'SAVE_MONEY',
            money: money
        });
        dispatch(changeEffect());
    }
};

export const withdraw = money => {
    return dispatch => {
        dispatch({
            type: 'WITHDRAW_MONEY',
            money: money
        });
        dispatch(changeEffect());
    }
};
