import React from 'react';
// react-router 모듈에서 link객체만 수입한다.
// classnames중에서 ClassNames를 수입한다.
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
				{/*모든 목록을 클릭시 !filter이면 selected클래스 추가.*/}
                <Link
                    to="/"
                    className={ClassNames({'selected': !filter})}
                >All</Link>
            </li>
            <li>
				{/*Active 버튼 클릭시 !filter이면 active클래스 추가.*/}
                <Link
                    to="/active"
                    className={ClassNames({'selected': filter === 'active'})}
                >Active</Link>
            </li>
            <li>
			   {/*Completed 버튼 클릭시 classname이 filter === 'completed'가(true인) 필터된 값만 보여준다.*/}
                <Link
                    to="/completed"
                    className={ClassNames({'selected': filter === 'completed'})}
                >Completed</Link>
            </li>
        </ul>
        <button
			//완료목록 개수가 false이면 숨겨라.
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
