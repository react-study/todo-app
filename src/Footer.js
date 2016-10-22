import React from 'react';

const tempLength = 4;

const Footer = () => (
    <div className="footer">
        <span className="todo-count">
            <strong>{tempLength}</strong>{' '}
            <span>{tempLength > 1 ? 'items' : 'item'}</span>
            {' '}left
        </span>
        <ul className="todo-filters">
            <li>
                <a>All</a>
            </li>
            <li>
                <a>Active</a>
            </li>
            <li>
                <a>Completed</a>
            </li>
        </ul>
        <button className="todo-delete-completed">
            Delete Completed
        </button>
    </div>
);
export default Footer;
