import React from 'react';

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
                <a onClick = {()=> handleSelectFilter('All')}
                    className = {filter === 'All' ? 'selected' : ''}
                >All</a>
            </li>
            <li>
                <a onClick = {()=> handleSelectFilter('Active')}
                    className = {filter === 'Active' ? 'selected' : ''}
                >Active</a>
            </li>
            <li>
                <a onClick = {()=> handleSelectFilter('Completed')}
                    className = {filter === 'Completed' ? 'selected' : ''}
                >Completed</a>
            </li>
        </ul>
        <button
            className={`todo-delete-completed${!completedLength ? ' hidden' : ''}`}
            onClick={handleDeleteCompleted}
        >
            Delete Completed
        </button>
    </div>
);
export default Footer;
