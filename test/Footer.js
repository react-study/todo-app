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
            <span> {activeLength > 1 ? 'items' : 'item'}</span>
            {' '}left
        </span>
        <ul className="todo-filters">
            <li>
                <a 
                    onClick = { () => handleSelectFilter('All')}
                    className = {filter === 'All' ? 'selected' : ''}
                >
                    전체
                </a>
            </li>
            <li>
                <a
                    onClick = {() => handleSelectFilter('Active')}
                    className = {filter === 'Active' ? 'selected' : ''}
                >
                    할 목록
                </a>
            </li>
            <li>
                <a 
                    onClick = { () =>    handleSelectFilter('Completed')}
                    className = {filter === 'Completed' ? 'selected' : ''}
                >
                    완료 목록
                </a>
            </li>
        </ul>
        <button 
            className={`todo-delete-completed${!completedLength ? ' hidden' : ''}`}
            onClick = {handleDeleteCompleted}
        >
            완료된것 지워라
        </button>
    </div>
);
export default Footer;