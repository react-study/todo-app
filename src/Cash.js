import React,{ Componet } from 'react';

const Cash = ({
    deposit,
    withdraw,
    balance
}) => {
    return (
        <li className="cashList">
            <span>{deposit}</span>
            <span>{withdraw}</span>
            <span>{balance}</span>
        </li>
    );
}

export default Cash;