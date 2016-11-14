import React from 'react';
// reactRouter model 중에 Link 객체를 쓴다.(수입한다.)
// reactRouter 모델(객체)안에 여러가지 Link.js .. 등이 있는데 Link만 Footer.js 파일에서 로드하겠다.
import {Link} from 'react-router';
// classNames로 부터 ClassNames를 수입한다. 정확한 의미 모르겠음?
import ClassNames from 'classNames';

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
//				 router 및 ClassNames가 여기에 쓰임 함수 형태로 쓰이는걸 보면 자바스크립트 프로토타입 객체인듯
//				 클래스 네임즈의 속성 selected !filter 값을 가진다.
                <Link
					to="/"
					className = {ClassNames({'selected' : !filter})}
				>All</Link>
            </li>
            <li>
//				 반복
                <Link
					to="/active"
					className = {ClassNames({'selected' : filter === 'active'})}
				>Active</Link>
            </li>
            <li>
//				 반복
                <Link
					to="/completed"
					className = {ClassNames({'selected' : filter === 'completed'})}
				>Completed</Link>
            </li>
        </ul>
		// 선택된 competedLength 가 없다면 clssanmes 히든
		// 선택된 개수가 있고 버튼을 클릭했을땐 handleDeleteCompleted 함수를 실행하라.
        <button 
            className={ClassNames('todo-delete-completed', {
				hidden: !completedLength					   
			})}
			onClick = {handleDeleteCompleted}
        >완료된것 지워라</button>
    </div>
);
export default Footer;