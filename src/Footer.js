import React from 'react';

// 함수의 인자를 객체({filter: filter,...})로 전달하고 돔을 출력함. 
const Footer = ({
    filter,
    activeLength,
    completedLength,
    handleSelectFilter,
    handleDeleteCompleted    
}) => (
	// 각각 돔에서 무엇을 하는지는 파악해야 된다. 무엇을 바꿀것인가.
	// ex) 16line {activeLength > 1 ? 'items' : 'item'} 1보다 클경우엔 span안의 text = items and not item.. 
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