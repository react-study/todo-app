// bankReducer.js

const initialState = { accountList: [], total: 0 };

const bankReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SAVE_MONEY': {
            action.money = action.money * 1;
            const total = state.total + action.money;

            return {
                accountList: [...state.accountList, {
                    type: 'save',
                    money: action.money,
                    result: total
                }],
                total
            }
        }
        case 'WITHDRAW_MONEY': {
            action.money = action.money * 1;
            const total = state.total - action.money

            return {
                accountList: [...state.accountList, {
                    type: 'withdraw',
                    money: action.money,
                    result: total
                }],
                total: total
            }
        }
        case 'SHOW_EFFECT': return Object.assign({}, state, {
            effect: true
        });
        case 'HIDE_EFFECT': return Object.assign({}, state, {
            effect: false
        });
        default: return state;
    }
}

export default bankReducer;
