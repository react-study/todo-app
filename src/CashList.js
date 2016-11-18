import React, { Component } from 'react';
import Cash from './Cash';

const CashList = ({
    cashs
}) => {
    const cashList = cashs.map((cash, i) => (
        <Cash
            key={`cash#${i}`}
            deposit={cash.deposit}
            withdraw={cash.withdraw}
            balance={cash.balance}
        />
    ));
    return (
        <div className="cash__book">
            <div className="title__bar">
                <span>입금</span>
                <span>출금</span>
                <span>잔액</span>
            </div>
            <ul>
                {cashList}
            </ul>
        </div>
    );
}

export default CashList;