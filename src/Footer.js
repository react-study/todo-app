import React from 'react';
import { Link } from 'react-router';
import ClassNames from 'classnames';

const Footer = ({
    filter,
    activeLength,
    completedLength,
    handleSelectFilter,
    handleDeleteCompleted
}) => (
    <div className="footer">
        <span className="todo-count">
            <strong>{activeLength}</strong>{' '}
            <span>{activeLength > 1 ? 'items' : 'item'}</span>
            {' '}left
        </span>
        <ul className="todo-filters">
            <li>
                <Link
                    to="/"
                    className={ClassNames({'selected': !filter})}
                >All</Link>
            </li>
            <li>
                <Link
                    to="/active"
                    className={ClassNames({'selected': filter === 'active'})}
                >Active</Link>
            </li>
            <li>
                <Link
                    to="/completed"
                    className={ClassNames({'selected': filter === 'completed'})}
                >Completed</Link>
            </li>
        </ul>
        <button
            className={ClassNames('todo-delete-completed', {
                hidden: !completedLength
            })}
            onClick={handleDeleteCompleted}
        >
            Delete Completed
        </button>
    </div>
);
export default Footer;
