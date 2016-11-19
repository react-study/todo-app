// bankActions.js

export const save = money => {
    return {
        type: 'SAVE_MONEY',
        money: money
    }
};

export const withdraw = money => {
    return {
        type: 'WITHDRAW_MONEY',
        money: money
    }
};
